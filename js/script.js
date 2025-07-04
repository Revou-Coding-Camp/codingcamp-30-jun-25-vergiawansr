//PopUp Nama//
document.addEventListener("DOMContentLoaded", () => {
  const userName = prompt("Siapa nama kamu?");
  const welcomeEl = document.getElementById("welcomeText");

  const message = userName && userName.trim() !== ""
    ? `Hi, ${userName}! Welcome To My Website`
    : "Hi! Welcome To My Website";

  typeSentence(message, welcomeEl, 100); 
});

/**
 * F
 * @param {string} sentence
 * @param {HTMLElement} targetEle  
 * @param {number} speed 
 */
function typeSentence(sentence, targetEle, speed) {
  targetEle.textContent = "";        // kosongkan dulu
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

