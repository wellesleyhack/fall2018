$(document).ready(function() {

  if (window.innerWidth <= 1225 && window.innerWidth > 990 || window.innerWidth < 760) {
    $(".apply-now").css("width", "200px");
    $(".join-info").css("width", "200px");
    $(".join-us").css("margin-left", "auto");
    $(".join-title").css("margin-left", "auto");
  }

  if (window.innerWidth <= 990 && window.innerWidth >= 760) {
    $(".apply-now").css("width", "200px");
    $(".join-info").css("width", "200px");
    $(".join-us").css("margin-left", "-80px");
    $(".join-title").css("margin-left", "80px");
  }

  if (window.innerWidth > 1225) {
    $(".apply-now").css("width", "300px");
    $(".join-info").css("width", "300px");
    $(".join-us").css("margin-left", "auto");
    $(".join-title").css("margin-left", "auto");
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
    $(".big-logo").css("margin-top", "0px");
  } else {
    $(".have-fun").css("width", "600px");
    $(".join-us").css("margin-top", "-300px");
    $(".faq-questions").css("display", "flex");
    $(".big-logo").css("margin-top", "100px");
  }

  if (window.innerWidth <= 400) {
    $(".have-fun").css("width", "250px");
  }

  $( window ).resize(function() {

    if (window.innerWidth <= 1225 && window.innerWidth > 990 || window.innerWidth <= 760) {
      $(".apply-now").css("width", "200px");
      $(".join-info").css("width", "200px");
      $(".join-us").css("margin-left", "auto");
      $(".join-title").css("margin-left", "auto");
    }

    if (window.innerWidth <= 990 && window.innerWidth > 760) {
      $(".apply-now").css("width", "200px");
      $(".join-info").css("width", "200px");
      $(".join-us").css("margin-left", "-80px");
      $(".join-title").css("margin-left", "80px");
    }

    if (window.innerWidth > 1225) {
      $(".apply-now").css("width", "300px");
      $(".join-info").css("width", "300px");
      $(".join-us").css("margin-left", "auto");
      $(".join-title").css("margin-left", "auto");
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
      $(".big-logo").css("margin-top", "0px");
    } else {
      $(".have-fun").css("width", "600px");
      $(".join-us").css("margin-top", "-300px");
      $(".faq-questions").css("display", "flex");
      $(".big-logo").css("margin-top", "100px");
    }

    if (window.innerWidth <= 400) {
      $(".have-fun").css("width", "250px");
    }

  });
});
