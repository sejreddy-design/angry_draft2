const quiz = document.querySelector("#quiz");
const verdict = document.querySelector("#verdict");
const loveButton = document.querySelector("#loveButton");
const loveReveal = document.querySelector("#loveReveal");

quiz.addEventListener("submit", (event) => {
  event.preventDefault();
  const answers = new FormData(quiz);
  const q1 = answers.get("q1");
  const q2 = answers.get("q2");
  const q3 = answers.get("q3");
  const q4 = answers.get("q4");

  let opening = q1 === "You, obviously"
    ? "Correct answer. You may live. 😌💗"
    : q1 === "Both"
      ? "‘Both’?! Interesting. The court will remember this. 👀"
      : "SPORTS?! Sir, please hand over your boyfriend privileges. 🚨";

  verdict.innerHTML = `<strong>OFFICIAL GIRLFRIEND VERDICT ⚖️</strong><br>${opening}<br><br>
    Your fine: <strong>${escapeHtml(q2)}</strong>.<br>
    Missing your girlfriend: <strong>${escapeHtml(q3)}</strong>.<br>
    Repayment plan: <strong>${escapeHtml(q4)}</strong>.<br><br>
    Sentence: one date, lots of cuddles, and absolutely no “just five more minutes.” 💋`;
  verdict.hidden = false;
  verdict.scrollIntoView({ behavior: "smooth", block: "center" });
});

loveButton.addEventListener("click", () => {
  loveReveal.hidden = !loveReveal.hidden;
  loveButton.textContent = loveReveal.hidden ? "Tap for your final warning 💘" : "Warning delivered 😤💗";
});

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[character]);
}
