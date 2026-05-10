const angkaA = document.getElementById("angka-a")
const angkaB = document.getElementById("angka-b")
const tambah = document.getElementById("btn-tambah")
const kurang = document.getElementById("btn-kurang")
const kali = document.getElementById("btn-kali")
const bagi = document.getElementById("btn-bagi")
const hasil = document.getElementById("output-kalkulator")

// tambah
tambah.addEventListener("click", () => {
    jumlahTambah = parseInt(angkaA.value) + parseInt(angkaB.value)
    hasil.textContent = jumlahTambah
});
// kurang
kurang.addEventListener("click", () => {
    jumlahKurang = parseInt(angkaA.value) - parseInt(angkaB.value)
    hasil.textContent = jumlahKurang
});// kali
kali.addEventListener("click", () => {
    jumlahKali = parseInt(angkaA.value) * parseInt(angkaB.value)
    hasil.textContent = jumlahKali
});// bagi
bagi.addEventListener("click", () => {
    jumlahBagi = parseInt(angkaA.value) / parseInt(angkaB.value)
    hasil.textContent = jumlahBagi
});