//filter controls
$(function() {
  $(".filter-links-group li").click(function() {
    $(".filter-links-group li").removeClass("active");
    $(this).addClass("active");
  });
});
