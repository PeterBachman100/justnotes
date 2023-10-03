var jQ = jQuery.noConflict();

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
}

jQ(document).ready(function() {
	
	jQ('.expandable-content').hide();
	jQ('.expandable-header').click(function() {

		if( jQ( this ).hasClass( 'expanded' ) ) {
			jQ( this ).removeClass( 'expanded' );
			jQ( this ).next().slideUp('fast');
		}
		
		else {
			jQ( this ).addClass( 'expanded' );
			jQ( this ).next().slideDown('fast');
		}
	});
	
});