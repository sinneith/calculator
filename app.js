const result = document.getElementById("result");
const buttons = document.querySelectorAll(".button");
const CEBtn = document.getElementById("CE");
const calBtn = document.getElementById("calResult");
const delBtn = document.getElementById("del");

buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (result.innerText === "0") {
      result.innerText = result.innerText.slice(0, -1);
      result.innerText += event.target.innerText;
    } else {
      result.innerText += event.target.innerText;
    }
  });
});

CEBtn.addEventListener("click", () => {
  result.innerText = "0";
});

calBtn.addEventListener("click", () => {
  result.innerText = eval(result.innerText);
});

delBtn.addEventListener("click", () => {
  if (result.innerText.length !== 1) {
    result.innerText = result.innerText.slice(0, -1);
  } else if (result.innerText.length === 1 && result.innerText !== "0") {
    result.innerText = "0";
  }
});
