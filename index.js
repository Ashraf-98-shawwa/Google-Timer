const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const start = document.getElementById("start")
const reset = document.getElementById("reset")
const finish = document.getElementById("finish")


start.onclick = _ => {
    if (start.classList.contains("start")) {
        start.classList.remove("start");
        start.classList.add("pause");
        start.innerText = "pause"
        myinterval = setInterval(decrement, 1000);
    }

    else if (start.classList.contains("pause")) {
        start.classList.remove("pause");
        start.classList.add("start");
        start.innerText = "start"
        clearInterval(myinterval);
    }

}

reset.onclick = _ => {
    clearInterval(myinterval);
    minutes.innerText = "5";
    seconds.innerText = "00";
    start.classList.remove("pause");
    start.classList.add("start");
    start.innerText = "start"
}


function decrement() {
    if (seconds.innerText > 0) {
        if (seconds.innerText < 11) {
            value = seconds.innerText - 1
            seconds.innerText = "0" + value
        } else {
            seconds.innerText -= 1
        }
    } else if (seconds.innerText == 0) {
        if (minutes.innerText != 0) {
            minutes.innerText -= 1
            seconds.innerText = 59
        } else {
            finish.style.display = "block"
        }
    }
}

