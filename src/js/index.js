$(function(){
	// 广告列表
	$('.indexList-min').on('mouseenter','li',function(){
		var index = $(this).index();
		$('.con').eq(index).show();
	});

	$('.indexList-min').on('mouseleave','li',function(){
		var index = $(this).index();
		//开始时，所有的先隐藏
		$('.con').hide();
		$('.con').on('mouseenter',function(){
			$(this).show();
		});
	});

	$('.con').on('mouseleave',function(){
			$(this).hide();
		});
// 大轮播图
	var i=0;
	var len=$('.lbt').find('li').length;
	var timer;
	$('.number').find('span').eq(0).css('background','#d00a0d')
	timer=setInterval(bannermove,3000);

	function bannermove(){
		i++;
		if(i == len){
			i=0; //如果到达最后一张就回到第一张
		}
		$('.number').find('span').eq(i).css('background','#d00a0d').siblings().css('background','#575455');
		$('.lbt').find('li').css('opacity','0');
		$(".lbt").find('li').css('zIndex','0');
		$(".lbt").find('li').eq(i).css('zIndex','100').animate({opacity:1}).siblings().animate({opacity:1});

	}

	//获取小数字
	var focus=$('.number');
	focus.on('mouseenter','span',function(){
		clearInterval(timer);
		var index=$(this).index();
		i = index -1 ;//因为bannermove()li有i++
		bannermove();

	}).on('mouseleave',function(){
		//鼠标离开时重新执行定时器
		timer=setInterval(bannermove,3000);
	})
//   期间特价
//li。
	$('.tab-list').eq(0).css({'borderBottom':'2px solid #e41922','color':'#c71b21'}).find('.tab-all').eq(0).show();//设置初始样式
	$('.tab-list').mouseenter(function(){
		// 先隐藏ul
		$('.tab-list').find('.tab-all').stop(true).hide(500);
		$(this).css({'borderBottom':'2px solid #e41922','color':'#e41922'}).siblings().css({'borderBottom':'2px solid #cecece','color':'#898989'});
		// 当前这个li下面的ul显示
		$(this).find('.tab-all').stop(true).show(500);
	});

// -----------楼梯的border-bottom颜色
	$('.box4 li').eq(0).css({'borderBottom':'2px solid #e41922'});
	$('.box5 li').eq(0).css({'borderBottom':'2px solid #e41922'});
	$('.box6 li').eq(0).css({'borderBottom':'2px solid #e41922'});
	$('.box7 li').eq(0).css({'borderBottom':'2px solid #e41922'});
	$('.box8 li').eq(0).css({'borderBottom':'2px solid #e41922'});
	$('.box9 li').eq(0).css({'borderBottom':'2px solid #e41922'});
	



});
	























