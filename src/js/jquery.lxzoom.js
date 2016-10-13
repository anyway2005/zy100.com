jQuery.prototype.lxzoom = function(){
	var $self = this;
	var $smallPic = this.find('img');
	var $minZoom;

	// 大图容器
	var $bigWrap;

	// 大图
	var $bigPic;

	// 大图与小图的比例
	var ratio;
	// 初始化
	init($smallPic.attr('src'));

	// 绑定mousemove事件
	$smallPic.on('mousemove',function(e){
		var bigSrc = $(this).attr('src');
		// 生成html结构
		

		// 获取鼠标在小图中的位置
		var pos = {x:e.pageX - $smallPic.offset().left,y:e.pageY - $smallPic.offset().top};
		console.log(pos,ratio)
		$bigPic.css({
			left:-pos.x/ratio,
			top:-pos.y/ratio
		});

		// minizoom位置
		$minZoom.css({
			top:pos.y - $minZoom.outerHeight()/2,
			left:pos.x - $minZoom.outerWidth()/2
		})
	});

	function init(src){
		// 生成html结构
		$bigPic = $('<img/>').attr('src',src);
		$bigWrap = $('<div/>').addClass('lxbzoom').append($bigPic).appendTo('body');

		$minZoom = $('<span/>').addClass('minzoom').appendTo($self);

		$bigPic.load(function(){
			ratio = $smallPic.outerWidth()/$bigPic.outerWidth();
		})
	}
}
//$('#box').lxzoom();