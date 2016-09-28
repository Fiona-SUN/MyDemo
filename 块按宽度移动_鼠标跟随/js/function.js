var animator = new objAnim();

//obj:移动的对象；moveLeft移动的实际距离；width移动的限制距离；maxIdx：移动的最大值
function calcArguments(obj,moveLeft,width,maxIdx){
	var moveIdx = parseInt(moveLeft/width)<=maxIdx ? parseInt(moveLeft/width) : maxIdx;
	var currentDis = obj.offsetLeft;
	var targetDis = moveIdx*width;
	
	animator.stop();
	animator.moveLeft(obj,targetDis,currentDis);
}