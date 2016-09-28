window.onload=function(){
	var btn = document.getElementById("btn");
	var name = document.getElementById("name");
	var txt = document.getElementById("txt");

	btn.onclick=function(){
		var time = new Date().getHours();
		if(name.value == ""){
			name.value = "路人甲";
		}
		if(time<0||time>23){
			alert("wrong!")
		}
		else if(time>=0&&time<=6){
			txt.innerHTML = (name.value+",夜深了，还在学习啊？");
		}
		else if(time>=7&&time<=9){
			txt.innerHTML = (name.value+",早上好！");
		}
		else if(time>=10&&time<=11){
			txt.innerHTML = (name.value+",上午好！");
		}
		else if(time>=12&&time<=14){
			txt.innerHTML = (name.value+",中午好！");
		}
		else if(time>=15&&time<=18){
			txt.innerHTML = (name.value+",下午好！");
		}
		else if(time>=19&&time<=21){
			txt.innerHTML = (name.value+",晚上好！");
		}
		else if(time>=22&&time<=23){
			txt.innerHTML = (name.value+",夜深了，要去休息啦！");
		}
	}
}