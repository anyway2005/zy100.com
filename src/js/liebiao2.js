$(function(){
	$('.indexList-min').hide();
	$('.fenlei').on('mouseenter',function(){
		$('.indexList-min').show();
	
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
	})
	
	$('.fenlei').on('mouseleave',function(){
		$('.indexList-min').hide();
	});

	// // 购买数量 【bug：点击后每个都会加，还要在判断】
	// var j=0;
	// $(".add").click(function(){
	// 	j++;
	// 	console.log("11111");
	// 	$(".sl").html(j);
	// })
	// $(".jian").click(function(){
	// 	j--;
	// 	$(".sl").html(j);
	// 	if (j<=1) {
	// 			j=0;
	// 			$(".sl").html(j);
	// 	}
	// })
	// var y=$('.sl').html();
	// $('.buy').click(function(){
	// 	//获取input中的值
	// 	var $number = $("#sl").html();
	// 	$('#num').html($number);
	// 	j++;
	// 	$("#num").html(j);
		
	// });

	//点击品牌  a标签的问题？
	var $aAll=$('.jianeng').find('li');
	$aAll.click(function(){
		//var $index=$(this).index();
		$(this).addClass('active').siblings().removeClass('active');
	})

	// $('.jianeng').find('li').each(function(){

	// })

	//点击 默认
	var $ddAll=$('.moren').find('dd');
	$ddAll.eq(0).css('color','#ffffff');
	$ddAll.click(function(){
		var $index=$(this).index();
		$ddAll.eq($index).css({'background':"#ff0000",'color':'#fff'})
		.siblings().css({'background':"#fff",'color':'#5e5e5e'})
		// .find('a').eq($index).css({"color":"#5e5e5e"});
	});
	// 懒加载
		var $datalist=$('.louti-allImg');
		var $ul=$('<ul/>');        //创建ul
		$.ajaxSetup({  //设置全局变量
				url:'data/goodslist.json', //路径     访问的是自建的一个json文件
				success:function(res){//访问成功后返回res对象，文本类型，字符串
					//生成一个ul
					
					$.each(res, function(idx,item) {
						

						// <li><a href=""><img src="images/g1.jpg" alt=""></a><p class="title">国庆大优惠，只要998</p></li>
						// 
						var $li=$('<li/>');   //创建一个li
						
						//创建一个a  创建一个p
						
						$('<a/>').attr({href:item.url}).html('<img src="'+item.imgurl+'"/>').appendTo($li);;
						$('<a/>').addClass('title').html(item.title).appendTo($li);
						$('<p/>').addClass('price').html(item.price).appendTo($li);
						$('<span/>').addClass('commentCount').html(item.commentCount).appendTo($li);
						
						// 计算折扣后的价格                    //off 折扣1折               //保留小数点
						// var price=(item.price*item.off).toFixed(2);
						// $('<p/>').addClass('price').html('<span>&yen;'+price+ '</span><del>&yen;'+item.price.toFixed(2) + '</del>').appendTo($li);
						$li.appendTo($ul);
					});
					
					$datalist.append($ul);
					
				}
		});
		$.ajax();
		// 懒加载效果
		// 给window绑定scroll事件，当差不多滚动到底部是加载更多内容
		$(window).on('scroll',function(){
			// 获取滚动条滚动过的距离
			var scrolltop=$(window).scrollTop();
			// 当差不多滚动到底部是加载更多内容
			if(scrolltop>=$(document).height()-$(window).height()-100){
				$.ajax();
			}
			
		})	
	//法二
	 // 	var pageNum  =1;
		// $.ajax({
		// 		data:{pageNo:pageNum},
		// 		url:'../data/liebiao.json',//API地址（数据请求地址）
		// 		dataType:'json',
		// 		success:function(res){
		// 			console.log(res);
		// 			// $.each(res,function(){
		// 			// 	var _html="<li class='two'><a href='#' class="three"><img src="+res.imgurl+"></a>
		// 			// <a class='namee' href='#'>"+res.goodsname+"</a>
		// 			// <p class='price'>"+res.price+"</p>
		// 			// <span class='sale'>"+res.sale+"</span></li>"
		// 			// $(".louti-allImg ul").append(_html);
		// 			// })
		// 		}
		// });
		


	})
