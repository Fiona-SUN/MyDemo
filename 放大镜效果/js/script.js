
window.addEventListener("load",loadPage)

function loadPage(){
	var enlageGlass = document.getElementById("enlageGlass");
	var normalImg = document.getElementById("normalImg");
	var enlageImg = document.getElementById("enlageImg");

	var zoom = new objAnim();

	normalImg.addEventListener("mousemove",function(event){
		zoom.zoomMove(normalImg,enlageGlass,enlageImg,event);
	})

	normalImg.addEventListener("mouseover",function(){
		zoom.zoomIn(enlageGlass,enlageImg);
	})

	normalImg.addEventListener("mouseout",function(){
		zoom.zoomOut(enlageGlass,enlageImg);
	})
}

