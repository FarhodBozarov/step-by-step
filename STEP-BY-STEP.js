document
  .getElementById("button")
  .addEventListener("click", () => document.location.reload(true));
let game = document.getElementById("game");
let d = (div) => document.createElement(div);
let arr1 = [];
let massiv = [];
let massiv1 = [];
let hh = 0;
let n = 4;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}
shuffle(arr);

for (let i = 0; i < 16; i++) {
  let block = d("div");
  block.className = "block";
  massiv.push(block);
  setTimeout(() => {
    block.onclick = function () {
      block.classList.add("colored");
      massiv1.push(i + 1);
      arr1.push(arr[hh]);
      if (massiv1[hh] === arr1[hh] && hh === n - 1) {
        n++;
        setTimeout(() => {
          alert("Siz g'alaba qozondingiz!!!");
          massiv.forEach((element) => element.classList.remove("colored"));
          start();
          massiv1 = [];
          arr1 = [];
          arr = shuffle(arr);
          hh = 0;
        });
      } else if (massiv1[hh] !== arr[hh]) {
        block.style.backgroundColor = "red";
        setTimeout(() => {
          alert("Siz mag'lub bo'ldingiz");
          document.location.reload(true);
        });
      }
      hh++;
    };
  }, n * 1000 + 1000);
  game.appendChild(block);
}

const start = () => {
  let h = 0;
  let time = setInterval(() => {
    massiv[arr[h] - 1].classList.add("colored");
    h += 1;
    if (h == n) {
      clearInterval(time);
      setTimeout(() => {
        massiv.forEach((element) => element.classList.remove("colored"));
      }, [1000]);
    }
  }, 1000);
};
start();
