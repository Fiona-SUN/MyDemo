var content = null;
var divBox = null;
var vetical_clickBtn = null;
var scrollBarY = null;
var vetical_upButton = null;
var vetical_downButton = null;

var level_clickBtn = null;
var scrollBarX = null;
var level_leftButton = null;
var level_rightButton = null;

eventUtils.addHandler(window,"load",function(){

	content = document.getElementById("content");
	divBox = document.getElementById("divBox");

	vetical_clickBtn = document.getElementById("vetical_clickBtn");
	scrollBarY = document.getElementById("scrollBarY");
	vetical_upButton = document.getElementById("vetical_upButton");
	vetical_downButton = document.getElementById("vetical_downButton");

	level_clickBtn = document.getElementById("level_clickBtn");
	scrollBarX = document.getElementById("scrollBarX");
	level_leftButton = document.getElementById("level_leftButton");
	level_rightButton = document.getElementById("level_rightButton");

	//初始化滚动条
	initData();

	//鼠标点击移动块事件触发
	eventUtils.addHandler(vetical_clickBtn,"mousedown",downEleY);
	eventUtils.addHandler(level_clickBtn,"mousedown",downEleX)

	// //鼠标点击上面/左边的块事件触发
	eventUtils.addHandler(vetical_upButton,"click",upEleClick);
	eventUtils.addHandler(level_leftButton,"click",leftEleClick);

	//鼠标点击下面的块事件触发
	eventUtils.addHandler(vetical_downButton,"click",downEleClick);
	eventUtils.addHandler(level_rightButton,"click",rightEleClick);
	
	//鼠标划入划出事件
	eventUtils.addHandler(vetical_upButton,"mouseover",clickEleOver);
	eventUtils.addHandler(vetical_upButton,"mouseout",clickEleOut);
	eventUtils.addHandler(vetical_downButton,"mouseover",clickEleOver);
	eventUtils.addHandler(vetical_downButton,"mouseout",clickEleOut);

	eventUtils.addHandler(level_leftButton,"mouseover",clickEleOver);
	eventUtils.addHandler(level_leftButton,"mouseout",clickEleOut);
	eventUtils.addHandler(level_rightButton,"mouseover",clickEleOver);
	eventUtils.addHandler(level_rightButton,"mouseout",clickEleOut);

	//滚轮事件(只支持垂直)
	eventUtils.addHandler(divBox,"mousewheel",onMouseWheel);
	eventUtils.addHandler(divBox,"DOMMouseScroll",onMouseWheel);

	//点击滚动非滑块位置
	eventUtils.addHandler(vetical_clickBtn.parentNode,"click",clickBlockY);
	eventUtils.addHandler(level_clickBtn.parentNode,"click",clickBlockX);
})
