/* Checkbox like buttons */
$(document).ready(function() {
	$(".yt-toggle-buttons > .yt-button").click(function() {
	    $(this).toggleClass("active");
	});
});
/* Single toggle */
$(document).ready(function() {
	$(".yt-button.yt-toggle-button").click(function() {
	    $(this).toggleClass("active");
	});
});
/* Radio like buttons */
$(document).ready(function() {
	$(".yt-radio-buttons > .yt-button").click(function() {
	    $(this).siblings(".yt-button").removeClass("active");
	    $(this).addClass("active");
	});
});