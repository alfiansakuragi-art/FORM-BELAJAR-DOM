const item = document.getElementById("input-item")
const addItem = document.getElementById("btn-tambah-item")
const removeItem = document.getElementById("btn-hapus-semua")
const parentList = document.getElementById("daftar-item")

addItem.addEventListener("click", () => {

    let li = document.createElement("li");

    if (item.value == "") {
        return;
    } else {
        li.innerHTML = `${item.value} <span class="hapus">✕</span>`

        parentList.appendChild(li);
    }

});

removeItem.addEventListener("click", () => {
    parentList.innerHTML = ""
});

parentList.addEventListener("click", (e) => {
    if (e.target.classList.contains("hapus")) {
        e.target.closest("li").remove();
    }
});