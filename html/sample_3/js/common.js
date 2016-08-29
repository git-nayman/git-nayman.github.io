$(function() {

	//Modernizr SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	$("form").submit(function() { //Change Selector
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change Path
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Scroll Fix
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {
	};

	//Disable Image Dragging
	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

//Slick Carousel
$(function(){
	$('.s2-slider').slick({ //Replace with appropriate selector
		dots: true,
		arrows: false
	});
});

//Simple jQuery Equal Height Columns
$(document).ready(function(){
	var $highestCol = Math.max($('#element1').height(),$('#element2').height());
	$('.elements').height($highestCol);
});

//Responsive Elements
$(function(){
	$('.header-navblock__icon').click(function(){
		$('.header-navblock li').slideToggle('fast');
	});
});

//Section 1: Content Switch
$(function(){
	$('#s1tab1').click(function(){
		$('#s1case1').addClass('visible').removeClass('hidden');
		$('#s1case2').addClass('hidden').removeClass('visible');
		$('#s1case3').addClass('hidden').removeClass('visible');
	});
	$('#s1tab2').click(function(){
		$('#s1case1').addClass('hidden').removeClass('visible');
		$('#s1case2').addClass('visible').removeClass('hidden');
		$('#s1case3').addClass('hidden').removeClass('visible');
	});
	$('#s1tab3').click(function(){
		$('#s1case1').addClass('hidden').removeClass('visible');
		$('#s1case2').addClass('hidden').removeClass('visible');
		$('#s1case3').addClass('visible').removeClass('hidden');
	});
});

//Section 3: Table Switch
$(function(){
	$('#s3table1').hide();	
	$('.s3-case__product').click(function(){
		$('#s3table1').toggle();
	});
	$('.s3-modal__close').click(function(){
		$('#s3table1').hide();
	});
});

modBtn_1