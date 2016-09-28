var eventUtils = {

	getEvent:function(event){
		return event?event:window.event;
	},

	getType:function(event){
		return event.type;
	},

	getTarget:function(event){
		return event.target || event.srcElement;
	},

	stopPropagation:function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}
		else{
			event.cancelBubble = true;
		}
	},

	preventDefault:function(event){
		if(event.preventDefault){
			event.preventDefault();
		}
		else{
			event.returnValue = false;
		}
	},

	addHandler:function(obj,method,fn){
		if(obj.addEventListener){
			obj.addEventListener(method,fn);
		}
		else if(obj.attachEvent){
			obj.attachEvent("on"+method,fn);
		}
		else{
			obj["on"+method] = fn;
		}
	},

	removeHandler:function(obj,method,fn){
		if(obj.removeEventListener){
			obj.removeEventListener(method,fn);
		}
		else if(obj.detachEvent){
			obj.detachEvent("on"+method,fn);
		}
		else{
			obj["on"+method] = null;
		}
	}
}