
eventUtils.addHandler(window,"load",function(){

	var topPart = document.getElementById("topPart");

	eventUtils.addHandler(topPart,"mousedown",clickEle);

})

var posX;
var posY;

function clickEle(event){
	var e = eventUtils.getEvent(event);
	eventUtils.preventDefault(e);

	posX = e.clientX - dialog.offsetLeft;
	posY = e.clientY - dialog.offsetTop;
	
	eventUtils.addHandler(document,"mousemove",moveEle);
}

function moveEle(event){
	var e = eventUtils.getEvent(event);
	var dialog = document.getElementById("dialog");

	var desX = e.clientX -posX;
	var desY = e.clientY -posY;
	
	var winWid = document.documentElement.clientWidth || document.body.clientWidth;
    var winHei = document.documentElement.clientHeight || document.body.clientHeight;

	if(desX<0){
		desX = 0 ;
	}
	else if(desX > winWid - dialog.offsetWidth){
		desX = winWid - dialog.offsetWidth;
	}

	if(desY<0){
		desY = 0;
	}
	else if(desY > winHei - dialog.offsetHeight){
		desY = winHei - dialog.offsetHeight;
	}


	dialog.style.left = desX +"px";
	dialog.style.top = desY +"px";

	eventUtils.addHandler(document,"mouseup",upEle);
}

function upEle(){
	eventUtils.removeHandler(document,"mousemove",moveEle);
	eventUtils.removeHandler(document,"mouseup",upEle);
}
