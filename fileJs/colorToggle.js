const warna = document.getElementById("kotak-warna")
const red = document.getElementById("btn-merah")
const blue = document.getElementById("btn-biru")
const green = document.getElementById("btn-hijau")
const random = document.getElementById("btn-random-warna")

const color = ["red", "blue", "green", "aqua"]



red.addEventListener("click", () => {
    warna.style.background = "red";
})
blue.addEventListener("click", () => {
    warna.style.background = "blue";
})
green.addEventListener("click", () => {
    warna.style.background = "green";
})

random.addEventListener("click", () => {
    const randomColor = color[~~(Math.random() * color.length)]
    warna.style.background = randomColor;
})