var preTarget = null;

window.onload=function(){
	var nav = document.getElementById("nav");
	var moveObj = document.getElementById("moveObj");
	var moveObjWidth = moveObj.offsetWidth;

	nav.onmouseover = function(event){
		var e = event || window.event;
		//console.log(e.clientX+","+e.clientY)
		var moveLeft = e.clientX - nav.parentNode.offsetLeft;
		var maxIdx = nav.getElementsByTagName("li").length-1;

		calcArguments(moveObj,moveLeft,moveObjWidth,maxIdx);
	}
}
		
		
//每次移动的距离，下次移动的位置，上一次移动的位置

//停下当前动作（以当前停下为下次初始值） / 完成当前动作（以完成后为下次初始值）