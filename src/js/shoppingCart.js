$(function(){


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