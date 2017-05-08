/*

* Author: ROBERTO CARBONI

* Assignment: BScH Mobile Development, Digital Skills Academy

* Student ID: STU-00001225 * Date : 2017/05/08

* Ref: SEE INLINE COMMENTS

==========================================================
code online at http://site234.digitalskillsacademy.me/MD2/
==========================================================

*/

$(document).ready(function () {//fires when document is ready

	$("#addButt").button().button("disable");//disables 'Add' button as a default state
	
	$("#nameInput").keypress(function() {//fires for every keystroke in nameInput field
	    if($(this).val().length > 2) {//if field contains more than 2 characters...
	        $("#addButt").button("enable");//...enable 'Add' button
	    } else {
	        $("#addButt").button("disable");//otherwise disable 'Add' button
	    }
	});

	$("#nameInput").change(function() {//fires every time nameInput field changes (for events that do not require keystroke, like pasting or selecting from recent list)
	    if($(this).val().length > 2) {//if field contains more than 2 characters...
	        $("#addButt").button("enable");//...enable 'Add' button
	    } else {
	        $("#addButt").button("disable");//otherwise disable 'Add' button
	    }
	});

	$('#addButt').on('click', function() {//fires after 'Add' button is clicked
		$("#addButt").button("disable");//disable 'Add' button
	});
})