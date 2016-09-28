//获取className
function getClassName(clsName,oParent){
	var oParent = oParent?document.getElementById(oParent):document;
	var eles =[];
	var element = oParent.getElementsByTagName("*");

	for(var i =0;i<element.length;i++){
		if(clsName == element[i].className){
			eles.push(element[i]);
		}
	}

	return eles;
}


var currentIdx = 0;
var animator = new objAnim();

//图片轮播
function bannerChange(speed){
	var img_part = getClassName("img_part");

	//对第一个进行处理
	animator.fadeIn(img_part[currentIdx],0,animator.show,0);
	//循环轮播
	cycleChange();
}

//循环轮播事件
var change_timer =null;
function cycleChange(speed){
	var img_part = getClassName("img_part");
	var speedChange = speed | 4000;
	var nextIdx;
	currentIdx = 0;

	change_timer = setInterval(function(){

		nextIdx = (currentIdx==img_part.length-1)?0:currentIdx+1;

		switchImg(currentIdx,nextIdx);

		// nextIdx = (nextIdx==img_part.length-1)?0:nextIdx+1;
		// currentIdx = (currentIdx==img_part.length-1)?0:currentIdx+1;
		currentIdx = nextIdx;

	},speedChange)
}

//绑定鼠标事件
function changeImg(){
	var change_btn = getClassName("change_btn")[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
	var change_len = change_btn.length;
	
	for(var i = 0;i<change_len;i++){
		(function(m){
			change_btn[i].onclick = function(){
				if(m != currentIdx){
					var nextIdx = m;
					switchImg(currentIdx,nextIdx);
					clearInterval(change_timer);
					cycleChange();
					currentIdx = nextIdx;
				}
			}
		})(i)
	}
}

//图片的切换调用
function switchImg(currentIdx,nextIdx){
	var img_part = getClassName("img_part");
	var change_btn = getClassName("change_btn")[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
	
	//隐藏当前的页面
	//效果正常(切换)
	animator.fadeOut(img_part[currentIdx],50,animator.hide,1);
	//效果明显
	//animator.hide(img_part[currentIdx])
	//img_part[currentIdx].style.opacity = "0"
	change_btn[currentIdx].className = "";

	//显示下一个页面
	animator.fadeIn(img_part[nextIdx],100,animator.show,0);
	change_btn[nextIdx].className = "active";

}

//动态生成按钮和图片
function addImages(jsonObj,count,isClearCtn){
	var cnt = count;
	var img_container = document.getElementById("img_container");
	var btn_container = document.getElementById("btn_container");

	if(isClearCtn){
		btn_container.innerHTML = "";
		img_container.innerHTML = "";
	}

	for(var i=0;i<cnt;i++){
		if(i == 0){
			btn_container.innerHTML += '<li class="active"></li>';
			img_container.innerHTML += '<div class="img_part"><img src="./images/'+jsonObj[i]+'"></div>';
		}else{
			btn_container.innerHTML += "<li></li>";
			img_container.innerHTML += '<div class="img_part"><img src="./images/'+jsonObj[i]+'"></div>';
		}			
	}
}