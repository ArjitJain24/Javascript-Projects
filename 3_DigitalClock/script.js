function timeSetter() {
  const date = new Date();
  const hours = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const hourSpan = document.querySelector(".hours");
  const minSpan = document.querySelector(".mins");
  const secondSpan = document.querySelector(".sec");
  if (hours < 10) {
    hourSpan.innerHTML = `0${hours}`;
  } else {
    hourSpan.innerHTML = hours;
  }
  if (min < 10) {
    minSpan.innerHTML = `0${min}`;
  } else {
    minSpan.innerHTML = min;
  }
  if (sec < 10) {
    secondSpan.innerHTML = `0${sec}`;
  } else {
    secondSpan.innerHTML = sec;
  }
}
setInterval(() => {
  timeSetter();
}, "1000");
