const divs = document.querySelectorAll(".gameBox div");
const img = document.querySelector(".gameInfo img");
let audioX = new Audio("music/ting1.mp3");
let audioO = new Audio("music/ting2.mp3");
let audioOver = new Audio("music/gameover.mp3");
let audioWin = new Audio("music/win.mp3");
let turn = document.querySelector(".gameInfo .turn");
let line = document.querySelector(".line");
let positionX = [];
let positionY = [];
function lineAnimation(x, y, rotateAmount) {
  line.style.width = "25vw";
  line.style.transform = `translate(${x}vw,${y}vw) rotate(${rotateAmount}deg)`;
}
function isWinner(position) {
  const pos = [];
  position.forEach((p) => {
    pos.push(Number(p[1]));
  });
  if (pos.length < 3) return false;
  pos.sort();
  for (let i = 0; i < pos.length; i++) {
    for (let j = i + 1; j < pos.length; j++) {
      for (let k = j + 1; k < pos.length; k++) {
        if (pos[i] == 1 && pos[j] == 2 && pos[k] == 3) {
          lineAnimation(-15, -8, 0);
          return true;
        } else if (pos[i] == 4 && pos[j] == 5 && pos[k] == 6) {
          lineAnimation(-15, 2, 0);
          return true;
        } else if (pos[i] == 7 && pos[j] == 8 && pos[k] == 9) {
          lineAnimation(-15, 12, 0);
          return true;
        } else if (pos[i] == 1 && pos[j] == 4 && pos[k] == 7) {
          lineAnimation(-25, 2, 90);
          return true;
        } else if (pos[i] == 2 && pos[j] == 5 && pos[k] == 8) {
          lineAnimation(-15, 2, 90);
          return true;
        } else if (pos[i] == 3 && pos[j] == 6 && pos[k] == 9) {
          lineAnimation(-5, 2, 90);
          return true;
        } else if (pos[i] == 1 && pos[j] == 5 && pos[k] == 9) {
          lineAnimation(-15, 2, 45);
          return true;
        } else if (pos[i] == 3 && pos[j] == 5 && pos[k] == 7) {
          lineAnimation(-15, 2, -45);
          return true;
        }
      }
    }
  }
  return false;
}

let count = 0;
divs.forEach((div) => {
  div.addEventListener("click", (e) => {
    let className = e.target.className;
    if (count % 2 == 0) {
      div.innerHTML = '<img src="images/x.png">';
      audioX.play();
      positionX.push(className);
      turn.innerHTML = "Turn For O";
      if (isWinner(positionX)) {
        turn.innerHTML = "X Won";
        audioOver.play();
        img.style.width = "12vw";
        audioWin.load();
        audioWin.play();
      }
    } else {
      div.innerHTML = '<img src="images/o.png">';
      audioO.play();
      positionY.push(className);
      turn.innerHTML = "Turn For X";
      if (isWinner(positionY)) {
        turn.innerHTML = "O Won";
        audioOver.play();
        img.style.width = "12vw";
        audioWin.load();
        audioWin.play();
      }
    }
    count++;
  });
});

const btn = document.querySelector(".gameInfo button");
btn.addEventListener("click", (e) => {
  divs.forEach((div) => {
    div.innerHTML = "";
    turn.innerHTML = "Turn For X";
  });
  positionX = [];
  positionY = [];
  audioWin.pause();
  img.style.width = 0;
  line.style.width = 0;
  count = 0;
});
