$(function(){
	var $oDiv = $('.username');
	var $input = $oDiv.find('input');//获取所有input
		console.log($input.length)
		var Reg = /^[a-zA-Z]\w{5,19}$/;//用户名
		var Reg2 = /^\w{8,16}$/;//密码
		var callback1 = 0;
		var callback2 =0;
		//0用户检测
		var Reg = /^[a-zA-Z]\w{5,19}$/;//用户名
		$input.eq(0).on('blur',function(){
			
			var str1 = $input.eq(0).val();
			
			if(Reg.test(str1)){
				callback1 = 1;
				return callback1;
			}else{
				callback1 = 0;
				return callback1;
				}
			
			});
		//2密码
			var Reg2 = /^\w{8,16}$/;//密码
			var str2 = $input.eq(2).val();
			$input.eq(2).on('blur',function(){
				if(Reg2.test(str2),true){
					
					callback2 = 1;
					return callback2;
				}else{
					callback1 = 0;
					return callback1;
					}
				
			});
			
			$('.username #drzy').click(function(){
				
			})
		//		//获取手机验证码
		// 		//如果手机号码没有填，则弹出提示
		// 			var $phone_yzm = $('.phone_yzm');
		// 			var arr =[];
		// 			$phone_yzm.on('click',function(){
		// 				var Pstr0 =  $Pinput.eq(0).val();
		// 				console.log(Pstr0);
		// 				if(Pstr0==''){
		// 					alert('请输入正确的手机号码！')
		// 				}else{
		// 					arr = [];
		// 		 			yzm = parseInt(Math.random()*10000+1000);
		// 					if( yzm >= 10000){
		// 						 yzm  = parseInt(yzm/10);
		// 					}
		// 					arr.push(yzm);
		// 					alert("您的验证码为："+yzm+'请注意查收');
							
		// 					}
		// 			});
		// 		//判断验证码
		// 		$Pinput.eq(1).on('blur',function(){
					
		// 			if($Pinput.eq(1).val()==arr[0]){
		// 				console.log("验证码正确");
		// 				P_callback1 = 1;
		// 				return P_callback1;
		// 			}else{
		// 				console.log("验证码不正确");
		// 				P_callback1 = 0;
		// 				return P_callback1;
		// 			}
		// 		});
		// 		$Pinput.eq(3).on('blur',function(){
		// 			var Pstr2 = $Pinput.eq(2).val();
		// 			var Pstr3 = $Pinput.eq(3).val();
		// 			console.log(Pstr3);
		// 			if(Pstr2==Pstr3){
		// 				console.log("密码一致");
		// 				P_callback3 = 1;
		// 				return P_callback3;
						
		// 			}else{
		// 				console.log("验证码密码 不一致");
		// 				P_callback3 = 0;
		// 				return P_callback3;
		// 				}
		// 		});

		//生成随机验证码函数,函数返回生成的验证码：生成4位随机数
	// function ranCode(){
	// 	var str = "";					//定义空字符串 str 用于存放生成的验证码
	// 	//循环4次生成4位的验证码(循环几次就生成几位)
	// 	for(var i=0;i<4 ;i++ ){	
	// 		//随机生成0至11的随机数，共12种情况，分每4种情况为一组
	// 		var Numb = parseInt( Math.random()*11 );
			
	// 		//Num在 0 —— 3 范围内时，生成一个数字字符
	// 		if (Numb>=0 && Numb<=3)	{
	// 			//随机得到0到9这10个数字中的任意一个
	// 			str += parseInt( Math.random()*9 );	
	// 		}
	// 		//Num在 4 —— 7 范围内时，生成一个大写字母字符								
	// 		else if( Numb>=4 && Numb<=7 ){
	// 			str += parseInt( Math.random()*9 )
	// 			//乘26是共有26个字母，65是大写A的编码
	// 			//str += String.fromCharCode( parseInt(Math.random()*26) + 65 );
	// 		}
	// 		//Num在 8 —— 11 范围内时，生成一个小写字母字符
	// 		else if( Numb>=8 && Numb<=11 ){	
	// 			str += parseInt( Math.random()*9 )
	// 			//97是小写a的编码
	// 			//str += String.fromCharCode( parseInt(Math.random()*26) + 97 );
	// 		}
	// 	}
	// 	return str;
	// }
})