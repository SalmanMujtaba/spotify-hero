addEventListener("DOMContentLoaded", (event) => {
  const cardMove = document.getElementsByClassName('card-move')[0];
  let { height } = cardMove.getBoundingClientRect();
  let x = 0;
  cardMove.style.transform = `matrix(1, 0, 0, 1, 0, ${x})`;
  setInterval(() => {
    cardMove.style.transform = `matrix(1, 0, 0, 1, 0, ${--x})`;
    if ((cardMove.getBoundingClientRect().y + height) <= 0) {
      x = 1000;
    }
  }, 10);
});