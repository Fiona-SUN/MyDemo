$(function(){	

	$("#allSelect").bind("click",function(){
		addAll($("#leftPart"),$("#rightPart"),true);
	})

	$("#allUnSelect").bind("click",function(){
		addAll($("#rightPart"),$("#leftPart"),true);
	})

	$("#selectBtn").bind("click",function(){
		addAll($("#leftPart"),$("#rightPart"));
	})

	$("#unSelectBtn").bind("click",function(){
		addAll($("#rightPart"),$("#leftPart"));
	})

})

function addAll(removeObj,addObj,flag){
	if(flag){
		var leftPart = removeObj.find("option")
	}
	else{
		var leftPart = removeObj.find("option:selected");
	}
	
	addObj.append(leftPart);
}