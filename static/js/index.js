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

  if (window.innerWidth <= 1225) {
    $(".apply-now").css("width", "200px");
    $(".join-info").css("width", "200px");
  } else {
    $(".apply-now").css("width", "300px");
    $(".join-info").css("width", "300px");
  }

  if (window.innerWidth <= 1084) {
    $(".at-whack").hide();
  } else {
    $(".at-whack").show();
  }

  if (window.innerWidth <= 770) {
    $(".have-fun").css("width", "350px");
    $(".join-us").css("margin-top", "0px");
    $(".faq-questions").css("display", "block");
  } else {
    $(".have-fun").css("width", "600px");
    $(".join-us").css("margin-top", "-300px");
    $(".faq-questions").css("display", "flex");
  }

  if (window.innerWidth <= 400) {
    $(".have-fun").css("width", "250px");
  } else {
  }

  $( window ).resize(function() {

    if (window.innerWidth <= 1225) {
      $(".apply-now").css("width", "200px");
      $(".join-info").css("width", "200px");
    } else {
      $(".apply-now").css("width", "300px");
      $(".join-info").css("width", "300px");
    }

    if (window.innerWidth <= 1084) {
      $(".at-whack").hide();
    } else {
      $(".at-whack").show();
    }

    if (window.innerWidth <= 770) {
      $(".have-fun").css("width", "350px");
      $(".join-us").css("margin-top", "0px");
      $(".faq-questions").css("display", "block");
    } else {
      $(".have-fun").css("width", "600px");
      $(".join-us").css("margin-top", "-300px");
      $(".faq-questions").css("display", "flex");
    }

    if (window.innerWidth <= 400) {
      $(".have-fun").css("width", "250px");
    } else {
    }

  });
});
