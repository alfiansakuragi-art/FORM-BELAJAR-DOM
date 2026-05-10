const inputKeyboard = document.getElementById("input-keyboard")
const outputKeyboard = document.getElementById("output-keyboard")
const outputCharcount = document.getElementById("output-charcount")

inputKeyboard.addEventListener("input", () => {
    outputKeyboard.textContent = `Kamu mengetik: ${inputKeyboard.value}`;
    outputCharcount.textContent = `Karakter: ${inputKeyboard.value.length}`
})