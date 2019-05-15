
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
function loadWrapper(){
var images2 = document.getElementById("wrapper");
	
	fadeIn(wrapper, 1, 0.02, 20);
}


window.addEventListener("load", loadWrapper, false);