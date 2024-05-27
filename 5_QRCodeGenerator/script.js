const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const form = document.querySelector("form");
const qrText = document.querySelector(".qrText");
const qr = document.querySelector(".qr");
const qrImage = document.querySelector(".qr img");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  QRGenerator();
});

function QRGenerator() {
  if (qrText.value.length > 0) {
    qrImage.src = url + qrText.value;
    qr.classList.add("show-img");
  } else {
    // adding the shake effect to indicate that user hasnt entered anything in the input
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error"); // removing it after 1 sec
    }, 1000);
  }
}
