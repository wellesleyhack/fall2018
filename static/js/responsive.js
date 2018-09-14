$(document).ready(function() {

  if (window.innerWidth <= 1300) {
    $("#dynamic").css("width", "1000px");
  } else {
    $("#dynamic").css("width", "auto");
  }

  if (window.innerWidth <= 1225) {
    $(".join-info").css("width", "200px");
  } else {
    $(".join-info").css("width", "300px");
  }

  if (window.innerWidth > 1225) {
    // $(".faq-questions ul li").css("width", "600px");
    // $(".faq-questions ul li p").css("width", "500px");
  }

  if (window.innerWidth <= 1084) {
    $(".join-info").css("width", "300px");
    $(".join-box").css("flex-direction", "column");
    $(".at-whack").hide();
    $("#dynamic").css("padding-left", "0px");
    $("#dynamic").css("width", "550px");
  } else {
    $(".at-whack").show();
    $(".join-box").css("flex-direction", "row");
    $("#dynamic").css("padding-left", "200px");
  }

  if (window.innerWidth <= 770) {
    $(".join-us").css("margin-top", "0px");
    $(".faq-questions").css("display", "block");
    $(".big-logo").css("margin-top", "0px");
    $("#navbar").css("display", "none");
    // $(".faq-questions ul li").css("width", "auto");
    // $(".faq-questions ul li p").css("width", "auto");
  } else {
    $(".join-us").css("margin-top", "-300px");
    $(".faq-questions").css("display", "flex");
    $(".big-logo").css("margin-top", "100px");
    $("#navbar").css("display", "flex");
  }

  if (window.innerWidth <= 440) {
    $(".have-fun").css("width", "250px");
    $("#dynamic").css("width", "300px");
  } else {
    $(".have-fun").css("width", "550px");
  }

  if (window.innerWidth <= 330) {
    $(".have-fun").css("width", "175px");
    $("#dynamic").css("width", "175px");
    $(".join-info").css("width", "175px");
  }

  $( window ).resize(function() {

    if (window.innerWidth <= 1300) {
      $("#dynamic").css("width", "1000px");
    } else {
      $("#dynamic").css("width", "auto");
    }

    if (window.innerWidth <= 1225) {
      $(".join-info").css("width", "200px");
      // $(".faq-questions ul li").css("width", "600px");
      // $(".faq-questions ul li p").css("width", "500px");
    } else {
      $(".join-info").css("width", "300px");
      // $(".faq-questions ul li").css("width", "600px");
      // $(".faq-questions ul li p").css("width", "500px");
    }

    if (window.innerWidth <= 1084) {
      $(".join-info").css("width", "300px");
      $(".join-box").css("flex-direction", "column");
      $(".at-whack").hide();
      $("#dynamic").css("padding-left", "0px");
      $("#dynamic").css("width", "550px");
    } else {
      $(".at-whack").show();
      $(".join-box").css("flex-direction", "row");
      $("#dynamic").css("padding-left", "200px");
    }

    if (window.innerWidth <= 770) {
      $(".join-us").css("margin-top", "0px");
      $(".faq-questions").css("display", "block");
      $(".big-logo").css("margin-top", "0px");
      $("#navbar").css("display", "none");
      // $(".faq-questions ul li").css("width", "auto");
      // $(".faq-questions ul li p").css("width", "auto");
    } else {
      $(".join-us").css("margin-top", "-300px");
      $(".faq-questions").css("display", "flex");
      $(".big-logo").css("margin-top", "100px");
      $("#navbar").css("display", "flex");
    }

    if (window.innerWidth <= 440) {
      $(".have-fun").css("width", "250px");
      $("#dynamic").css("width", "300px");
    } else {
      $(".have-fun").css("width", "550px");
    }

    if (window.innerWidth <= 330) {
      $(".have-fun").css("width", "175px");
      $("#dynamic").css("width", "175px");
      $(".join-info").css("width", "175px");
    }

  });
});
