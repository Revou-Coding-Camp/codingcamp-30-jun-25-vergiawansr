//PopUp Nama Gerak//
document.addEventListener("DOMContentLoaded", () => {
  const userName = prompt("Siapa nama kamu?");
  const welcomeEl = document.getElementById("welcomeText");

  const message = userName && userName.trim() !== ""
    ? `Hi, ${userName}! Welcome To My Website`
    : "Hi! Welcome To My Website";

  typeSentence(message, welcomeEl, 100);
});

function typeSentence(sentence, targetEle, speed) {
  targetEle.textContent = "";
  let i = 0;

  function type() {
    if (i < sentence.length) {
      targetEle.textContent += sentence.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

