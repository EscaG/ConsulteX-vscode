$(document).ready(function() {
	$('.submenu a').on('click', function(){
	  $('.nav-link').removeClass('active');
	  $('#home-tab').addClass('active');
	  $('.home-tabs').removeClass('active');
	});

});
 

