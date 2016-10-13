$(function(){
	var $lunbotuUl = $('.lunbotu');
	var $Li = $lunbotuUl.find('li');
	$Li.eq(0).clone().appendTo($lunbotuUl);
	$Li = $lunbotuUl.find('li');
	
	var $Liheight = $Li.outerHeight();
	
	var $lunbotuUlheight = $Li.length*$Liheight;
	
	$lunbotuUl.css({'height':$lunbotuUlheight});
	
	var z = 0 ;
	var t = 3000;
	var timer ;
	
	$lunbotuUl.on('mouseenter',function(){
    	clearInterval(timer);
    });
    $lunbotuUl.on('mouseleave',function(){
    	timer = setInterval(bannermove,t);
    });

    timer = setInterval(bannermove,t);
    
	function bannermove(){
		
		z++ ;
		//改变ul的top值
		var iHeight = parseInt(-1*z*34);
		
		$lunbotuUl.animate({'top':iHeight},function(){
			
			if (z>=$Li.length-1) {
				z=0;
				$lunbotuUl.css('top','0');
				
			}
		});

	};
	
	$('.pre').click(function(){
		clearInterval(timer);
		if (z==1) {
			z=$Li.length-1;
		}
		
		bannermove();
		timer = setInterval(bannermove,t);
		
		
	});
	$('.next').click(function(){
		clearInterval(timer);
		bannermove();
		timer = setInterval(bannermove,t);
		console.log('下一张'+z+timer);
	});
//	//小轮播图
//	var k=0;
//	var tt=null;
//	var firstImg=$('.lunbotu li').first().clone();//复制第一张图片
//	//设置ul的高度为 图片张数*图片高度
//	$('.lunbotu').append(firstImg).height( $('.lunbotu li')
//	.length*( $('.lunbotu img').height() ) ); //140px
//	//下一个按钮
//	$('.next').click(function(){
//		k++;
//		//判断到达最后一张时，返回第一张
//		if(k==$('.lunbotu li').length){
//			k=1;
//			$('.lunbotu').css({'top':'0'});
//		};
//		$('.lunbotu').stop().animate({'top':'-k*34'});
//	});
//	// 上一个按钮
//	$('.pre').click(function(){
//		k--;
//		if(k==1){
//			//最后一张图
//			k=$('.lunbotu li').length-2;
//			$('.lunbutu').css({'height':"-($('.lunbotu li').length-1)*34"});
//		};
//		$('.lunbotu').stop().animate({'top':'-k*34'},300);
//	});
//	//定时播放
//	tt=setInterval(function(){
//		k++;
//		if(k==$('lunbotu li').length){
//			k=1;
//			$('.lunbotu').css({'top':'0'});
//		};
//		$('.lunbotu').stop().animate({'top':'-k*34'});
//	},1000);
//   //鼠标移入暂停
//	$('.banner').mouseenter(function(){
//		clearInterval(tt);
//	}
//	$('.banner').mouseleave(function(){
//		tt=setInterval(function(){
//			k++;
//			if(k==$('.lunbotu li').length){
//				k=1;
//				$('.lunbotu').css({'top':'0'});
//			};
//			$('.lunbotu').stop().animate({'top':'-k*34'});
//		},1000);
//	});

// 右侧 在线咨询
    var flag = 0;
	$('.box-min').find('span').click( function(){
 		//开始为0，则else，然后再变回flag=1；
 		if (flag==1) {
 			$('.service').animate({right:'-150px'});
 			flag=0;
 		}else {
 			$('.service').animate({right:'0px'});
 			flag=1;
 		}
 		
 	});
// 左侧底部 点击咨询
	var ff=0;
 	$('.zixun').children('.btn').click( function(){
 		if (ff==1) {
 			$('.zixun').css({'left':'-100px'});
 			ff=0;
 		}else {
 			$('.zixun').css({'left':'0px'});
 			ff=1;
 		}
 		
 	
 	});
//  回到顶部
	$('.Top').click( function(){
		$('body').animate({'scrollTop':'0'});
	})
})
