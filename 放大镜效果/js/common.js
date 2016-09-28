var objAnim = function(){

	this.zoomMove =function(normalImg,enlageGlass,enlageImg,event){
		var e = event || window.event;
		var scrollPosX = window.pageXOffset || document.documentElement.scrollLeft;
		var scrollPosY = window.pageYOffset || document.documentElement.scrollTop;
		var times = enlageImg.offsetWidth/normalImg.offsetWidth;

		var desX = e.clientX - normalImg.parentNode.offsetLeft + scrollPosX - enlageGlass.offsetWidth/2;
		var desY = e.clientY - normalImg.parentNode.offsetTop + scrollPosY - enlageGlass.offsetHeight/2
		
		if(desX<0){
			desX = 0;
		}
		else if(desX > normalImg.offsetWidth - enlageGlass.offsetWidth){
			desX = normalImg.offsetWidth - enlageGlass.offsetWidth;
		}

		if(desY < 0){
			desY = 0;
		}
		else if(desY > normalImg.offsetHeight - enlageGlass.offsetHeight){
			desY = normalImg.offsetHeight - enlageGlass.offsetHeight;
		}

		enlageGlass.style.left = desX + "px";
		enlageGlass.style.top = desY +"px";

		enlageImg.style.backgroundPosition = -desX*times + "px "+(-desY*times) +"px";

	}

	this.zoomIn = function(enlageGlass,enlageImg){
		enlageImg.style.display = "block";
		enlageGlass.style.display = "block";
	}

	this.zoomOut = function(enlageGlass,enlageImg){
		enlageImg.style.display = "none";
		enlageGlass.style.display = "none";
	}

}