window.onload=function(){
	var change_btn = getClassName("change_btn")[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
	var chang_len = change_btn.length;
	
	
	var jsonObj =["banner-1.png","banner-2.png","banner-3.png"];
	//动态生成图片
	addImages(jsonObj,jsonObj.length,true);

	//触发图片轮播	
	bannerChange();

	//鼠标点击事件
	changeImg();

}