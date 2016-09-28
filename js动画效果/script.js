//获取obj样式为attrs的值
function getStyle(obj,attrs){
	//IE
	if(obj.currentStyle){
		return obj.currentStyle[attrs];
	}
	//其他
	else{
		return getComputedStyle(obj,false)[attrs];
	}
}

/*//obj:对象，iTarget:变化目标,attrs:变化的属性
function startMove(obj,attrs,iTarget,fn){
	//停止计时器
	clearInterval(obj.timer);
	//开始计时器
	obj.timer = setInterval(function(){
		//获取到的对应的属性的值
		var Styles = getStyle(obj,attrs);
		//如果属性为透明度，取浮点数
		if(attrs == "opacity"){
			cur = Math.round(parseFloat(Styles)*100);
		}
		else{
			cur = parseInt(Styles);
		}
		//速度变量,缓冲变化
		var speed = (iTarget - cur)/8;
		//让speed为整数
		speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
		
		//判断停止运动的位置
		if(cur == iTarget){
			clearInterval(obj.timer);
			//判断是否为链式运动，如果传了函数进来，则先执行函数
			if(fn){
				fn();
			}
		}
		else{
			//如果属性是透明度
			if(attrs == "opacity"){
				obj.style.filter = "alpha(opacity:"+(cur+speed)+")";
				obj.style.opacity = (cur+speed)/100;
			}
			else{
				obj.style[attrs] = cur+speed+"px";
			}
		}
	}, 30)
}*/


//同时运动

//obj:对象，iTarget:变化目标,attrs:变化的属性
function startMove(obj,json,fn){
	var flag = true;
	//停止计时器
	clearInterval(obj.timer);
	//开始计时器
	obj.timer = setInterval(function(){
		for(var attrs in json){
			//获取到的对应的属性的值
			var Styles = getStyle(obj,attrs);
			//如果属性为透明度，取浮点数
			if(attrs == "opacity"){
				//Math.round四舍五入
				cur = Math.round(parseFloat(Styles)*100);
			}
			else{
				cur = parseInt(Styles);
			}
			//速度变量,缓冲变化
			var speed = (json[attrs] - cur)/8;
			//让speed为整数
			speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
			
			//判断停止运动的位置
			if(cur != json[attrs]){
				flag = false;
			}
			//如果属性是透明度
			if(attrs == "opacity"){
				obj.style.filter = "alpha(opacity:"+(cur+speed)+")";
				obj.style.opacity = (cur+speed)/100;
			}
			else{
				obj.style[attrs] = cur+speed+"px";
			}
		}

		if(flag){
			clearInterval(obj.timer);
			//判断是否为链式运动，如果传了函数进来，则先执行函数
			if(fn){
				fn();
			}
		}

	}, 30)
}