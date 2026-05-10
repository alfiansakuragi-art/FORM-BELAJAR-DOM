const displayStopwatch = document.getElementById("display-stopwatch")
const btnMulai = document.getElementById("btn-mulai")
const btnPause = document.getElementById("btn-pause")
const btnStopReset = document.getElementById("btn-stop-reset")

let detik = 0;
let intervald = null;

btnMulai.addEventListener("click", () => {
    if (intervald !== null) return;

    intervald = setInterval(() => {
        detik++;

        const jam = Math.floor(detik / 3600);
        const menit = Math.floor((detik % 3600) / 60);
        const sisaDetik = detik % 60;

        displayStopwatch.textContent = `${String(jam).padStart(2, "0")}:${String(menit).padStart(2, "0")}:${String(sisaDetik).padStart(2, "0")}`;
    }, 1000);
});

btnPause.addEventListener("click", () => {
    clearInterval(intervald);
    intervald = null;
});

btnStopReset.addEventListener("click", () => {
    clearInterval(intervald);
    intervald = null;
    detik = 0;
    displayStopwatch.textContent = "00:00:00";
});