const darkAstronauts = [1, 2, 3];
const lightAstronauts = [4, 5];

const min = 1;
const max = 5;
const astronaut = Math.floor(Math.random() * (max - min + 1) + min)

if (lightAstronauts.includes(astronaut)) {
  document.querySelectorAll(".dark").forEach(node => {
    node.classList.remove("dark")
  })
}

const player = document.querySelector("lottie-player");
player.load(`./assets/${astronaut}.json`);
