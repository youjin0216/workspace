$(function () {
    setTimeout(function () {
        $(".keyvisual .main_title").addClass("active");
        $(".keyvisual .more").addClass("active");
        $(".top_area").slideDown();
    }, 500);
    $(".top_area .close").click(function (e) {
        e.preventDefault();
        $(".top_area").slideUp();
    });
    $("header > nav > ul > li").hover(
        function () {
            $(this).parent().addClass("active");
            $(this).parent().find("sub_shadow").addClass("active");
            $(this).parents().find("header").addClass("on");
        },
        function () {
            $(this).parent().removeClass("active");
            $(this).parent().find("sub_shadow").removeClass("active");
            $(this).parents().find("header").removeClass("on");
        });
    $("header nav ul ul li").hover(
        function () {
            $(this).addClass("active");
        },
        function () {
            $(this).removeClass("active");
        });

    $("header > nav > ul >li").hover(
        function () {
            $(this).parent().addClass("active");
            $(this).addClass("active");
            $(this).parents().find(".nav_img").addClass("on");
            $(this).find("a").addClass("active");
        },
        function () {
            $(this).parent().removeClass("active");
            $(this).removeClass("active");
            $(this).parents().find(".nav_img").removeClass("on");
            $(this).find("a").removeClass("active");
        }
        );

    $("header > nav > ul >li").focusin(function () {
        $(this).parent().addClass("active");
        $(this).addClass("active");
        $(this).parents().find("header").addClass("on");
        $(this).parents().find(".nav_img").addClass("on");
    });

    $("header > nav > ul > li li:last-child").focusout(function () {
        $(this).parents().removeClass("active");
        $(this).parents().find("header").removeClass("on");
        $(this).parents().find(".nav_img").removeClass("on");
    });
    $("header nav ul ul li").focusin(function () {
        $(this).addClass("active");
        $(this).parents().find("header").addClass("on");
        $(this).parents().find(".nav_img").addClass("on");
    });
    $("header nav ul ul li").focusout(function () {
        $(this).removeClass("active");
        $(this).parents().find("header").removeClass("on");
        $(this).parents().find(".nav_img").removeClass("on");
    });
    setTimeout(function () {
        $(".keyvisual .main_title").addClass("active");
        $(".keyvisual .more").addClass("active");
    }, 500);

    $("#contents_box li").hover(
    function(){
      $(this).find("span").stop().slideDown(300);
      $(this).addClass("active");
    },
    function(){
      $(this).find("span").stop().slideUp(300);
      $(this).removeClass("active");
    }
  );
    $(".contents_box ul li a:last-child").hover(
        function(){
            $(this).addClass("active");
        },
        function(){
            $(this).removeClass("active");
        }
    );
  $(".append_gall li").hover(
    function(){
      $(this).find("a .title").stop().slideDown(300);
    },
    function(){
      $(this).find("a .title").stop().slideUp(300);
    }
  );
  $("#prepend").click(function (e) {
      e.preventDefault();
      $(".append_gall").prepend($(".append_gall li").last());
      console.log("clicked");
  });
  $("#append").click(function (e) {
      e.preventDefault();
      $(".append_gall").append($(".append_gall li").first());
      console.log("clicked");
  });

    //event
    var cntEvent=0;
    var background="images/event_box";
	var intervalEvent=setInterval(event, 3000);
    $(".play_circle li a").eq(0).addClass("active");
    function event(){
		if(cntEvent<3){
			cntEvent++;
            $(".play_box > ul").animate({marginLeft:"-=213px"});
            $(".play_circle li a").removeClass("active");
            $(".play_circle li a").eq(cntEvent).addClass("active");
            $(".event_box").css({background: 'url('+background + cntEvent + '.png)'});
		}else{
			cntEvent=0;
            $(".play_box > ul").animate({marginLeft:"0"});
            $(".play_circle li a").removeClass("active");
            $(".play_circle li a").eq(0).addClass("active");
            $(".event_box").css({background: 'url('+background + 0 + '.png)'});
		}
	}
    $(".play_ctrl > a").click(function(e){
        e.preventDefault();
        $(this).parent().toggleClass("active");
        if($(this).parent().hasClass("active")==true){
            clearInterval(intervalEvent);
        }else{
            intervalEvent=setInterval(event, 3000);
        }
    });
     $(".play_circle li a").click(function(e){
        e.preventDefault();
         cntEvent=$(this).parent().index();
         console.log(cntEvent);
         var ctrl_lft=cntEvent*(-213);
         console.log(ctrl_lft);
            $(".play_box > ul").animate({marginLeft:ctrl_lft+"px"});
            $(".play_circle li a").removeClass("active");
            $(".play_circle li a").eq(cntEvent).addClass("active");
            $(".event_box").css({background: 'url('+background + cntEvent + '.png)'});
    });
    $(".play_circle li a").hover(
    function(){
        clearInterval(intervalEvent);
    },
    function(){
        if($(".play_ctrl").hasClass("active")==false){
            intervalEvent=setInterval(event, 3000);
        }
    }
        );

    $(".company_area h3 a").hover(
        function () {
            $(this).css({ "font-weight": "bold" });
        },
        function () {
            $(this).css({ "font-weight": "normal" });
        });

    var $tab = $(".company_area h3 a");

    $(".company_area .sponsor").addClass("on");

    $tab.on("click focus", function (e) {
        e.preventDefault();
        $(".company_area > div").removeClass("on");
        $(this).parents("div").addClass("on");
    });

    $(".company_menu li").click(function (e) {
        e.preventDefault();
        $(".company_menu li").removeClass("on");
        $(this).addClass("on");

        $(".company_menu li").parents().find(".company_list0").removeClass("on");

        if ($(".company_menu li:nth-child(1)").hasClass("on") == true) {
            $(this).parents().find(".company_list0:nth-child(1)").addClass("on");
        }
        else if ($(".company_menu li:nth-child(2)").hasClass("on") == true) {
            $(this).parents().find(".company_list0:nth-child(2)").addClass("on");
        }
        else {
            $(this).parents().find(".company_list0:nth-child(3)").addClass("on");
        }
    });

    //notice
    var cnt=0;
	var interval=setInterval(notice, 3000);
    function notice(){
		if(cnt<4){
			cnt++;
            $(".notice_content > ul").animate({marginTop:"-=35px"});
		}else{
			cnt=0;
            $(".notice_content > ul").css({marginTop:"0"});
		}
	}
    $(".notice_content > a").hover(
    function(){
        clearInterval(interval);
    },
    function(){
        interval=setInterval(notice, 3000);
    }
        );
    $(".notice_content > a").click(function(e){
        e.preventDefault();
        if(cnt==0){
             $(".notice_content > ul").animate({marginTop:"-140px"});
            cnt=4;
           }else{
                $(".notice_content > ul").animate({marginTop:"+=35px"});
               cnt--;
           }
    });
    $(".btn_ctrl a").click(function(e){
        e.preventDefault();
        $(this).parent().toggleClass("active");
        if($(this).parent().hasClass("active")==true){
            clearInterval(interval);
        }else{
            interval=setInterval(notice, 3000);
        }
    });
});
