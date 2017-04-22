window.onload = function() {
	var lock = false;
	var lock1=false;
	var index = 0;
	var exdex = 0;
	var aatime;
	module1();
	
	function module1() {
		$(".banner .plain").css({
			"left": "500px",
			"top": "92px"
		});
		$(".banner .bt1").hover(function() {
			$(".banner .bt-md img").css("transform", "rotate(720deg)");
		}, function() {
			$(".banner .bt-md img").css("transform", "rotate(0deg)");
		})
		$(".return").click(function(){
			$("html,body").animate({"scrollTop":"0"},500);
		})
	}
	window.onscroll = function() {
		var t = document.documentElement.scrollTop || document.body.scrollTop;
		var timer;
		var timer2;
		var m2 = $("#module2").offset().top - 400;
		var m3 = $("#module3").offset().top - 400;
		var m4 = $("#module4").offset().top - 400;
		var m5 = $("#module5").offset().top - 400;
		var m6 = $("#module6").offset().top - 400;
		var m7 = $("#module7").offset().top - 400;
		var m8 = $("#module8").offset().top - 400;
		var m9 = $("#module9").offset().top - 400;
		var m00 = $("#module00").offset().top - 400;
		if(m3 > t && t >= m2) {
			module2();
		} else if(m4 > t && t >= m3) {
			module3();
		} else if(m5 > t && t >= m4) {
			module4();
		} else if(m6 > t && t >= m5) {
			if(lock) {

			} else {
				module5();
			}
		} else if(m7 > t && t >= m6) {
			module6();
		} else if(m8 > t && t >= m7) {
			module7();
		} else if(m9 > t && t >= m8) {
			module8();
		} else if(m00 > t &&t >= m9) {
			if(lock1) {

			} else {
				module9();
			}
		}else if(t >= m00){
			module00()
		}

		function module2() {
			$("#module2 .m2-title").css("margin-left", "0px").addClass("slideInLeft");
			$("#module2 .m2-left").css("margin-left", "0").addClass("bounceInLeft");
			$("#module2 .m2-l1").css("margin-left", "0").addClass("bounceInLeft");
			$("#module2 .m2-l2").css("margin-top", "0").addClass("bounceInDown");
			$("#module2 .m2-l3").css("margin-top", "50px").addClass("bounceInUp");
			$("#module2 .m2-l4").css("margin-left", "0").addClass("bounceInRight");
			$("#module2 .m2-r1").css("margin-left", "0").addClass("bounceInRight");
			$("#module2 .m2-r2").css("margin-left", "0").addClass("bounceInRight");
			$("#module2 .m2-r3").css("margin-left", "0").addClass("bounceInRight");
			$("#module2 .m2-r4").css("margin-left", "0").addClass("bounceInRight");
			$("#module2 .m2-r5").css("margin-left", "0").addClass("bounceInRight");
			$("#module2 .m2-midd").addClass("fadeInDown");
		}

		function module3() {
			$("#module3 .m3-title").css("margin-left", "0px").addClass("slideInLeft");
			$("#module3 .uu").css("margin-top", "67px").addClass("zoomInDown")
			$("#module3 .uu2").addClass("fadeInDownBig")
		}

		function module4() {
			$("#module4 .m4-title").css("margin-left", "0px").addClass("slideInLeft");
			$("#module4 .m4-01-lt").css("margin-left", "0").addClass("zoomInLeft");
			setTimeout(function() {
				$("#module4 .lt1 em").css("height", "180px");
				$("#module4 .lt2 em").css("height", "370px");
				$("#module4 .lt3 em").css("height", "290px");
				$("#module4 .lt4 em").css("height", "230px");
				$("#module4 .lt5 em").css("height", "146px");
			}, 1000);
			$("#module4 .m4-01-rt").css("margin-right", "0").addClass("zoomInRight");
			$("#module4 .m4-01-rt .rt1").addClass("fadeInRight");
			$("#module4 .m4-02").addClass("fadeInDown");
			$("#module4 .m4-02 .pt").css("margin-right", "20px").addClass("bounceInRight");
			$("#module4 .m4-02 .gj").css("margin-right", "0").addClass("bounceInRight");
			$("#module4 .m4-04").addClass("fadeInUp");
		}

		function module5() {
			$("#module5 .m5-title").css("margin-left", "0px").addClass("slideInLeft");
			$("#module5 .m5-01-lt").css("margin-left", "0px").addClass("bounceInLeft");
			$("#module5 .m5-01-rt").css("margin-right", "0px").addClass("bounceInRight");
			$("#module5 .m5-02").addClass("fadeInDownBig");
			$("#module5 .m5-03").addClass("fadeInDown");
			lock = true;
			$("#module5 .hege").css({
				"display": "block",
				"width": "400px",
				"height": "400px",
				"right": "100px",
				"top": "0"
			}).
			animate({
				"width": "159px",
				"height": "172px",
				"right": "70px",
				"top": "240px"
			}, 500, function() {
				$("#module5 .hege").animate({
					"display": "none"
				}, 1000);
			})

			function next() {
				index++;
				if(index > 3) {
					index = 0;
				}
				$("#module5 .m5-01-rt .m5up1 span").eq(index).stop(true, true).css("left", "1000px").animate({
					"left": "0"
				});
				$("#module5 .m5-01-rt .m5up1 span").eq(exdex).stop(true, true).css("left", "0").animate({
					"left": "-1000px"
				});
				$("#module5 .m5-01-rt .m5up2 span").eq(index).stop(true, true).css("left", "1000px").animate({
					"left": "0"
				});
				$("#module5 .m5-01-rt .m5up2 span").eq(exdex).stop(true, true).css("left", "0").animate({
					"left": "-1000px"
				});
				$("#module5 .hege").css({
					"display": "block",
					"width": "400px",
					"height": "400px",
					"right": "100px",
					"top": "0"
				}).
				animate({
					"width": "159px",
					"height": "172px",
					"right": "70px",
					"top": "240px"
				}, 400, function() {
					$("#module5 .hege").animate({
						"display": "none"
					}, 1000);
				})
				exdex = index;
			}
			setInterval(function() {
				next()
			}, 5000)
			return lock;
		}

		function module6() {
			$("#module6 .m6-title").css("margin-left", "0px").addClass("slideInLeft");
			$("#module6 .m6-01").css("margin-left", "0px").addClass("slideInRight");
			setTimeout(function(){
				$("#module6 .m6-02-lt").eq(0).animate({
					"left": "0px"
				}, 1000);
				$("#module6 .m6-02-rt").eq(0).animate({
					"right": "0px"
				}, 1000);
			},1000)
			$("#module6 .m6-bt").addClass("fadeInDown");
			$("#module6 .shuzi").off().on("click", function() {
				var $index = $(this).index();
				var $this = $(this);
				$("#module6 .m6-01 span").each(function() {
					$(this).removeClass("active");
					if($(this).attr("data-id") == $this.attr("data-id")) {
						$(this).addClass("active");
					}
				});
				$this.addClass("active");
				$("#module6 .m6-02-lt").stop(true, true).animate({
					"left": "-1000px"
				}, 300, function() {
					$("#module6 .m6-02-lt .wz").each(function() {
						$(this).removeClass("act");
					})
					$("#module6 .m6-02-lt .wz").eq($index).addClass("act");
					$("#module6 .m6-02-lt").eq(0).animate({
						"left": "0px"
					}, 300);
				});
				$("#module6 .m6-02-rt").stop(true, true).animate({
					"right": "-1000px"
				}, 300, function() {
					$("#module6 .m6-02-rt .map").each(function() {
						$(this).removeClass("act");
					})
					$("#module6 .m6-02-rt .map").eq($index).addClass("act");
					$("#module6 .m6-02-rt").eq(0).animate({
						"right": "0px"
					}, 300);
				});
			})
		}
	}

	function module7() {
		$("#module7 .m7-con-title").css("margin-left", "0").addClass("bounceInLeft");
		$("#module7 .m7-con-ways").css("margin-left", "0").addClass("bounceInLeft");
		$("#module7 .m7-con-ways1").css("margin-right", "0").addClass("bounceInRight");
		$("#module7 .m7-con-ways2").css("margin-left", "0").addClass("bounceInLeft");
		$("#module7 .m7-con-ways3").css("margin-right", "0").addClass("bounceInRight");
		$("#module7 .m7-em-title").addClass("bounceInDown");
		$("#module7 .bor").addClass("flipInX");
		$("#module7 .play").off().on("click",function(){
			$(this).hide();
			$("#module7 .zhe").hide();
			$("#shipin").get(0).play();
		})
	}

	function module8() {
		$("#module8 .m8-title").addClass("fadeInDownBig");
		$("#module8 .m8-up").css("margin-left", "0").addClass("fadeInLeft");
		$("#module8 .m8-down").css("margin-left", "0").addClass("fadeInRight");
	}

	function module9() {
		$("#module9 .m9-con-title").css("margin-left", "0px").addClass("bounceInLeft");
		$("#module9 .coupon").addClass("rotateInDownLeft");
		$("#module9 .count-down").addClass("rotateInDownRight");
		clearInterval(aatime);
		lock1 = true;
////		倒计时
		var interval = 1;

		function ShowCountDown(year, month, day, divname) {
			var now = new Date();
			var endDate = new Date(year, month - 1, day);
			var leftTime = endDate.getTime() - now.getTime();
			var leftsecond = parseInt(leftTime);
			var day = Math.floor(leftsecond / (1000 * 60 * 60 * 24));
			var hour = Math.floor((leftsecond - day * 24 * 60 * 60 * 1000) / 3600000);
			var minute = Math.floor((leftsecond - day * 24 * 60 * 60 * 1000 - hour * 3600000) / 60000);
			var second = Math.floor((leftsecond - day * 24 * 60 * 60 * 1000 - hour * 3600000 - minute * 60000) / 1000);
			var hm = Math.floor(leftsecond - day * 24 * 60 * 60 * 1000 - hour * 3600000 - minute * 60000 - second * 1000);
			if(minute <= 9) {
				minute = '0' + minute;
			}
			if(hour <= 9) {
				hour = '0' + hour;
			}
			if(day <= 9) {
				day = '0' + day;
			}
			if(second <= 9) {
				second = '0' + second;
			}
			day = day.toString();
			hour = hour.toString();
			minute = minute.toString();
			second = second.toString();
			$(".count-down").html('<span class="count-down-1">距离活动结束</span><span class="count-down-bg">' + day.substring(0, 1) + '</span><span class="count-down-bg">' + day.substring(1) + '</span>' +
				'<span class="count-down-tips">天</span><span class="count-down-bg">' + hour.substring(0, 1) + '</span><span class="count-down-bg">' + hour.substring(1) + '</span><span class="count-down-tips">时</span>' +
				'<span class="count-down-bg">' + minute.substring(0, 1) + '</span><span class="count-down-bg">' + minute.substring(1) + '</span><span class="count-down-tips">分</span>' +
				'<span class="count-down-bg">' + second.substring(0, 1) + '</span><span class="count-down-bg">' + second.substring(1) + '</span><span class="count-down-tips">秒</span>' +
				'<span class="count-down-bg1">' + hm + '</span>');
		}
		aatime=setInterval(function() {
			ShowCountDown(2016, 12, 16, 'divdown1');
		}, interval);
		return lock1;
	}
	function module00() {
		$("#module00 .aimg").css("left","626px").addClass("bounceInRight");
//		$("#module8 .m8-up").css("margin-left", "0").addClass("fadeInLeft");
//		$("#module8 .m8-down").css("margin-left", "0").addClass("fadeInRight");
	}

	var adiv = document.getElementById("adiv");
	var oul = adiv.getElementsByTagName("ul")[0];
	var ali = oul.getElementsByTagName("li");
	var iheight = ali[0].offsetHeight;
	oul.innerHTML += oul.innerHTML;
	oul.innerHTML += oul.innerHTML;
	oul.style.height = iheight * (ali.length) + "px";
	timer = setInterval(function() {
		if(adiv.scrollTop > oul.offsetHeight / 2) {
			adiv.scrollTop = 0
		} else if(adiv.scrollTop == 0) {
			adiv.scrollTop = oul.offsetHeight / 2
		}
		adiv.scrollTop = adiv.scrollTop + 1
	}, 10);

}