// JavaScript Document


   $(function() {     
	  //  })
	    
	    var t = n = 0, count=4;//6是张数
		if($("#slidep").height()>=290) {
			$("#slide").css("overflow","hidden");
		}
		$("#slidep").height(290);
		$("#slidep").css("overflow","hidden");
		count= $("#slidep a").size();

		//$("#slidep a:not(:first-child)").hide();
		$("#slidet li").eq(0).className = 'start'
      
		$("#slidet li").mouseover(function() {
      
		    var i = $("#slidet li").index(this);//$(this).text() - 1;
		    n = i;
		    if (i >= count) {
		        return;
		    }
		    this.className = 'start';
		    $(this).siblings().removeClass('start').addClass('bg');
		    $("#slidep a").filter(":visible").fadeOut(300, function() { $(this).parent().children().eq(i).fadeIn(1000); }).css('display', 'block');
		});

		t = setInterval("showAuto()", 6000);

		$("#slide").hover(function(){
			clearInterval(t);
		}, function(){
			t = setInterval("showAuto()", 6000);
		});	

		function showAuto() {
			n = n >= (count - 1) ? 0 : ++n;
      
			$("#slidet li").eq(n).triggerHandler('mouseover');
		}

$(function(){
	
	});