function objAnim(){
	var defalutSpeed = 50;

	//淡入
	this.fadeIn = function(obj,speed,callback,flag){
		var num = Math.floor(window.getComputedStyle(obj,false).opacity*10);
		var speed = speed || defalutSpeed;

		if (flag == 0) {
			callback(obj);
		}

		if(num == 10){
			return;
		}
		else{
			var timer = setInterval(function(){
				num += 1;
				obj.style.opacity = num/10;
				if(num == 10){
					clearInterval(timer);
					if(flag == 1){
						callback(obj)	
					}
				}
			},speed);
		}
	};

	//淡出
	this.fadeOut = function(obj,speed,callback,flag){
		var num = Math.floor(window.getComputedStyle(obj,false).opacity*10);
		var speed = speed || defalutSpeed;

		if (flag == 0) {
			callback(obj);
		}

		if(num == 0){
			return;
		}
		else{
			var timer = setInterval(function(){
				num -= 1;
				obj.style.opacity = num/10;
				if(num == 0){
					clearInterval(timer);
					if(flag == 1){
						callback(obj);	
					}
				}
			},speed);
		}
			
	};

	//显示
	this.show = function(obj){
		obj.style.display = "block";
	}

	//隐藏
	this.hide = function(obj){
		obj.style.display = "none";
	}
}
