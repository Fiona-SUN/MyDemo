$(function(){
	imgArr = ['banner-1.png','banner-2.png','banner-3.png'];

	initData();

	startChange();

	$("#btn_container li").bind("click",clickBtn)
})

//初始化
function initData(){
	var len = imgArr.length;

	for(var i=0;i<len;i++){
		
		$("#img_container").append("<img src='./images/"+imgArr[i]+"'>");
		$("#btn_container").append("<li data-index='"+i+"'></li>");
	}

	$("#img_container img:not(:first)").hide();
	$("#btn_container li:first").addClass("active");
}

//轮播图片
var timer = null;
var cur = 0;
function startChange(time){
	clearInterval(timer);
	var speedTime = time || 4000;

	timer = setInterval(function(){
		var next = cur+1 == imgArr.length ? 0:cur+1;

		changeImg(cur,next);

		cur = next;

	},speedTime)
}

//鼠标点击触发函数
function clickBtn(){
	clearInterval(timer);
	var that = $(this);
	var next = parseInt(that.attr("data-index"));

	changeImg(cur,next);
	startChange();
	
	cur = next;
}

//改变显示的内容
function changeImg(cur,next){
	$("#img_container img").eq(cur).fadeOut("2000");
	$("#btn_container li").eq(cur).removeClass("active");

	$("#img_container img").eq(next).fadeIn("2000");
	$("#btn_container li").eq(next).addClass("active");
}