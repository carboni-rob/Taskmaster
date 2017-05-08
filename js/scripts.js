$(document).ready(function () {
	$("#addButt").button().button("disable");
	$("#nameInput").change(function() {
	    if($(this).val().length > 1) {
	        $("#addButt").button("enable");
	    } else {
	        $("#addButt").button("disable");
	    }
	});
	$("#nameInput").keypress(function() {
	    if($(this).val().length > 1) {
	        $("#addButt").button("enable");
	    } else {
	        $("#addButt").button("disable");
	    }
	});

	$('#addButt').on('click', function() {
		$("#addButt").button("disable");
	});
})