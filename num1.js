let currentSlide = 0,
 theSlides = document.getElementsByClassName('image'), 
 customSliderTimer, next, prev, theWrapper = document.getElementById('slider');
function NextSlide() {
	next = ( currentSlide < theSlides.length - 1 ) ? currentSlide + 1 : 0;
	customSetCurrentSlide(next);
}
function PrevSlide() {
	prev = ( currentSlide > 0 ) ? currentSlide - 1 : theSlides.length - 1;
	customSetCurrentSlide(prev);
}
function customSetCurrentSlide(to) {
	clearInterval(customSliderTimer);
	for (let i = 0; i < theSlides.length; i ++) {
		if ( currentSlide == i ) {
			theSlides[currentSlide].classList.remove('active');
		}
		if ( next == i ) {
			theSlides[to].classList.add('active');
		}
	}
	currentSlide = to;
	customSliderStart();
}
function customSliderStart() {
	customSliderTimer = setInterval(function() {
		NextSlide();
	}, 5000);
}
if (typeof theSlides !== 'undefined') {
	window.addEventListener('resize', customSliderInit);
	customSliderInit();
	if ( theSlides.length > 1 ) {
		customSliderStart();
	}
}
