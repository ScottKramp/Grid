$(window).ready(size);
$(window).ready(color);
$(window).resize(size);
$(window).scroll(size);
var width = $(window).width();
var height = $(window).height();
var scrollNum
var colors = ["#F9003E", "#0580E7", "#11EE7E"]

for(var cell = 0; cell < 100; cell++){
	var color = colors[Math.floor(Math.random()*colors.length)];
	if (cell < 10){
		$(".screen").append("<div class = 'box 0" + cell + "'></div>");
		$(".0" + cell).css({
			backgroundColor: color,
		})
	}else{
		$(".screen").append("<div class = 'box " + cell + "'></div>");
		$("." + cell).css({
			backgroundColor: color,
		})
	}
}



function size(){
	width = $(window).width();
	height = $(window).height();
	scrollNum = $(document).scrollTop();  
	$(".screen").css({
		height: height,
		width: width,
	})
	$(".box").css({
		height: height * .1,
		width: width * .1,
	})
	boxPos();
}

function boxPos(){
	var cellNumber;
	for(var leftTenth = 0; leftTenth < 10; leftTenth++){
		for(var leftDigit = 0; leftDigit < 10; leftDigit++){
			// var color = colors[Math.floor(Math.random()*colors.length)];
			cellNumber = String(leftTenth) + String(leftDigit)
			$("." + cellNumber).css({
				top: height * leftTenth/10,
				left: width  * leftDigit/10,
				// backgroundColor: color,
			})
		}
	}
}





