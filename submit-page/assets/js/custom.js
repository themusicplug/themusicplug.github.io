$(document).ready(function() {
	
	$('#select').change(function() {
		var valueSelected = this.value;
		
		if (valueSelected === "sample-packs") {
			$('#title-1').html("What are the best free");
			$('#title-2').html("you have used?");
			$('#email-subject').attr('value', "Free sample packs!");
		} else if (valueSelected === "plugins") {
			$('#title-1').html("What are the best free");
			$('#title-2').html("you have used?");
			$('#email-subject').attr('value', "Free plugins!");
		} else if (valueSelected === 'tutorials') {
			$('#title-1').html("What are the best");
			$('#title-2').html("you have read or watched?");
			$('#email-subject').attr('value', "Tutorials!");
		} else if (valueSelected === "daws-tools") {
			$('#title-1').html("What are the best free");
			$('#title-2').html("you have used?");
			$('#email-subject').attr('value', "Free DAWs/Tools!");
		} else if (valueSelected === "preset-packs") {
			$('#title-1').html("What are the best free");
			$('#title-2').html("you have used?");
			$('#email-subject').attr('value', "Free preset packs!");
		} else if (valueSelected === "communities") {
			$('#title-1').html("What are the best");
			$('#title-2').html("you have been a part of?");
			$('#email-subject').attr('value', "Communities!");
		} else if (valueSelected === "budget-gear") {
			$('#title-1').html("What is the best");
			$('#title-2').html("you have used?");
			$('#email-subject').attr('value', "Budget gear!");
		}
	});
});