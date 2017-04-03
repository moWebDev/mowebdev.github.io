$(document).ready(function(){
	$('.mobile-nav-toggle').click(function(){
		$('.mobile-nav').slideToggle('is-open');
		$(this).toggleClass('open');
	});
	$('.mobile-nav li a').click(function(){
		$('.mobile-nav').slideToggle('is-open');
		$('.mobile-nav-toggle.open').removeClass('open');
	})
});
