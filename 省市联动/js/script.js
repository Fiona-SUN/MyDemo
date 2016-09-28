$(function(){
	//遍历json对象，添加省份
	for(var x in CITYS){
		$("#provice").append("<option value='"+x+"'>"+x+"</option>");
	}
	
	//一旦选择省份对市进行修改
	$("#provice").bind("change",function(){
		$("#city").empty();
		var provice = $("#provice").val();
		
		$("#city").removeAttr("disabled");
		for(var i=0;i<CITYS[provice].length;i++){
			$("#city").append("<option value='"+CITYS[provice][i]+"'>"+CITYS[provice][i]+"</option>")
		}
			
	})

})