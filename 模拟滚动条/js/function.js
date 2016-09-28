//鼠标按下时候的位置
var posX;
var posY;

//移动滑块到整个要移动的块的border的距离(包括border)
var restPosX=0;
var restPosY=0;

//初始化滚动条的信息
function initData(){
	//初始化整个滚动块的高度（-22是为了右下角空出一段距离）
	scrollBarY.style.height = scrollBarY.parentNode.parentNode.clientHeight -22 + "px";
	scrollBarX.style.width = scrollBarX.parentNode.parentNode.clientWidth -22 + "px";

	//初始化滑动块容器的高度（中间滑动块所在的位置）[-17*2是为了空出上下（左右）按钮的位置]
	vetical_clickBtn.parentNode.style.height = scrollBarY.clientHeight - 17*2 + "px";	
	level_clickBtn.parentNode.style.width = scrollBarX.clientWidth - 17*2 + "px";

	//要移动的内容的大小：padding+border+content(还有scrollbar,不存在)
	//scrollHeight是获取整个高度，包括溢出部分（还有padding）
	var moveHeight =  content.scrollHeight + content.clientTop*2;
	var moveWidth  = content.scrollWidth + content.clientLeft*2;

	//比例，容器(content部分)和超出内容块(padding+border+content)的比例
	var percentY = divBox.clientHeight/moveHeight;
	var percentX = divBox.clientWidth/moveWidth;

	//如果比例大于等于一则不设置滚动条
	if(percentY < 1){
		var clickBtnHeight =  parseInt(percentY*(vetical_clickBtn.parentNode.clientHeight));
	}else{
		var clickBtnHeight = 0;
	}

	if(percentX < 1){
		var clickBtnWidth = parseInt(percentX*(level_clickBtn.parentNode.clientWidth));
	}else{
		var clickBtnWidth = 0;
	}

	vetical_clickBtn.style.height = clickBtnHeight + "px";
	level_clickBtn.style.width = clickBtnWidth + "px";

}


//在滑动块上按下鼠标
function downEleY(event){
	var e = eventUtils.getEvent(event);
	eventUtils.preventDefault(e);
	var scrollPosY = window.pageYOffset || document.documentElement.scrollTop;

	vetical_clickBtn.style.background = "#a9a9a9";

	//鼠标所在位置:减去整个要移动块距离屏幕的高度，加上屏幕滚动的距离，减去滑块的按钮高度,减去要移动的块的border,减去滑动块的距离上方的高度（上面的按钮和边界值），减去滑动块的容器的border,减去scrollbar
	restPosY = - scrollBarY.parentNode.parentNode.offsetTop + scrollPosY  - vetical_clickBtn.parentNode.offsetTop - scrollBarY.parentNode.parentNode.clientTop - scrollBarY.clientTop;

	posY = e.clientY + restPosY - vetical_clickBtn.offsetTop;

	eventUtils.addHandler(document,"mousemove",moveEleY);
	eventUtils.addHandler(document,"mouseup",upEleY);
}


function downEleX(event){
	var e = eventUtils.getEvent(event);
	eventUtils.preventDefault(e);
	var scrollPosX = window.pageXOffset || document.documentElement.scrollLeft;

	level_clickBtn.style.background = "#a9a9a9";

	restPosX = - scrollBarX.parentNode.parentNode.offsetLeft + scrollPosX  - level_clickBtn.parentNode.offsetLeft -scrollBarX.parentNode.parentNode.clientLeft - scrollBarY.clientLeft;

	posX = e.clientX + restPosX - level_clickBtn.offsetLeft;

	eventUtils.addHandler(document,"mousemove",moveEleX);
	eventUtils.addHandler(document,"mouseup",upEleX);
}


//在滑动块按下鼠标的同时移动鼠标
function moveEleY(event){

	var e = eventUtils.getEvent(event);
	var scrollPosY = window.pageYOffset || document.documentElement.scrollTop;

	//鼠标点下时的位置
	var desY = e.clientY + restPosY;
	//鼠标实际所处位置
	desY = desY - posY;

	changePositionY(desY);

}

function moveEleX(event){

	var e = eventUtils.getEvent(event);
	var scrollPosX = window.pageXOffset || document.documentElement.scrollLeft;

	//鼠标点下时的位置
	var desX = e.clientX + restPosX;
	//鼠标实际所处位置
	desX = desX - posX;

	changePositionX(desX);

}

//释放鼠标
function upEleY(){
	eventUtils.removeHandler(document,"mouseup",upEleY);
	eventUtils.removeHandler(document,"mousemove",moveEleY);
	vetical_clickBtn.style.background = "#c1c1c1";
}

function upEleX(){
	eventUtils.removeHandler(document,"mouseup",upEleX);
	eventUtils.removeHandler(document,"mousemove",moveEleX);
	level_clickBtn.style.background = "#c1c1c1";
}


//鼠标点击上面的块移动滑块
function upEleClick(num){

	var n = (parseInt(num) == num) ? num : 10;
	var desY = vetical_clickBtn.offsetTop - n;

	changePositionY(desY);
}

function leftEleClick(num){

	var n = (parseInt(num) == num) ? num : 10;
	var desX = level_clickBtn.offsetLeft - n; 
	//parseInt( getStyle(level_clickBtn,"left") ) - 20;

	changePositionX(desX);
}

//鼠标点击下面/右边的块移动滑块
function downEleClick(num){

	var n = (parseInt(num) == num) ? num : 10;
	var desY = vetical_clickBtn.offsetTop + n;
	
	changePositionY(desY);
}

function rightEleClick(num){

	var n = (parseInt(num) == num) ? num : 10;
	var desX = level_clickBtn.offsetLeft + n;
	
	changePositionX(desX);
}

function changePositionY(desY){
	var maxBounderY = vetical_clickBtn.parentNode.clientHeight- vetical_clickBtn.offsetHeight;

	if(desY<0){
		desY = 0;

		vetical_upButton.style.color = "#a3a3a3";
		vetical_upButton.style.background = "#f1f1f1";
		eventUtils.removeHandler(vetical_upButton,"mouseover",clickEleOver);
	}
	else if(desY > maxBounderY){
		desY = maxBounderY+2;

		vetical_downButton.style.color = "#a3a3a3";
		vetical_downButton.style.background = "#f1f1f1";
		eventUtils.removeHandler(vetical_downButton,"mouseover",clickEleOver);
	}
	else{
		vetical_downButton.style.color = "#000";
		vetical_upButton.style.color = "#000";
		eventUtils.addHandler(vetical_downButton,"mouseover",clickEleOver);
		eventUtils.addHandler(vetical_upButton,"mouseover",clickEleOver);
	}

	vetical_clickBtn.style.top = desY+"px";

	var percent = ( content.scrollHeight)/vetical_clickBtn.parentNode.offsetHeight*desY;
	content.style.top = parseInt( -percent )+"px";

}

function changePositionX(desX){
	var maxBounderX = level_clickBtn.parentNode.clientWidth- level_clickBtn.offsetWidth;

	if(desX<0){
		desX = 0;

		level_leftButton.style.color = "#a3a3a3";
		level_leftButton.style.background = "#f1f1f1";
		eventUtils.removeHandler(level_leftButton,"mouseover",clickEleOver);
	}
	else if(desX > maxBounderX){
		desX = maxBounderX+2;

		level_rightButton.style.color = "#a3a3a3"
		level_rightButton.style.background = "#f1f1f1";
		eventUtils.removeHandler(level_rightButton,"mouseover",clickEleOver);
	}
	else{
		level_rightButton.style.color = "#000";
		level_leftButton.style.color = "#000";
		eventUtils.addHandler(level_rightButton,"mouseover",clickEleOver);
		eventUtils.addHandler(level_leftButton,"mouseover",clickEleOver);
	}

	level_clickBtn.style.left = desX+"px";

	var percent = content.offsetWidth/level_clickBtn.parentNode.offsetWidth*desX;
	content.style.left = parseInt( -percent )+"px";

}

function clickEleOver(){
	this.style.background = "#d2d2d2";
}

function clickEleOut(){
	this.style.background = "#f1f1f1";
}

//滚动滑动
function onMouseWheel(event){

	var e = eventUtils.getEvent(event);
	eventUtils.preventDefault(e);

	// 定义一个标志，当滚轮向下滚时，执行一些操作(正数为向上滑动)
	var down = true; 
    down = e.wheelDelta?e.wheelDelta<0:e.detail>0;
    
    if(down){
        downEleClick();
    }else{
       upEleClick();
    }

}


//获取样式
function getStyle(obj,attrs){
	if(obj.currentStyle){
		return obj.currentStyle[attrs];
	}
	else{
		return window.getComputedStyle(obj,false)[attrs];
	}
}

//鼠标点击垂直块（未点击滑块，点击滑块之外的区域）
function clickBlockY(event){

	var e = eventUtils.getEvent(event);
	eventUtils.preventDefault(e);
	var scrollPosY = window.pageYOffset || document.documentElement.scrollTop;

	//获取鼠标距离垂直块的距离
	var distance = event.clientY - scrollBarY.parentNode.parentNode.offsetTop + scrollPosY - vetical_clickBtn.parentNode.offsetTop - scrollBarY.parentNode.parentNode.clientTop - scrollBarY.clientTop;

	//点击上面
	if(distance < vetical_clickBtn.offsetTop){
		upEleClick(50);
	}
	//点击下面
	else if(distance > (vetical_clickBtn.offsetHeight + vetical_clickBtn.offsetTop) ){
		downEleClick(50);
	}

}

//鼠标点击水平块（未点击滑块，点击滑块之外的区域）
function clickBlockX(event){

	var e = eventUtils.getEvent(event);
	eventUtils.preventDefault(e);
	var scrollPosX = window.pageXOffset || document.documentElement.scrollLeft;

	//获取鼠标距离垂直块的距离
	var distance = event.clientX - scrollBarX.parentNode.parentNode.offsetLeft + scrollPosX - level_clickBtn.parentNode.offsetLeft - scrollBarX.parentNode.parentNode.clientLeft - scrollBarX.clientTop;

	//点击左边
	if(distance < level_clickBtn.offsetLeft){
		leftEleClick(50);
	}
	//点击右边
	else if(distance > (level_clickBtn.offsetWidth + level_clickBtn.offsetLeft) ){
		rightEleClick(50);
	}

}