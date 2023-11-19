let count = 0;
const value = document.querySelector(".displayText");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const action = e.currentTarget.classList;

    action.contains("decrease")
      ? count--
      : action.contains("increase")
      ? count++
      : (count = 0);

    value.textContent = count;
    count > 0
      ? (value.style.color = "green")
      : count < 0
      ? (value.style.color = "red")
      : (value.style.color = "beige");
  });
});
