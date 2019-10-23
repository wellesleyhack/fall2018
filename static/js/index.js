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
    $('#saturday-toggle').css("background-color", "rgba(21,203,206,1)");
    $('#sunday').css("display", "none");
    $('#sunday-toggle').css("background-color", "rgba(35,117,124,1)");
    $('#friday').css("display", "none");
    $('#friday-toggle').css("background-color", "#F97352");
  });

  $("#sunday-toggle").click(function() {
      $('#sunday').css("display", "block");
      $('#sunday-toggle').css("background-color", "rgba(21,203,206,1)");
      $('#friday').css("display", "none");
      $('#friday-toggle').css("background-color", "#F97352");
      $('#saturday').css("display", "none");
      $('#saturday-toggle').css("background-color", "rgba(35,117,124,1)");
  });
});
