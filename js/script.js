// Tampilkan prompt saat halaman dimuat
window.addEventListener("DOMContentLoaded", () => {
  const userName = prompt("Siapa nama kamu?");
  const welcomeText = document.getElementById("welcomeText");

  if (userName && userName.trim() !== "") {
    welcomeText.textContent = `Hi, ${userName}! Welcome To My Website`;
  }
});
