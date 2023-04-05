$(document).ready(function () {
  $(".menu").click(function () {
    $(".navbar").toggle();
    $(".menu .fa-bars").toggleClass("fa-times");
    $("section").toggleClass("nav-toggle");
  });

  $(window).on("load scroll", function () {
    $(".navbar").hide();
    $(".menu .fa-bars").removeClass("fa-times");
    $("section").removeClass("nav-toggle");
  });

  $("section").each(function () {
    let height = $(this).height();
    let offset = $(this).offset().top - 200;
    let top = $(window).scrollTop();
    let id = $(this).attr("id");

    if (top >= offset && top < offset + height) {
      $(".navbar ul li a").removeClass("active");
      $(".navbar").find(`[href="#${id}"]`).addClass("active");
    }
  });

  $(".home-slider").owlCarousel({
    items: 1,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 8000,
    loop: true,
  });

  $(".small-image img").click(function () {
    $(this).addClass("image-active").siblings().removeClass("image-active");
    let image = $(this).attr("src");
    $(".big-image img").attr("src", image);
  });

  $(".gallery .btn").click(function () {
    let filter = $(this).attr("data-filter");
    if (filter == "special") {
      $(".gallery .box").show(200);
    } else {
      $(".gallery .box")
        .not("." + filter)
        .hide(200);
      $(".gallery .box")
        .filter("." + filter)
        .show(200);
    }

    $(this).addClass("button-active").siblings().removeClass("button-active");
  });
});
