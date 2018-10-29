/*modal点击取消清空input内容*/
$(".cancel").click(function(){
	$(".searchInput").val("");
})
/*modal点击取消清空input内容*/
/*modal点击确定*/
$(".confirm").click(function(){
	var tt = $(".searchInput").val();
		if(tt){
			$(".xuanxiangUl").append('<li><span>肉蛋类'+tt+'mg</span><i class="close">&times;</i></li>');
		}else{
			$(".xuanxiangUl").append('<li><span>肉蛋类**mg</span><i class="close">&times;</i></li>');
		}
	$(".searchInput").val("");	
})
$(".xuanxiangUl").on("click","li", function(){
	$(this).remove();
});

$(".next0").click(function(){
		$(".question0").css("display","none");
	$(".question1").css("display","block");	
})
$(".next1").click(function(){
		$(".question1").css("display","none");
	$(".question2").css("display","block");	
})
$(".next2").click(function(){
		$(".question2").css("display","none");
	$(".question3").css("display","block");	
})
$(".next3").click(function(){
		$(".question3").css("display","none");
	$(".question4").css("display","block");	
})
$(".next4").click(function(){
		$(".question4").css("display","none");
	$(".question5").css("display","block");	
})
$(".next8").click(function(){
		$(".question0").css("display","block");
	$(".question1").css("display","none");	
})
$(".next9").click(function(){
		$(".question1").css("display","block");
	$(".question2").css("display","none");	
})
$(".next10").click(function(){
		$(".question2").css("display","block");
	$(".question3").css("display","none");	
})
$(".next11").click(function(){
		$(".question3").css("display","block");
	$(".question4").css("display","none");	
})
$(".next12").click(function(){
		$(".question4").css("display","block");
	$(".question5").css("display","none");	
})
$(".next13").click(function(){
		$(".question5").css("display","block");
	$(".question6").css("display","none");	
})
//$(".searchInput>li").click(function(){
//	console.log(1);
//	$("this").remove();
//})
/*modal点击确定*/
