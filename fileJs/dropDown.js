const pilihKota = document.getElementById("pilih-kota")
const btnPilihKota = document.getElementById("btn-pilih-kota")
const outputKota = document.getElementById("output-kota")

btnPilihKota.addEventListener("click", () => {

    const kota = pilihKota.value
    outputKota.textContent = `kamu pilih kota ${kota}`

})