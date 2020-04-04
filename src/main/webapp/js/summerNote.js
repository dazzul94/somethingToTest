var call_host = $(location).attr('origin')
var context_path = '';

$(document).ready(function() {
	mainHandler.init();
});

var mainHandler = {
	init: function() {
		summerNote.init();
	}
}

var summerNote = {
	init: function() {
		$('#summernote').summernote();
	}
}

$(window).resize(function() {

});