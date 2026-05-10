const gambarToggle = document.getElementById("gambar-toggle")
const btnGantiGambar = document.getElementById("btn-ganti-gambar")
const btnResetGambar = document.getElementById("btn-reset-gambar")
const outputGambar = document.getElementById("output-gambar")

btnGantiGambar.addEventListener("click", () => {

   const rd = Math.floor(Math.random() * 100)
    gambarToggle.src = `https://picsum.photos/seed/${rd}/399/121`

    outputGambar.textContent = `https://picsum.photos/seed/${rd}/399/121`
})

btnResetGambar.addEventListener("click", () => {
    if (gambarToggle.src == "https://picsum.photos/seed/js1/399/121") {
        return;
    } else {
        gambarToggle.src = "https://picsum.photos/seed/js1/399/121";
    }
})