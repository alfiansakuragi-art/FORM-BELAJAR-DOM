const inputProduk = document.getElementById("inp-produk")
const inputHarga = document.getElementById("inp-harga")
const btnTambahTabel = document.getElementById("btn-tambah-tabel")
const tabelProduk = document.getElementById("tabel-produk")
const tBodyProduk = document.getElementById("tbody-produk")


btnTambahTabel.addEventListener("click", () => {
    if (inputProduk.value == "" || inputHarga.value == "") {
        return;
    } else {

        let tr = document.createElement("tr");
        let jumlahBaris = tBodyProduk.children.length

        tr.innerHTML = `
              <td>${jumlahBaris + 1}</td>
              <td>${inputProduk.value}</td>
              <td>RP ${inputHarga.value}</td>
              <td><span style="color:var(--red);cursor:pointer;" class="hapus-baris">✕</span></td>`
        tBodyProduk.appendChild(tr)
    }
});

tBodyProduk.addEventListener("click", (e) => {
    if(e.target.classList.contains("hapus-baris")) {
        e.target.closest("tr").remove()
    }
});

