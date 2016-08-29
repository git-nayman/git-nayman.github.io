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

	//Chrome Scroll Plugin
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {
	};

});

//Scroll events
$(document).ready(function(){
	$(window).on('scroll', function(){

		var currPos = window.pageYOffset;
		var scrollPos1 = 100; //adjust offset position for sticky menu
		var scrollPos2 = 300; //adjust offset position for counter

		if(currPos > scrollPos2) //add counter starting event
			{
				$('#count-item__num1').animate(
					{num: 5 - 0}, //increment to/from
					{duration: 5000, step: function(num){
						this.innerHTML = (num + 1).toFixed(0)}
					}
				);
				$('#count-item__num2').animate(
					{num: 510 - 0}, //increment to/from
					{duration: 4500, step: function(num){
						this.innerHTML = (num + 1).toFixed(0)}
					}
				);
				$('#count-item__num3').animate(
					{num: 33 - 0}, //increment to/from
					{duration: 4500, step: function(num){
						this.innerHTML = (num + 1).toFixed(0)}
					}
				);
			}
  });
});

//Sticky Top Line (class 'fixdbar') & Responsive Menu
$(document).ready(function(){
	$(window).on('scroll', function(){
		var yAxisPos = window.pageYOffset;
		var scrollPos = 240;
		if(yAxisPos > scrollPos) 
			{$('.head-fixdbar').addClass('fixed');}
		else{$('.head-fixdbar').removeClass('fixed');}
		if($('.head-fixdbar').hasClass('fixed'))
			{$('.head-fixdbar-menu__logo').addClass('visible').removeClass('hidden');}
		else{$('.head-fixdbar-menu__logo').addClass('hidden').removeClass('visible');}
	});

	$('.head-fixdbar-menu__bar').click(function(){
		$('.head-fixdbar-menu-navigation').fadeToggle('fast');
	});
});

//Showcase Tabs
$(document).ready(function(){
	  //Variables
    var $allCat = $('.showcase-content-items-item__descr:contains()');
    var $firstCat = $('.showcase-content-items-item__descr:contains(Мебельные компании)');
    var $secondCat = $('.showcase-content-items-item__descr:contains(Барбершопы)');
    var $thirdCat = $('.showcase-content-items-item__descr:contains(Медицинские центры)');
    
    //Category Filter
    $('#showcaseTab1').click(function(){
        $('.showcase-content-items-item').fadeOut('fast');
        $allCat.parent().fadeIn('fast');
    });
    $('#showcaseTab2').click(function(){
        $('.showcase-content-items-item').fadeOut('fast');
        $firstCat.parent().fadeIn('fast');
    });
     $('#showcaseTab3').click(function(){
        $('.showcase-content-items-item').fadeOut('fast');
        $secondCat.parent().fadeIn('fast');
    });
     $('#showcaseTab4').click(function(){
        $('.showcase-content-items-item').fadeOut('fast');
        $thirdCat.parent().fadeIn('fast');
    });
});

//Google Maps API
var mapCanvas = document.getElementById("gMap");
var mapOptions = {
	center: new google.maps.LatLng(59.9452, 30.2935), zoom: 15
}
var map = new google.maps.Map(mapCanvas, mapOptions);


marker = new google.maps.Marker({
map:map,
	// draggable:true,
	// animation: google.maps.Animation.DROP,
	position: new google.maps.LatLng(59.944025, 30.295623),
	icon: 'svg/icon_marker.svg' // null = default icon
});