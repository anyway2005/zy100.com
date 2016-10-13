$(function(){
	var $tbody = $('.body1');

	var $tr = $tbody.find('tr');
	var $input = $tr.find('input');//获取所有input
	var $span =$tr.find('.xinghao');//*
	console.log($span.length)
		var callback1 = 0;
		var callback2 =0;
		var callback3 =0;
		var callback4 =0;
		var callback5 =0;
		var callback6 =0;
		//0用户检测
		var Reg = /^[a-zA-Z]\w{5,19}$/;//用户名
		$input.eq(0).on('blur',function(){
			
			var str1 = $input.eq(0).val();
			
			if(Reg.test(str1)){
				$span.eq(0).html("可以使用！");	
				callback1 = 1;
				return callback1;
			}else{
				$span.eq(0).html("长度6~20的以字母开头的数字 字母 下划线");
				callback1 = 0;
				return callback1;
				}
			
			});
		// 2邮箱
		var Reg1 = /\w+@[a-zA-Z0-9]+\.[a-zA-Z]+/;//邮箱
		$input.eq(1).on('blur',function(){
			
			var str0 = $input.eq(1).val();
			
			if(Reg1.test(str0)){
				$span.eq(1).html("可以使用！");	
				callback1 = 1;
				return callback1;
			}else{
				$span.eq(1).html("邮箱不合法！");
				callback1 = 0;
				return callback1;
				}
			
			});
			
			//2密码
			var Reg2 = /^\w{8,16}$/;//密码
			var str2 = $input.eq(2).val();
			$input.eq(2).on('blur',function(){
				
				if(Reg2.test(str2),true){
					// $span.eq(3).html("密码合法！")
					callback2 = 1;
					return callback2;
					
				}else{
					$span.eq(3).html("密码8到16位！")
					callback1 = 0;
					return callback1;
					}
				
			});
			
			//3确认密码
			$input.eq(3).on('blur',function(){
				var str2 = $input.eq(2).val();
				var str3 = $input.eq(3).val();
				if(str2==str3){
					// $span.eq(3).html("密码一致");
					callback3 = 1;
					return callback3;
					
				}else{
					$span.eq(3).html("密码不正确");
					callback3 = 0;
					return callback3;
					}
			});
			//4 MSM
			var reg4 = /^[1-9]\d{4,11}$/;
			$input.eq(4).on('blur',function(){
			
			var str4 = $input.eq(4).val();
			
			if(reg4.test(str4)){
				
				callback4 = 1;
				return callback1;
			}else{
				// $span.eq(4).html("格式不正确");
				callback4 = 0;
				return callback1;
				}
			
			});
	 	
			//5.QQ
			
			var reg5 = /^[1-9]\d{4,11}$/;
			$input.eq(5).on('blur',function(){
			
			var str5 = $input.eq(5).val();
			
			if(reg5.test(str5)){
				
				callback5 = 1;
				return callback1;
			}else{
				// $span.eq(5).html("格式不正确");
				callback5 = 0;
				return callback1;
				}
			
			});
			//6 家庭 办公 手机号码
			var reg6 = /^1[35678]\d{9}$/;
			$input.eq(6).on('blur',function(){
			
			var str6 = $input.eq(6).val();
			
			if(reg6.test(str6)){
				
				callback6 = 1;
				return callback1;
			}else{
				// $span.eq(6).html("格式不正确");
				callback6 = 0;
				return callback1;
				}
			
			});
			
			var $submite =  $tbody.find('.zhuce');
				
			$submite.on('click',function(){
				
				if(callback4==1&&callback3==1&&callback2==1&&callback1==1){
					
					alert('注册成功！');
					location.href='dengru.html';
				}else{
						alert('请确认无误后再尝试！！');
					
					}
			});
	
		//
		$(".zhuce").click(function(){
			//获取input中的值，存到一个变量
			var username=$("#yhm .right input").val();
			var password=$("#password input").val();
			var password2=$("#qrpsw input").val();
			var myemail=$("#youxiang input").val();
			//保存到cookie
			$.cookie("myusername",username, { expires: 7 });
			$.cookie("mypassword",password, { expires: 7 });
			$.cookie("mypassword2",password2, { expires: 7 });
			$.cookie("myemail",myemail, { expires: 7 });	
			
		})
	//取出cookie值赋值到一个变量，方便后面的判断
	var myuser=$.cookie("myusername");
	var mypsw=$.cookie("mypassword");
	var mypsw2=$.cookie("mypassword2");
	var myyouxiang=$.cookie("myemail");

	//	取出当前输入的值，赋值给变量
	var yhmz2=$("#yhmz").val()
	var wdmm2=$("#wdmm").val()
	console.log(typeof myuser);
	
	//当框失去焦点的时候开始判断
	$("#yhmz").blur(function(){
		//如果当前值！=cookie
		var $span = $('.xinxi');
		if (yhmz2!=myuser) {
			$span.html("请重新输入")
		}
		else{
			$span.html("用户名正确")
		}
	})
	$('wdmm').blur(function(){
		var $span = $('.xinxi');
		if (wdmm2!=mypsw) {
			$span.html("请重新输入")
		}
	})
	


})