const areaTeks = document.getElementById("area-teks")
const btnUpper = document.getElementById("btn-upper")
const btnLower = document.getElementById("btn-lower")
const btnReverse = document.getElementById("btn-reverse")
const btnWordCount = document.getElementById("btn-word-count")
const outputString = document.getElementById("output-string")

btnUpper.addEventListener("click", () => {
    outputString.textContent = areaTeks.value.toUpperCase();
})

btnLower.addEventListener("click", () => {
    outputString.textContent = areaTeks.value.toLowerCase()
})

btnReverse.addEventListener("click", () => {
    outputString.textContent = areaTeks.value.split('').reverse().join('');
})

btnWordCount.addEventListener("click", () => {
    outputString.textContent = `jumlah huruf: ${areaTeks.value.trim().split('').length}`
})