$(document).ready(function(){
	$('.mobile-nav-toggle').click(function(){
		$('.mobile-nav').toggleClass('is-open');
		$(this).toggleClass('open');
	})
});
