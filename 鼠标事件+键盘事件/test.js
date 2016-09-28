//计时器的接收
var timer=null;
//标记键盘按下的动作
var flag =0;

window.onload = function(){
	var play = document.getElementById("play");
	var stop = document.getElementById("stop");
	//开始抽奖
	play.onclick = playFun;
	//结束抽奖
	stop.onclick = stopFun;
	//键盘事件
	document.onkeyup = function(event){
		var event = event || window.event;
		if(event.keyCode==13){
			if(flag==0){
				playFun();
			}
			else{
				stopFun();
			}
		}
	}
}

function playFun(){
	//获取输入的开始值和结束值（字符串）
	flag=1;
	var start_num = document.getElementById("start_num").value;
	var end_num = document.getElementById("stop_num").value;
	
	var context = document.getElementById("context");
	var play = document.getElementById("play");

	if(isNaN(start_num) || isNaN(end_num)){
		alert("开始和结束范围只能为数值，请重新输入！");
		return;
	}
	
	else if(start_num >= end_num){
		alert("开始值要小于结束值！")
		return;
	}

	//如果未输入值，默认范围
	else if(start_num == false || end_num == false){
		alert("未输入开始和结束范围，系统默认为：1-100");
		play.style.background="#A3A3A3";
		start_num = 1;
		end_num = 100;
	}
	else{
		play.style.background="#A3A3A3";
		//转换为整型，方便取随机数
		start_num = parseInt(start_num);
		end_num = parseInt(end_num);
		//避免重复按键计时器越来越快，在按键前先清空重复执行效果
		clearInterval(timer);
		//每过0.1秒重复执行
		timer = setInterval(function(){
			//获取随机数[start_num,end_num]
			//Math.random获取大于等于0~小于1的随机数
			var num = Math.floor(Math.random()*(end_num)+start_num);
			//改变值
			context.innerHTML=num;
		}, 100)
	
	}
	

}

function stopFun(){
	clearInterval(timer);
	flag=0;
	var play = document.getElementById("play");
	play.style.background="#4A708B";
}