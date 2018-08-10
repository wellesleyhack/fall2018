$(document).ready(function() {
  $("#friday-toggle").click(function() {
    $('#friday').css("display", "block");
    $('#friday-toggle').css("background-color", "#e77c91");
    $('#saturday').css("display", "none");
    $('#saturday-toggle').css("background-color", "#F97352");
    $('#sunday').css("display", "none");
    $('#sunday-toggle').css("background-color", "#F97352");
  });

  $("#saturday-toggle").click(function() {
    $('#saturday').css("display", "block");
    $('#saturday-toggle').css("background-color", "#e77c91");
    $('#sunday').css("display", "none");
    $('#sunday-toggle').css("background-color", "#F97352");
    $('#friday').css("display", "none");
    $('#friday-toggle').css("background-color", "#F97352");
  });

  $("#sunday-toggle").click(function() {
      $('#sunday').css("display", "block");
      $('#sunday-toggle').css("background-color", "#e77c91");
      $('#friday').css("display", "none");
      $('#friday-toggle').css("background-color", "#F97352");
      $('#saturday').css("display", "none");
      $('#saturday-toggle').css("background-color", "#F97352");
  });
});
