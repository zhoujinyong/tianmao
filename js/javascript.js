
/*class类名的获取*/
function getClass(a,b){    //a 字符串
	//判断
	if (//判断是否支持
		document.getElementsByClassName) {
		//支持返回集合
		return b.getElementsByClassName(a);
	}else{
		//不支持的话获取全部标签
		var all=b.getElementsByTagName('*');
		var arr=[];
		//进行遍历 找到自己需要的并且放入新的集合里面
		for (var i = 0; i < all.length; i++) {
			if(checkClass(all[i].className,a)){
				 arr.push(all[i]);
			}
		}
		return arr;
	}
	//返回
	
}
/*挑选 class */
function checkClass(a,b){
	var arr=a.split(' ')
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]==b) {
			return true;
		};
	};
	return false;
}


/*获取或改变内容*/
function text(obj,val){
	if (val==undefined) {
		if(obj.textContent!=undefined){
			return obj.textContent;
		}else{
			return obj.innerText
		}
	}else{
		if(obj.textContent!=undefined){
			 obj.textContent=val;
		}else{
			 obj.innerText=val 
		}
	}
}

/*获取通用样式*/

function getStyle(obj,attr){
	if (obj.currentStyle!=undefined) {
		return obj.currentStyle[attr];
	}else{
		return document.getComputedStyle(obj,null)[attr]
	}
}
/*获取*/
function $(selector,range){
	//判断类型
	if (typeof selector=="string") {                             
		range = range || document;
		//判断第一个字
		if (selector.charAt(0)=="#") {
			//返回除第一个字 的 字符串
			return range.getElementById(selector.substr(1))
		}
		if (selector.charAt(0)==".") {
			return getClass(selector.substr(1),range)
		}
		// 正则判断
		if (/^[a-zA-Z][a-zA-Z1-6]{0,9}$/) {
			return range.getElementsByTagName(selector,range)
		}
	}else if (typeof selector=="function") {

		return window.onload=selector
	}
}