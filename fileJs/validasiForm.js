const id = document.getElementById("input-email")
const password = document.getElementById("input-password")
const btnValidasi = document.getElementById("btn-validasi")
const output = document.getElementById("output-validasi")

btnValidasi.addEventListener("click", () => {
    if (id.value === "alfiansakuragi@gmail.com" && password.value == "1234567") {
        output.textContent = "WELCOME BACK BOSS"
    } else if (id.value === "suciramadhani@gmail.com" && password.value == "040323") {
        output.textContent = "WELCOME SUCI❤️"
    } else {
        output.textContent = "login gagal jir"
    }
});

