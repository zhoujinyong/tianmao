
$(function(){
	var box=$('.banner1a')[0];
	var img=$('a',box);
	var lunbo=$('.lunbo')[0];
	var bodian=$('div',lunbo);
	img[0].style.opacity=1;
	bodian[0].style.background='red';
	
	var a=0
	var t=setInterval(moue,3000);
	function moue(){ 
		 a++;
		 if (a==img.length) {
		 	a=0
		 };
		for (var i = 0; i < img.length; i++) {
		animate(img[i],{opacity:0});
		bodian[i].style.background=''
	};
		animate(img[a],{opacity:1});
		bodian[a].style.background='red'
	}
	box.onmouseover =function(){
		clearInterval(t);
	};
	box.onmouseout=function(){
		t=setInterval(moue,3000);
	}
	for (var i = 0; i < bodian.length; i++) {
		bodian[i].index=i
	bodian[i].onmouseover=function(){
		for (var i = 0; i < bodian.length; i++) {
			
		
		animate(img[i],{opacity:0});
		bodian[i].style.background=''
	};
	
	animate(img[this.index],{opacity:1});
		bodian[this.index].style.background='red'
	};
	}

	// 图片放大效果
	var box=$('.body5');
	
	for (var i = 0; i < box.length; i++) {
		fangda(box[i]);
		
	};
	function fangda(box){
		var imgs=$('img',box);
	box.onmouseover=function(){
		animate(imgs[0],{width:158,height:158,top:-9,left:-9},30);
	}
	box.onmouseout=function(){
		animate(imgs[0],{width:140,height:140,top:0,left:0},30);
	}
}
// 向右浮动（亲子时光）

	 var box=$('.fudongbox');
	 for (var i = 0; i < box.length; i++) {
	 	yidong(box[i])
	 };
	 function yidong(box){
	 var imga=$('img',box);
	 box.onmouseover=function(){
	 	
	 	animate(imga[0],{right:10},30)
	 }
	 box.onmouseout=function(){
	 	animate(imga[0],{right:0},30)
	 }
	};
	// 天猫图像||选中的效果
	var daohang=$('.daohang2');
	var as=$('.a01',daohang[0]);
	
	for (var i = 0; i < as.length; i++) {
		 imgs=$('.imga',as[i])[0];
		xuanzhong(as[i],imgs)
	};
	function xuanzhong(as,imgs){
	as.onmouseover=function(){
		animate(imgs,{top:-13},200)}
	
	as.onmouseout=function(){
		animate(imgs,{top:0},200)}
	 }
	
	
	//banner导航详情面
	var xqy=$('.dh4');
	for (var i = 0; i < xqy.length; i++) {
	var yemian=$('.yemian',xqy[i])[0];
	yemian.style.display='none';
	daoh(xqy[i],yemian)
	};

	// 手机二维码
	var shouji=$(".myshouji")[0];
	var erweima=$(".erweima",shouji)[0];
	 erweima.style.display="none"
	daoh(shouji,erweima);

	function daoh(xqy,yemian){
	hover(xqy,function(){
		yemian.style.display='block';
	},function(){
		yemian.style.display='none';
	})
}
	// 顶部的下拉菜单我的淘宝
	// 封装函数
	function taobaodingbu(aa,bb){
		hover(aa,function(){
		bb.style.display='block';
		aa.style.background="#fff"
	},function(){
		bb.style.display='none';
		aa.style.background=""
	})
	}
	var taobao=$(".taobao");
	var mytaobao=$(".mytaobao",taobao[0])[0];
	 
	mytaobao.style.display="none"
	taobaodingbu(taobao[0],mytaobao);
	// 我的收藏
	var shouzang=$(".myshouzang",taobao[1])[0];
	shouzang.style.display="none"
	taobaodingbu(taobao[1],shouzang);
	
	//商家支持
	 var shouji1=$(".myshouji")[1];
	 var zhich=$(".zhichi",shouji1)[0];
	 zhich.style.display="none";
	taobaodingbu(shouji1,zhich);
	// 网站导航
	var shouji2=$(".myshouji")[2];
	var rdtj=$(".wzdh",shouji2)[0];
	 rdtj.style.display="none";
	taobaodingbu(shouji2,rdtj);
});
//楼层跳转
window.addEventListener('load',function(){

	var aimg=$('.youhua');
	var no=$('.zfc1');
	//console.log(no)
	var shuzhi=[];
	var h=document.documentElement.clientHeight;
	var hezi=$('.zfc')[0];
	var aa=1;
	
	var color=['#F7a945','#19c8a9','#f15453','#64c333','#0aa6e8','#ea5f8d','#000000','#dd2727']
	for(i=3;i<aimg.length;i++){
		
		shuzhi.push(aimg[i].offsetTop)
	}
	
	document.onscroll=function(){
	var Ih=document.body.scrollTop||document.documentElement.scrollTop;
		if(Ih<1000&&aa){
			aa=0;
	//		hezi.style.display='none'
	   	animate(hezi,{bottom:-370},150)}
	   	if(Ih>=1000&&aa==0){
			aa=1;
	//		hezi.style.display='block'
		animate(hezi,{bottom:(h-370)/2},150)
		};
		for(i=0;i<shuzhi.length;i++){	
			//0.....7
			if(shuzhi[i]<=Ih+h/2){
				for(var j=0;j<no.length;j++){	
					no[j].style.background="";
				}
					//0,1,2....7
					no[i+1].style.background=color[i];
			};
		};
//		返回顶部
	no[9].onclick=function(){
		animate(document.body,{scrollTop:0},300);
		animate(document.documentElement,{scrollTop:0},300)
		}
	}
	

	// 品牌旗舰效果
	var boder=$('.ppqj1');alert
	for(var i=0;i<boder.length;i++){
	boder[i].onmouseover=function(){
		this.style.border="1px solid red";
		this.style.opacity="0.7"
	}
	boder[i].onmouseout=function(){
		this.style.border="";
		this.style.opacity="1"
	}
	}
	
})

window.addEventListener('load',function(){
	//优化按需加载
	var aimg=$('.youhua');
//	console.log(aimg)
	var h=document.documentElement.clientHeight;
	var boxtop=[];
	var flags=[];
	for(var i=0;i<aimg.length;i++){
		boxtop.push(aimg[i].offsetTop);
		flags.push(true);
	};
	// console.log(boxtop)
	window.onscroll=function(){
		var top=document.body.scrollTop||document.documentElement.scrollTop
		for(var i=0;i<boxtop.length;i++){
			if(boxtop[i]<=top+h&&flags[i]){
				flags[i]=false;
				var imgs=$('img',aimg[i]);
//				console.log(aimg[i])
//				console.log(imgs)
				for(var j=0;j<imgs.length;j++){
					imgs[j].src=imgs[j].getAttribute('asrc')
				};
			}
		}
	}
// 右侧浮窗的鼠标经过效果
	var fc1=$(".fuchuang1")[0];
	fca(fc1)

	var fc2=$(".fuchuang2")[0];
	fca(fc2)
	function fca(fca){
	var tequan=$(".tequan",fca)[0];
	tequan.style.opacity="0";
	tequan.style.display="none";
	hover(fca,function(){
		animate(tequan,{right:35,opacity:1},300)
		tequan.style.display="block";
	},function(){
		animate(tequan,{right:115,opacity:0},300)
		tequan.style.display="none";
		})
	}
var fc3=$(".fuchuang3");
for (var i = 0;i < fc3.length; i++) {
	if(i!=6){
		fca(fc3[i])
	};
	
};

// 导航二维码
		var fc6=$(".fuchuang3")[6];
		var erweima=$(".fcerweima",fc6)[0];
		erweima.style.display='none';
		hover(fc6,function(){
		erweima.style.display='block';	
		},
		function(){
		erweima.style.display='none';	
		})
	// 猜你喜欢
	var tupian=$(".nrxq");
	for (var i = 0; i < tupian.length; i++) {
		tupianborder(tupian[i])
	};

	function tupianborder(tupian){
	hover(tupian,function(){
		tupian.style.border="1px solid red"
		tupian.style.opacity="0.75"
	},function(){
		tupian.style.border="1px solid #f2f2f2"
		tupian.style.opacity="1"
		})
	}
})












