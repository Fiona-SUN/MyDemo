window.addEventListener("load",function(){
	var adv = document.getElementById("adv");

	window.addEventListener("scroll",function(){
		var scrollYPos = window.pageYOffset || document.documentElement.scrollTop
		var start = adv.offsetTop;
		var topPos = 50;
		var des = scrollYPos + topPos;

		moveSlowly(start,des)
	})

})

var timer = null;
function moveSlowly(start,des,time){
	clearInterval(timer);

	var SpeedTime = time || 200;
	var distance =  des - start; 
	var speed =  distance/SpeedTime;

		var pos = start;
		var i = 1;

	timer = setInterval(function(){
			if(i == SpeedTime){
				adv.style.top = (start+distance) + "px";
				clearInterval(timer)
			}else{
				pos = pos + speed;
				adv.style.top =  pos+"px";
				i++;
			}
			
		},1)
}