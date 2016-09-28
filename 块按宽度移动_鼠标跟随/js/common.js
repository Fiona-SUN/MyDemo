function objAnim(){

	var timer = null;

	//取消定时器
	this.stop = function(){
		clearInterval(timer);
	}

	//向左移动目标距离
	this.moveLeft = function(obj,targetDis,currentDis,time){
		var objTime = time || 100;
		var i = 1;

		var distance = targetDis - currentDis;
		var speed = distance/objTime;

		timer = setInterval(function(){
			if(i == objTime){
				obj.style.left = targetDis+"px";
				clearInterval(timer);
			}else{
				currentDis = currentDis + speed;
				obj.style.left = currentDis + "px";
				//obj.style.left = currentDis+speed*i*runSpeed+"px";
				i++;
			}
		},1)
	}

}