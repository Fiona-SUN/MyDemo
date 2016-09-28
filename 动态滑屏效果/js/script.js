window.addEventListener("load",function(){
	
	var nav = getClass("title");
	var txt = getClass("content");
	var len = nav.length;

	for(var i=0;i<len;i++){
		(function(m){
			nav[i].addEventListener("click",function(){
				//document.documentElement.scrollTop = document.body.scrollTop = txt[m].offsetTop;
				var des = txt[m].offsetTop;
				var start = window.pageYOffset || document.documentElement.offsetTop;
				moveSlowly(des,start);
			})
		})(i)
	}

})

var timer = null;

function moveSlowly(des,start,time){
	clearInterval(timer);
	var speedTime = time || 100;
	var start = start || 0;
	var distance = des - start;
	var speed = distance/speedTime;
	var i = 1;
	var pos = start;

	timer = setInterval(function(){

		if(i == speedTime){
			pos = des;
			document.documentElement.scrollTop = document.body.scrollTop = pos;
			clearInterval(timer);
		}else{
			pos = pos + speed;
			document.documentElement.scrollTop = document.body.scrollTop = pos;
			console.log(pos)
			i++;
		}

	},1)
}


function getClass(clsName,Parent){
	var oParent = Parent ? document.getElementById(Parent): document;
	var eles = [];
	var elements = oParent.getElementsByTagName("*");
	var len = elements.length;

	for(var i =0;i<len;i++){
		if(clsName == elements[i].className){
			eles.push(elements[i])
		}
	}

	return eles;
}