$(document).ready(function() {
  $("#friday-toggle").click(function() {
    $('#friday').css("display", "block");
    $('#friday-toggle').css("background-color", "#9A2A73");
    $('#saturday').css("display", "none");
    $('#saturday-toggle').css("background-color", "#B13586");
    $('#sunday').css("display", "none");
    $('#sunday-toggle').css("background-color", "#B13586");
  });

  $("#saturday-toggle").click(function() {
    $('#saturday').css("display", "block");
    $('#saturday-toggle').css("background-color", "#9A2A73");
    $('#sunday').css("display", "none");
    $('#sunday-toggle').css("background-color", "#B13586");
    $('#friday').css("display", "none");
    $('#friday-toggle').css("background-color", "#B13586");
  });

  $("#sunday-toggle").click(function() {
      $('#sunday').css("display", "block");
      $('#sunday-toggle').css("background-color", "#9A2A73");
      $('#friday').css("display", "none");
      $('#friday-toggle').css("background-color", "#B13586");
      $('#saturday').css("display", "none");
      $('#saturday-toggle').css("background-color", "#B13586");
  });
});
