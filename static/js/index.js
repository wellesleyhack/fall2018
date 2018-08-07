$(document).ready(function() {
  $("#friday-toggle").click(function() {
    $('#friday').css("display", "block");
    $('#friday-toggle').css("background-color", "#15CBCE");
    $('#saturday').css("display", "none");
    $('#saturday-toggle').css("background-color", "#2f9989");
    $('#sunday').css("display", "none");
    $('#sunday-toggle').css("background-color", "#2f9989");
  });

  $("#saturday-toggle").click(function() {
    $('#saturday').css("display", "block");
    $('#saturday-toggle').css("background-color", "#15CBCE");
    $('#sunday').css("display", "none");
    $('#sunday-toggle').css("background-color", "#2f9989");
    $('#friday').css("display", "none");
    $('#friday-toggle').css("background-color", "#2f9989");
  });

  $("#sunday-toggle").click(function() {
      $('#sunday').css("display", "block");
      $('#sunday-toggle').css("background-color", "#15CBCE");
      $('#friday').css("display", "none");
      $('#friday-toggle').css("background-color", "#2f9989");
      $('#saturday').css("display", "none");
      $('#saturday-toggle').css("background-color", "#2f9989");
  });
});
