$(document).ready(function() {
    // Close open dropdown slider/s by clicking elsewhwere on page
    $(document).on("click", function (e) {
      $(".yt-button-group >.yt-dropdown-menu").fadeOut("fast");
      $(".dropdown-toggle").removeClass("active");
    });
    // Toggle the dropdown menus
    $(".dropdown-toggle").on("click", function(e) {
      $(".yt-button-group >.yt-dropdown-menu").fadeOut("fast");
      $(".dropdown-toggle").removeClass("active");
      $(this).parent().find(".yt-dropdown-menu").fadeIn("fast");
      $(this).addClass("active");
      e.stopPropagation();
    });
});
