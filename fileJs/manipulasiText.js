const inputNama = document.getElementById("input-nama")
const btnSapa = document.getElementById("btn-sapa")
const btnReset = document.getElementById("btn-reset-teks")
const outputSapa = document.getElementById("output-sapa")


btnSapa.addEventListener("click", () => {
    outputSapa.textContent = inputNama.value;
});


btnReset.addEventListener("click", () => {
    inputNama.value = ""
    outputSapa.textContent = "hasil akan muncuk di sini"
});