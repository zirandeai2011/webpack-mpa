$(function(){
	$(".home-btn1").hover(function(){
		$(this).siblings().children(".big-yuan-n").addClass("active");
		//$(this).siblings().children(".swing-one").addClass("on");
		$(this).siblings().children(".sicon1").addClass("on");
		$(this).siblings().children(".sicon2").addClass("on");
		$(this).siblings().children(".sicon3").addClass("on");
	},function(){
		$(this).siblings().children(".big-yuan-n").removeClass("active");
		//$(this).siblings().children(".swing-one").removeClass("on");
		$(this).siblings().children(".sicon1").removeClass("on");
		$(this).siblings().children(".sicon2").removeClass("on");
		$(this).siblings().children(".sicon3").removeClass("on");
	});
	
	$(".home-btn2").hover(function(){
		$(this).siblings().children(".big-yuan-n").addClass("active");
		$(this).siblings().children(".sicon4").addClass("on");
		$(this).siblings().children(".sicon5").addClass("on");
		$(this).siblings().children(".sicon6").addClass("on");
	},function(){
		$(this).siblings().children(".big-yuan-n").removeClass("active");
		$(this).siblings().children(".sicon4").removeClass("on");
		$(this).siblings().children(".sicon5").removeClass("on");
		$(this).siblings().children(".sicon6").removeClass("on");
	});
	
	
	$(".searchBox .down-a").click(function(){$(this).next(".downlist").toggle();})
	$(".searchBox .downlist li a").click(function(){
		var name=$(this).text();
		$(this).parent().parent().siblings("a.down-a").children("span").text(name);
		$(this).parent().parent().hide();
	});
	$(".search-list li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");	
	});
	$(".btn-agree").click(function(){
		$(".maskBox").fadeIn('fast');
	});
	$(".btn-close").click(function(){
		$(".maskBox").fadeOut();
	});
	$(".sidebar-small .menu-ul li a").click(function(){
		$(this).addClass("active");
		$(this).parents().siblings(".sidebar-small .menu-ul li").children(".sidebar-small .menu-ul li a").removeClass("active");   
    });
	//tab【太多tab】
	$('a[data-toggle=tab]').click(function(){
       $(this).parent().addClass("active").siblings().removeClass("active");
       selector = $(this).attr("data-target");
	   $(selector).addClass("active").siblings().removeClass("active");
       $(selector).siblings().css("display","none")
       $(selector).fadeIn("fast");
   });
   	$(".btn-modify").click(function(){
		$(this).hide();
		$(".info-btns").show();	
		$(".info-detail .input").addClass("on");
		$(".info-detail .input").attr("disabled",false); 
	});
	$(".info-btns a").click(function(){
		$(this).parent(".info-btns").hide();
		$(".btn-modify").show();
		$(".info-detail .input").removeClass("on");
		$(".info-detail .input").attr("disabled",true); 	
	});
	
	$(".modify-password").click(function(){
		$(".password-cont").show();	
		$(".info-cont").show();	
	});
	
	$(".nicescroll-v").niceScroll();	
	
	
	$('.paging a').click(function(){
		$(this).addClass('active').siblings().removeClass('active');	
	});
	
	$(".dropdownBox input").click(function(){
		$(this).siblings(".poverbox").toggle();	
	});
	$(".dropdownBox-s input").click(function(){
		$(this).next(".leftbox").show();	
	});
	$(".dropdownBox-b input").click(function(){
		$(this).next(".leftbox").show();	
	});
	$(".leftbox").click(function(){
		$(this).next(".leftbox-cont").show();
	});
	$(".city input").click(function(){
		$(this).siblings(".cityBox").toggle();	
	});
	
	
	
	$(".pop-tabs li").click(function(){  
		var index=$(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$(".pop-tab-content >.tab-city").eq(index).addClass('active').siblings().removeClass('active');
	});
	
	
	
})

