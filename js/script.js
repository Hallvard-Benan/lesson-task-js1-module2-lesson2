const button = document.querySelector("button");
const countContainer = document.querySelector(".count");
let count = 0;

button.onclick = function () {
  button.disabled = true;
  count = 0;

  const counter = setInterval(() => {
    count++;
    countContainer.innerHTML = count;

    if (count === 7) {
      clearInterval(counter);
      button.disabled = false;
    }
  }, 1000);
};
