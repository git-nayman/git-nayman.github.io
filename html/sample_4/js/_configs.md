<!--CONFIGURATIONS-->
<!--
1. E-mail Ajax Send CONF (line)
2. Equal Height divs CONF (line)
3. Flexibility&PostCSS-Flexibility (line)
4. Waypoints
5. Animate CSS
6. Magnific-popup
7. Slick Carousel
8. Switch divs
-->

<!--1-->
<!--E-mail Ajax Send CONF

1) include JQuery library (upload JQuery to /libs/jquery/jquery.min.js and include path in <Load Libraries> section of index.html);
2) 'E-mail Ajax Send' must be included in /js/common.js;
3) change Ajax Selector in common.js;
4) create HTML form with you form class;
5) create HTML Hidden Required Fields with Custom Values:
<form>
	//Hidden Required Fields
	<input type="hidden" name="project_name" value="Site Name">
	<input type="hidden" name="admin_email" value="admin@mail.com">
	<input type="hidden" name="form_subject" value="Form Subject">
	//END Hidden Required Fields

	<input type="text" name="Name" placeholder="You name..." required><br>
	<input type="text" name="E-mail" placeholder="You E-mail..." required><br>
	<input type="text" name="Phone" placeholder="You phone..."><br>
	<button>Send</button>
</form>
6) change path to mail.php in your common.js.-->

<!--2-->
<!--Equal Height divs CONF

1) include JQuery library;
2) set up HTML. Be sure to give each div you want to organize the same class:
	<div class="your-class">Here is some stuff. </div>
	<div class="your-class">Here is some stuff. Here is more stuff than in the previous one.</div>
	<div class="your-class">Some stuff.</div>
3) include this script in common.js or in <head> section:

function equalHeight(group) {
    tallest = 0;
    group.each(function() {
        thisHeight = $(this).height();
        if(thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    group.height(tallest);
}
 
$(document).ready(function(){
    equalHeight($(".your-class"));
});
-->

<!--3-->
<!--Flexibility&PostCSS-Flexibility
FlexBox module for IE8&9.

1) upload flexibility.js to /libs/flexibility/flexibility.js and include path in <Load Libraries> section
2) npm install --save-dev postcss
3) npm install --save-dev postcss-flexibility
4)Config gulpfile.js:
	var gulp = require('gulp');
	var postcss = require('gulp-postcss');
	var flexibility = require('postcss-flexibility');

	gulp.task('css', function() {
  		return gulp.src('src/**/*.css')
    		.pipe(postcss([flexibility]))
    		.pipe(gulp.dest('dist'));
	});
-->

<!--4-->
<!--Waypoints
Simple lib, which is up to set animation triggers. JQuery dependant.

1) Follow instructions in 'common.js' file, duplicated here:

	//Waypoints & Animate.css
	//Replace '.element' with custom class and change 'animate.css' animation class
	$(document).ready(function() {
		$('.element').css('opacity', 0); // Hides '.element' on page load. Delete optionally

		$('.element').waypoint(function() { 
			$('.element').addClass('flip');}, //Adds Animate.css animation class
		{offset: '100%'}); //Animation begins at 100% height of the viewport

		$('.element').css('opacity', 1); // Brings back '.element' opacity. Delete optionally
	})
-->

<!--5-->
<!--Animate CSS
Simple animation lib. JQuery dependant.

1) Add class "animated" to an object, which needs to be animated
2) Add class "infinite" optionally. It creates a neverending loop.
3) Follow instruction in 'common.js' file;

for more info (and bunch of different animations) go to
	https://daneden.github.io/animate.css

4) Delay, duration and iterations could be easily handled with CSS
(Just change -vendor-prefixes):

.element {
  -vendor-animation-duration: 3s; // Change -vendor
  -vendor-animation-delay: 2s; // Change -vendor
  -vendor-animation-iteration-count: infinite; // Change -vendor
}
-->

<!--6-->
<!--Magnific-popup

1) include JQuery library if not yet;
2) install plugin via bower: 
	bower install magnific-popup
3) put core CSS file in <head>:
	<link rel="stylesheet" href="magnific-popup/magnific-popup.css">
4) put core JS file in <Load Libraries> section:
	<script src="magnific-popup/jquery.magnific-popup.js"></script>

5) set code in your HTML:

	<div class="parent-container">
		<a href="path-to-image-1.jpg">Open popup 1</a>
		<a href="path-to-image-2.jpg">Open popup 2</a>
		<a href="path-to-image-3.jpg">Open popup 3</a>
	</div>

6) initialize your class in common.js:

	$(document).ready(function() {
		$('.parent-container').magnificPopup({
			delegate: 'a', // child items selector, by clicking on it popup will open
			type: 'image'
			// other options
});

	});
-->

<!--7-->
<!--Slick Carousel
It's set up. Install just slick-lib via bower (par.6). Otherwise:

1) include JQuery;
2) paste to the <script>-section:
	{"src" : "libs/slick-carousel/slick/slick.min.js", "async" : false}
3) include in <head>-section
	<link rel="stylesheet" type="text/css" href="libs/slick-carousel/slick/slick.css" />
	<link rel="stylesheet" type="text/css" href="libs/slick-carousel/slick/slick-theme.css" />
4) install Slick Carousel via bower:
	bower install --save slick-carousel
5) in common.js:
	//Slick Carousel
	$(document).ready(function(){
		$('.your-class').slick({ //replace with appropriate selector
			dots: true,
			arrows: false
		});
	});
6) customize "slick-theme.css"
-->