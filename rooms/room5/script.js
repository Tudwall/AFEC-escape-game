export function initRoom() {
  const validateBtn = document.getElementById("validate-answer");
  const codeInput = document.getElementById("code-input");

  validateBtn.addEventListener("click", () => {
    const userAnswer = codeInput.value.trim().toLowerCase();
    const answerEvent = new CustomEvent("answer-submitted", {
      detail: { value: userAnswer },
    });
    document.dispatchEvent(answerEvent);
  });
}
