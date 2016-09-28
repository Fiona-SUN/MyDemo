window.addEventListener("load",function(){

	var toTop = document.getElementById("toTop");
	var posY = 0;

	window.addEventListener("scroll",function(){
		posY = window.pageYOffset || document.documentElement.scrollTop;

		if(posY == 0){
			toTop.style.display = "none";
		}else{
			toTop.style.display = "block"
		}
	})

	toTop.addEventListener("click",function(){
			var des = 0;
			var start = posY;

			moveSlowly(start,des);
	})

})

var timer = null;
function moveSlowly(start,des,time){
	clearInterval(timer);
	var speedTime = time || 100;
	var distance = des - start;
	var speed = distance/speedTime;
	var pos = start;
	var i = 1;

	timer = setInterval(function(){

		if(i == speedTime){
			document.documentElement.scrollTop = document.body.scrollTop = des;
			clearInterval(timer);
		}else{
			pos = pos + speed;
			document.documentElement.scrollTop = document.body.scrollTop = pos;
			i++;
		}

	},1)
}