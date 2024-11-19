
const clickSound = document.getElementById("click-button");
function playSound() {
    clickSound.currentTime = 0; // Сбрасываем звук к началу, если он уже играет
    clickSound.play();
}
document.getElementById("click1").addEventListener("click", playSound);
document.getElementById("click2").addEventListener("click", playSound);

