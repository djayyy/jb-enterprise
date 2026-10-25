// Preview-only metadata checks. Production needs independent server validation.
export function validateAttachments(files, kind) {
  const career = kind === "career";
  const limit = career ? 5_000_000 : 2_000_000_000;
  if (career && files.length !== 1)
    return "Choose one resume to check the application.";
  if (!career && files.length > 10)
    return "Choose no more than 10 files for this preview.";
  if (files.reduce((sum, f) => sum + f.size, 0) > limit)
    return career
      ? "Your resume must be 5 MB or smaller."
      : "The combined file size must be 2 GB or smaller.";
  const allowed = career ? /\.(pdf|docx)$/i : /\.(pdf|docx|jpg|jpeg|png)$/i;
  if (files.some((f) => !allowed.test(f.name)))
    return career
      ? "Use a PDF or DOCX resume."
      : "Use PDF, DOCX, JPG or PNG files in this preview.";
  if (files.some((f) => f.size === 0))
    return "One of your files is empty. Choose a different file.";
  return "";
}
export function enquiryContext(search) {
  const p = new URLSearchParams(search);
  // Plain text only, bounded, never interpolated as markup.
  return ["service", "part", "need"]
    .map((k) => p.get(k))
    .filter(Boolean)
    .join(" · ")
    .replace(/[\u0000-\u001f\u007f]/g, "")
    .slice(0, 200);
}
