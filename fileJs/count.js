let angka = document.getElementById("angka-counter")
let decrease = document.getElementById("btn-decrement")
let reset = document.getElementById("btn-reset-counter")
let increase = document.getElementById("btn-increment")
let nilai = parseInt(angka.textContent)

// increase
increase.addEventListener("click", () => {
    nilai += 1;
    angka.textContent = nilai;
});

// decrease
decrease.addEventListener("click", () => {
    if (nilai <= 0) {
        return;
    } else {
        nilai -= 1;
        angka.textContent = nilai;
    }
});