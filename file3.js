const body = document.body;
const button = document.querySelector("button");

const getRandomColor = function () {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const randomColor = `rgb(${red},${green},${blue})`;
  return randomColor;
};

const id = setInterval(() => {
  body.style.backgroundColor = getRandomColor();
}, 2000);

button.addEventListener("click", ()=> {
    clearInterval(id);
    button.textContent = "Start"
});
