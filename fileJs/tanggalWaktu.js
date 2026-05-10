const btnTampilTanggal = document.getElementById("btn-tampil-tanggal")
const btnTampilWaktu = document.getElementById("btn-tampil-waktu")
const outputDatetime = document.getElementById("output-datetime")

const now = new Date
const namaHari = ["minggu","senin", "selasa", "rabu", "kamis", "jumat", "sabtu"]
const day = now.getDate()
const hariIni = namaHari[now.getDay()]
const jam = now.getHours()
const menit = now.getMinutes()
const scnds = now.getSeconds()

btnTampilTanggal.addEventListener("click", () => {
    outputDatetime.textContent = `sekarang : tanggal ${day}, hari ${hariIni}`
})

btnTampilWaktu.addEventListener("click", () => {
    outputDatetime.textContent = `saat ini: jam ${jam}:${menit}:${scnds}`
})