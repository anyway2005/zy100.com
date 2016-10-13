$(function(){
	// 点击小图切换成大图片
	var $li = $('.smallImg').find("li");
	$li.click(function())
	var $li = $('.smallImg').find('li');
	$li.click(function(){
		var a = $(this).index();
		var samllsrc = $li.eq(a).find('img').attr('src');
		$('.myImg').find('img').attr('src',samllsrc);//变量不用引号
	})
	//点击按钮切换
	var i=0;
	$('#btn1').click(function(){
		i--;
		var samllsrc = $li.eq(i).find('img').attr('src');
		$('.myImg').find('img').attr('src',samllsrc);
		if (i<=1) {
			$('.myImg').find('img').eq(0).attr('src',samllsrc);
		}
	})
	$('#btn2').click(function(){
		i++;
		var samllsrc = $li.eq(i).find('img').attr('src');
		$('.myImg').find('img').attr('src',samllsrc);
		if (i==($('smallImg li').length)) {
			$('.myImg').find('img').eq($('smallImg li').length).attr('src',samllsrc);
		}
	})

	// 购买数量
	var j=0;
	$(".add").click(function(){
		
		j++;
		$("#sl").html(j);
	})
	$(".jian").click(function(){
		j--;
		$("#sl").html(j);
		if (j<=0) {
				j=0;
				$("#sl").html(j);
		}
	})

	var count=0;
	$('#jiaru').click(function(){
		count +=j;
		$("#num").html(count);
		
	});

	var flag = 0;
	$('.cart-list').find('span').click( function(){
 		//开始为0，则else，然后再变回flag=1；
 		if (flag==1) {
 			$('.cart-list').animate({right:'-302px'});
 			flag=0;
 		}else {
 			$('.cart-list').animate({right:'0px'});
 			flag=1;
 		}
 		
 	});

	// 空的购物车列表
	var $cartlist = $(".cart-list ul");
	 var $cruttenli = $(".myImg"); //获取大图的div
	//点击加入购物车，飞入购物车效果
	$("#jiaru").click(function(){
		var $cruttenImg = $cruttenli.find("img");
	
		var $copyImg = $cruttenImg.clone();   //复制原图
		var startPos = $cruttenImg.offset();   //获取原图坐标
		var startWidth = $cruttenImg.width();  //获取原图宽度
				
		//给复制图片添加一个样式，这里跟原图一样大小
		$copyImg.css({
			position: "absolute",
			left:startPos.left,
			top:startPos.top,
			width:startWidth
		});
		
		//把复制的图片放到body中来
		$copyImg.appendTo("body");
		
		var cartPos = $cartlist.offset();
		//动画图片飞入购物车
		$copyImg.animate({left:cartPos.left,top:cartPos.top+$cartlist.outerHeight,width:0,opacity:0},function(){
			
			//1.删除复图片
			$copyImg.remove();
			
			//2.复制列表信息的li
			var $copyli = $cruttenli.clone();
			$copyli.appendTo($cartlist);

		});

	});
     // 放大镜
	$('.myImg').lxzoom({
		gap:100, 
		width:400,
		height:300
	});

})
