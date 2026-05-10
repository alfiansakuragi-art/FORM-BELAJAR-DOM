const kotak = document.getElementById("kotak-sembunyi")
const show = document.getElementById("btn-tampilkan")
const hide = document.getElementById("btn-sembunyikan")
const toggle = document.getElementById("btn-toggle-vis")

hide.addEventListener("click", () => {
    kotak.style.display = "none";
});

show.addEventListener("click", () => {
    kotak.style.display = "block";
});

toggle.addEventListener("click", () => {
    if(kotak.style.display === "none"){
        kotak.style.display = "block";
    } else if (kotak.style.display === "block") {
        kotak.style.display = "none";
    }
});