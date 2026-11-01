export function createHumanQuestion(random = Math.random) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const code = Array.from(
    { length: 4 },
    () => alphabet[Math.floor(random() * alphabet.length)],
  ).join("");
  return { prompt: code, answer: code };
}

export function validHumanAnswer(value, expected) {
  return (
    typeof value === "string" &&
    /^[a-z]{4}$/.test(value.trim()) &&
    value.trim() === expected
  );
}
