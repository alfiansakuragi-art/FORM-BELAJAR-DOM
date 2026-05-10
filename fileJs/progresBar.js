const inpProgress = document.getElementById("inp-progress")
const barProgress = document.getElementById("bar-progress")
const btnSetProgress = document.getElementById("btn-set-progress")
const btnPlus10 = document.getElementById("btn-plus10")
const btnMinus10 = document.getElementById("btn-minus10")
const outputProgress = document.getElementById("output-progress")


btnSetProgress.addEventListener("click", () => {
    if (inpProgress.value <= 0) {
        return;
    } else {
        barProgress.value = inpProgress.value;
        outputProgress.textContent = `${inpProgress.value}%`;
    };
});

btnMinus10.addEventListener("click", () => {
    if (barProgress.value <= 10){
        return;
    } else {
        barProgress.value -= 10;
        outputProgress.textContent = `${barProgress.value}%`
    }
})

btnPlus10.addEventListener("click", () => {
    barProgress.value += 10;
    outputProgress.textContent = `${barProgress.value}%`
})