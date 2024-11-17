(function ($) {
  "use strict";
  // TOP Menu Sticky
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $("#sticky-header").removeClass("sticky");
      $("#back-top").fadeIn(500);
    } else {
      $("#sticky-header").addClass("sticky");
      $("#back-top").fadeIn(500);
    }
  });

  $(document).ready(function () {
    // mobile_menu
    var menu = $("ul#navigation");
    if (menu.length) {
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: "+",
        openedSymbol: "-",
      });
    }
    // blog-menu
    // $('ul#blog-menu').slicknav({
    //   prependTo: ".blog_menu"
    // });

    // review-active
    $(".slider_active").owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      autoplay: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      nav: false,
      dots: false,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          dots: false,
        },
        767: {
          items: 1,
          dots: false,
        },
        992: {
          items: 1,
        },
      },
    });
    // review-active
    $(".testmonial_active").owlCarousel({
      loop: true,
      margin: 30,
      items: 1,
      autoplay: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      nav: true,
      dots: false,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        767: {
          items: 1,
          nav: false,
        },
        992: {
          items: 1,
        },
        1200: {
          items: 1,
        },
        1500: {
          items: 1,
        },
      },
    });

    // for filter
    // init Isotope
    var $grid = $(".grid").isotope({
      itemSelector: ".grid-item",
      // percentPosition: true,
      gutter: 10,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: 1,
        // gutter: 30
      },
    });

    // filter items on button click
    $(".portfolio-menu").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });

    //for menu active class
    $(".portfolio-menu button").on("click", function (event) {
      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
      event.preventDefault();
    });

    // wow js
    new WOW().init();

    // counter
    $(".counter").counterUp({
      delay: 10,
      time: 10000,
    });

    /* magnificPopup img view */
    $(".popup-image").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });

    /* magnificPopup img view */
    $(".img-pop-up").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });

    /* magnificPopup video view */
    $(".popup-video").magnificPopup({
      type: "iframe",
    });

    // scrollIt for smoth scroll
    $.scrollIt({
      upKey: 38, // key code to navigate to the next section
      downKey: 40, // key code to navigate to the previous section
      easing: "linear", // the easing function for animation
      scrollTime: 600, // how long (in ms) the animation takes
      activeClass: "active", // class given to the active nav element
      onPageChange: null, // function(pageIndex) that is called when page is changed
      topOffset: 0, // offste (in px) for fixed top navigation
    });

    // scrollup bottom to top
    $.scrollUp({
      scrollName: "scrollUp", // Element ID
      topDistance: "4500", // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: "fade", // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '<i class="fa fa-angle-double-up"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    // blog-page

    //brand-active
    $(".brand-active").owlCarousel({
      loop: true,
      margin: 30,
      items: 1,
      autoplay: true,
      nav: false,
      dots: false,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        767: {
          items: 4,
        },
        992: {
          items: 7,
        },
      },
    });

    // blog-dtails-page

    //project-active
    $(".project-active").owlCarousel({
      loop: true,
      margin: 30,
      items: 1,
      // autoplay:true,
      navText: [
        '<i class="Flaticon flaticon-left-arrow"></i>',
        '<i class="Flaticon flaticon-right-arrow"></i>',
      ],
      nav: true,
      dots: false,
      // autoplayHoverPause: true,
      // autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        767: {
          items: 1,
          nav: false,
        },
        992: {
          items: 2,
          nav: false,
        },
        1200: {
          items: 1,
        },
        1501: {
          items: 2,
        },
      },
    });

    if (document.getElementById("default-select")) {
      $("select").niceSelect();
    }

    //about-pro-active
    $(".details_active").owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      // autoplay:true,
      navText: [
        '<i class="ti-angle-left"></i>',
        '<i class="ti-angle-right"></i>',
      ],
      nav: true,
      dots: false,
      // autoplayHoverPause: true,
      // autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        767: {
          items: 1,
          nav: false,
        },
        992: {
          items: 1,
          nav: false,
        },
        1200: {
          items: 1,
        },
      },
    });
  });
  //------- Mailchimp js --------//
  function mailChimp() {
    $("#mc_embed_signup").find("form").ajaxChimp();
  }
  mailChimp();

  // Search Toggle
  $("#search_input_box").hide();
  $("#search").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });
  $("#close_search").on("click", function () {
    $("#search_input_box").slideUp(500);
  });
  // Search Toggle
  $("#search_input_box").hide();
  $("#search_1").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });

  let secondsRemaining = 3; // Set initial seconds
  const countdownElement = $("#subtile-text b"); // Target the `<b>` element for the countdown
  const preloaderSection = $("#template-three-preloader"); // The current section to hide
  const navbarSection = $("#navbar"); // The next section to show
  const homeSection = $("#home");
  const gallerySection = $("#gallery");
  const programSection = $("#program");
  const locationSection = $("#location");
  const greetingsSection = $("#greetings");

  // Initially hide the navbar section
  // navbarSection.hide();

  // Update the countdown every second
  const interval = setInterval(() => {
    secondsRemaining--; // Decrease the seconds
    countdownElement.text(secondsRemaining); // Update the text in the countdown

    if (secondsRemaining <= 0) {
      clearInterval(interval); // Stop the interval when it reaches 0

      // Animate the hide of the preloader section
      preloaderSection.fadeOut(1000, function () {
        // Once the above section is hidden, show the navbar section
        navbarSection.fadeIn(1000); // Smoothly show the next section
        homeSection.fadeIn(1000);
        gallerySection.fadeIn(1000);
        programSection.fadeIn(1000);
        locationSection.fadeIn(1000);
        greetingsSection.fadeIn(1000);

        navbarSection.removeClass("hide-body");
        homeSection.removeClass("hide-body");
        gallerySection.removeClass("hide-body");
        gallerySection.removeClass("hide-gallery");
        programSection.removeClass("hide-body");
        locationSection.removeClass("hide-body");
        greetingsSection.removeClass("hide-body");

        navbarSection.addClass("show-body");
        homeSection.addClass("show-body");
        gallerySection.addClass("show-body");
        gallerySection.addClass("show-gallery");
        programSection.addClass("show-body");
        locationSection.addClass("show-body");
        greetingsSection.addClass("show-body");
      });
    }
  }, 1000); // Repeat every second

  // Set the target date
  const targetDate = new Date("January 26, 2025 00:00:00").getTime();

  // Function to update the countdown
  function updateCountdown() {
    const now = new Date().getTime(); // Get current time
    const timeRemaining = targetDate - now; // Calculate remaining time

    if (timeRemaining >= 0) {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      // Update the countdown fields
      $("#clock .single_countdown:nth-child(1) h3").text(days);
      $("#clock .single_countdown:nth-child(2) h3").text(hours);
      $("#clock .single_countdown:nth-child(3) h3").text(minutes);
      $("#clock .single_countdown:nth-child(4) h3").text(seconds);
    } else {
      // When the countdown is over
      clearInterval(countdownInterval);
      // When the countdown ends, show 0 in all fields
      $("#clock .single_countdown:nth-child(1) h3").text(0);
      $("#clock .single_countdown:nth-child(2) h3").text(0);
      $("#clock .single_countdown:nth-child(3) h3").text(0);
      $("#clock .single_countdown:nth-child(4) h3").text(0);

      // Update the title to "It's a Wedding Day"
      $(".section_title h3").text("Hooray! It’s a Wedding Day");
    }
  }

  // Call the function every second
  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown(); // Initial call to avoid delay

  const urlParams = new URLSearchParams(window.location.search);
  const number = urlParams.get("n");

  // Default to "Dear" if number is not in the URL
  let guestName = "Dear";

  if (number) {
    // Fetch the names from the JSON file
    $.getJSON("names.json", function (data) {
      // Check if the number exists in the JSON data
      if (data[number]) {
        guestName = data[number];
      }
      // Set the guest name in the HTML
      $("#guest-name-main-page").text(guestName);
      $("#guest-name-second-page").text(guestName);
    });
  } else {
    $("#guest-name-main-page").text(guestName);
    $("#guest-name-second-page").text(guestName);
  }
})(jQuery);
