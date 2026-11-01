import { createHumanQuestion, validHumanAnswer } from "./human-check.mjs";

export function attachHumanCheck(form: HTMLFormElement) {
  const root = form.querySelector<HTMLElement>("[data-human-check]")!;
  const input = root.querySelector<HTMLInputElement>("input")!;
  const prompt = root.querySelector<HTMLElement>("[data-human-question]")!;
  const error = root.querySelector<HTMLElement>("[data-human-error]")!;
  let question = createHumanQuestion();
  function reset() {
    question = createHumanQuestion();
    prompt.textContent = question.prompt;
    input.value = "";
    input.setCustomValidity("");
    error.textContent = "";
  }
  reset();
  input.addEventListener("input", () => {
    input.setCustomValidity("");
    error.textContent = "";
  });
  root.querySelector("[data-refresh-human]")!.addEventListener("click", () => {
    reset();
    input.focus();
  });
  form.addEventListener("reset", reset);
  return {
    reset,
    validate() {
      const valid = validHumanAnswer(input.value, question.answer);
      const message = valid
        ? ""
        : "Enter the four lowercase letters shown in the captcha.";
      input.setCustomValidity(message);
      error.textContent = message;
      if (!valid) input.reportValidity();
      return valid;
    },
  };
}
