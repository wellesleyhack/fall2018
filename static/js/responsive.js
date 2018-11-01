$(document).ready(function() {

  if (window.innerWidth <= 1300) {
    $("#dynamic").css("width", "1000px");
  } else {
    $("#dynamic").css("width", "auto");
  }

  if (window.innerWidth <= 1225) {
    $(".join-info").css("width", "200px");
    $(".faq-questions ul li").css("width", "auto");
    $(".faq-questions ul li p").css("width", "auto");
  } else {
    $(".join-info").css("width", "300px");
    $(".faq-questions ul li").css("width", "600px");
    $(".faq-questions ul li p").css("width", "500px");
  }

  if (window.innerWidth <= 1084) {
    $(".countdown_container").css("display", "block");
    $("#head").css("padding-right", "0px");
    $("#head").css("padding-top", "20px");
    $(".join-info").css("width", "300px");
    $(".join-box").css("flex-direction", "column");
    $(".at-whack").hide();
    $("#dynamic").css("padding-left", "0px");
    $("#dynamic").css("width", "550px");
  } else {
    $(".countdown_container").css("display", "flex");
    $("#head").css("padding-right", "100px");
    $("#head").css("padding-top", "0px");
    $(".at-whack").show();
    $(".join-box").css("flex-direction", "row");
    $("#dynamic").css("padding-left", "200px");
  }

  if (window.innerWidth <= 770) {
    $(".join-us").css("margin-top", "0px");
    $(".faq-questions").css("display", "block");
    $(".big-logo").css("margin-top", "0px");
    $("#navbar").css("display", "none");
    $("#dynamic").css("width", "450px");
    $(".have-fun").css("width", "400px");
    $(".platinum__sponsor").css("width", "100%");
    $(".gold__sponsor").css("width", "75%");
    $(".silver__sponsor").css("width", "65%");
    $(".bronze__sponsor").css("width", "55%");
    $(".aqua__sponsor").css("width", "45%");
    $(".sponsor").css("padding", "0px");
  } else {
    $(".have-fun").css("width", "550px");
    $(".join-us").css("margin-top", "-300px");
    $(".faq-questions").css("display", "flex");
    $(".big-logo").css("margin-top", "100px");
    $("#navbar").css("display", "flex");
    $(".platinum__sponsor").css("width", "65%");
    $(".silver__sponsor").css("width", "35%");
    $(".bronze__sponsor").css("width", "20%");
    $(".aqua__sponsor").css("width", "15%");
    $(".sponsor").css("padding", "20px");
  }

  if (window.innerWidth <= 440) {
    $(".day-toggle").css("font-size", "0rem");
    $(".have-fun").css("width", "250px");
    $("#dynamic").css("width", "300px");
  } else {
    $(".day-toggle").css("font-size", "1rem");
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
      $(".faq-questions ul li").css("width", "auto");
      $(".faq-questions ul li p").css("width", "auto");
    } else {
      $(".join-info").css("width", "300px");
      $(".faq-questions ul li").css("width", "600px");
      $(".faq-questions ul li p").css("width", "500px");
    }

    if (window.innerWidth <= 1084) {
      $(".countdown_container").css("display", "block");
      $("#head").css("padding-right", "0px");
      $("#head").css("padding-top", "20px");
      $(".join-info").css("width", "300px");
      $(".join-box").css("flex-direction", "column");
      $(".at-whack").hide();
      $("#dynamic").css("padding-left", "0px");
      $("#dynamic").css("width", "550px");
    } else {
      $(".countdown_container").css("display", "flex");
      $("#head").css("padding-right", "100px");
      $("#head").css("padding-top", "0px");
      $(".at-whack").show();
      $(".join-box").css("flex-direction", "row");
      $("#dynamic").css("padding-left", "200px");
    }

    if (window.innerWidth <= 770) {
      $(".join-us").css("margin-top", "0px");
      $(".faq-questions").css("display", "block");
      $(".big-logo").css("margin-top", "0px");
      $("#navbar").css("display", "none");
      $("#dynamic").css("width", "450px");
      $(".have-fun").css("width", "400px");
      $(".platinum__sponsor").css("width", "100%");
      $(".gold__sponsor").css("width", "75%");
      $(".silver__sponsor").css("width", "65%");
      $(".bronze__sponsor").css("width", "55%");
      $(".aqua__sponsor").css("width", "45%");
      $(".sponsor").css("padding", "0px");
    } else {
      $(".have-fun").css("width", "550px");
      $(".join-us").css("margin-top", "-300px");
      $(".faq-questions").css("display", "flex");
      $(".big-logo").css("margin-top", "100px");
      $("#navbar").css("display", "flex");
      $(".platinum__sponsor").css("width", "65%");
      $(".silver__sponsor").css("width", "35%");
      $(".bronze__sponsor").css("width", "20%");
      $(".aqua__sponsor").css("width", "15%");
      $(".sponsor").css("padding", "20px");
    }

    if (window.innerWidth <= 440) {
      $(".day-toggle").css("font-size", "0rem");
      $(".have-fun").css("width", "250px");
      $("#dynamic").css("width", "300px");
    } else {
      $(".day-toggle").css("font-size", "1rem");
    }

    if (window.innerWidth <= 330) {
      $(".have-fun").css("width", "175px");
      $("#dynamic").css("width", "175px");
      $(".join-info").css("width", "175px");
    }

  });
});
