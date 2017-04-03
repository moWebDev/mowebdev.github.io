$(document).ready(function(){
	$('.mobile-nav-toggle').click(function(){
		$('.mobile-nav').slideToggle('is-open');
		$(this).toggleClass('open');
	})
});
