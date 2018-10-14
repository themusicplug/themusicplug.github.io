$(document).ready(function() {
	
	$('#fade-wrapper #close-button').click(function(){
        $('#fade-wrapper').fadeOut();
    });
	
});

function showAboutPage() {
	$('#fade-wrapper').fadeIn();
	$('#fade-wrapper').css('display', 'flex');
}