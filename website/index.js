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

function loading() {
	var el = document.getElementById("image1");
	
	fadeIn(el, 0.5, 0.01, 20);
	
	
}

window.addEventListener("load", loading, false);