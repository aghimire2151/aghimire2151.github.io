function fadeIn(item, opFinal, opIncrease, time) {
	var op = opIncrease;
	var timer = setInterval(function () {
        if (op >= opFinal) {
            clearInterval(timer);
        }
        item.style.opacity = op;
        op += opIncrease;
    }, time);
}
function loadImg() {
    var images = document.getElementById("images");
    fadeIn(images, 1, 0.02, 20);
}

window.addEventListener("load", loadImg, false);