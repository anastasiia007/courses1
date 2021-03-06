$(document).ready(function() {
  // add active class to clicked nav item
  $(".header__nav a").click(function(event) {
    event.preventDefault();
    $(".header__nav a").removeClass("active");
    $(this).addClass("active");
  });

  // Slow scroll from nav item to current section
  $(".header__nav a, .content__btn-next, .talk__btn").click(function(event) {
    event.preventDefault();
    let id = $(this).attr("href");
    let top = $(id).offset().top;
    let headerHeight = $(".header").height();
    let isHeaderSticky = $(".header").hasClass("header--sticky");
    let scrollTop = isHeaderSticky
      ? top - headerHeight
      : top - headerHeight + 40;
    $("body, html").animate({ scrollTop }, 700);
  });

  // sticky header
  if ($(".header").length) {
    let renderHeader = function() {
      const HEADER = $(".header");
      let headerHeight = HEADER.height();
      let scrollTop = $(window).scrollTop();
      if (scrollTop > headerHeight) {
        HEADER.addClass("header--sticky");
      } else {
        HEADER.removeClass("header--sticky");
      }
    };
    renderHeader();
    $(window).scroll(function() {
      renderHeader();
    });
  }

  // change navigation active class on scroll
  function onScroll(event) {
    let scrollPos = $(document).scrollTop();
    $(".header__nav a").each(function() {
      let currLink = $(this);
      let refElement = $(currLink.attr("href"));
      if (
        refElement.position().top - 60 <= scrollPos &&
        refElement.position().top + refElement.height() + 170 > scrollPos
      ) {
        $(".header__nav a").removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    });
  }
  $(document).on("scroll", onScroll);

  // show media header navigation
  $(".header__nav-btn").click(function() {
    $(".header__nav").toggleClass("header__nav--show");
    $(this).toggleClass("is-active");
  });

  //back to top
  if ($("#button-up").length) {
    let scrollTrigger = 300, // px
      backToTop = function() {
        let scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $("#button-up").addClass("is-visible");
        } else {
          $("#button-up").removeClass("is-visible");
        }
      };
    backToTop();
    $(window).on("scroll", function() {
      backToTop();
    });
    $("#button-up").on("click", function(e) {
      e.preventDefault();
      $("html,body").animate(
        {
          scrollTop: 0
        },
        1000
      );
    });
  }

  //filter controls
  $(function() {
    $(".filter-links-group li").click(function() {
      $(".filter-links-group li").removeClass("active");
      $(this).addClass("active");
    });
  });

  //Masonry
  $(".grid").masonry({
    // options
    itemSelector: ".grid-item",
    //columnWidth: ".grid-sizer",
    // do not use .grid-sizer in layout
    percentPosition: true,
    horizontalOrder: true,
    transitionDuration: "1.0s"
  });

  // init Isotope
  var $grid = $(".grid").isotope({
    // options
  });
  // filter items on li click
  $(".filter-links-group").on("click", "li", function() {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });

  // slick-slider
  $("#team__slider").slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true
  });

  $("#testimonials__slider").slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true
  });

  $(function() {
    $(".team__item-description").slimScroll({
      height: "250px",
      color: "#19bd9a"
    });
  });
});
