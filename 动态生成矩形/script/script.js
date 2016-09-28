window.onload=function(){
	document.getElementById("content").style.height = 700+"px";
	document.getElementById("rec_place").style.height = 700-85+"px";
	var makeRec = document.getElementById("makeRec");
	var clearRec = document.getElementById("clearRec");
	var rec_num = document.getElementById("rec_num");
	var rec_place = document.getElementById("rec_place");

	var arr = new Array();

	//点击生成按钮
	makeRec.onclick=function(){
		var num = rec_num.value;
		if(parseInt(num)!=num){
			alert("请输入整数！")
		}
		else if(parseInt(num)<=0){
			alert("请输入大于0的整数！")
		}
		else{
			for(var i=0;i<num;i++){
				var rec = new Rectangle(i,rec_place);
				rec.createRec();
				arr.push(rec);
			}
		}
	}

	//点击清除画布
	clearRec.onclick=function(){
		var num = rec_place.getElementsByTagName("div").length;
		for(var i=0;i<num;i++){
			arr[0].ruinRec();
			arr.shift();
		}
	}
}

//var colors = ["red","blue","green","yellow","black"];

function Rectangle(index,rec_place){
	this.index = index;
	this.rec_height = Math.floor(Math.random()*101+100);
	this.rec_width = Math.floor(Math.random()*101+100);
	
	//this.rec_color = colors[Math.floor(Math.random()*5)];
	this.rec_color = "rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")";

	this.rec_left =	Math.floor(Math.random()*(rec_place.offsetWidth-this.rec_width-1)+2);
	this.rec_top = Math.floor(Math.random()*(rec_place.offsetHeight-this.rec_height)+87);
	this.myRec = null;

	//方法一，构造函数
	// this.createRec =function(){
	// 	this.myRec = document.createElement("div");
	// 	this.myRec.className = "mydiv";
	// 	this.myRec.innerHTML = "我是矩形"+(this.index+1);

	// 	this.myRec.style.height = this.rec_height+"px";
	// 	this.myRec.style.width = this.rec_width+"px";
	// 	this.myRec.style.border = "3px solid "+this.rec_color;
	// 	this.myRec.style.left = this.rec_left+"px";
	// 	this.myRec.style.top =this.rec_top+"px";

	// 	rec_place.appendChild(this.myRec);
	// }

	// this.ruinRec = function(){
	// 	rec_place.removeChild(this.myRec);
	//}

}

//原型+构造函数：让函数共用
Rectangle.prototype = {
	createRec:function(){
		this.myRec = document.createElement("div");
		this.myRec.className = "mydiv";
		this.myRec.innerHTML = "我是矩形"+(this.index+1);

		this.myRec.style.height = this.rec_height+"px";
		this.myRec.style.width = this.rec_width+"px";
		this.myRec.style.border = "3px solid "+this.rec_color;
		this.myRec.style.left = this.rec_left+"px";
		this.myRec.style.top =this.rec_top+"px";

		rec_place.appendChild(this.myRec);
	},
	ruinRec:function(){
		rec_place.removeChild(this.myRec);
	}
}