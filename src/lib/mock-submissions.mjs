export const resourceSessionKey = "jbael-resource-access-v2";

export function validateResourceDetails(details) {
  const limits = { name: 160, phone: 40, company: 160, email: 254 };
  for (const [key, limit] of Object.entries(limits)) {
    if (typeof details[key] !== "string" || !details[key].trim())
      return "Please complete all four fields.";
    if (details[key].trim().length > limit || /[\r\n\x00]/.test(details[key]))
      return "Please check your details and try again.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email.trim()))
    return "Enter a valid email address.";
  if (
    !/^[+\d\s().-]+$/.test(details.phone.trim()) ||
    details.phone.replace(/\D/g, "").length < 7
  )
    return "Enter a valid contact number with at least 7 digits.";
  return "";
}

// Explicitly local: no email, fetch, analytics or persistent personal details.
export function mockResourceSubmission(details, context) {
  const error = validateResourceDetails(details);
  return error ? { ok: false, error } : { ok: true, mocked: true, context };
}

export function resourceAccessSession(storage) {
  let granted = false;
  return {
    hasAccess() {
      try {
        return granted || storage()?.getItem(resourceSessionKey) === "granted";
      } catch {
        return granted;
      }
    },
    grant() {
      granted = true;
      try {
        storage()?.setItem(resourceSessionKey, "granted");
      } catch {}
    },
  };
}
