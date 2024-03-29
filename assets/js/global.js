(function ($) {
  "use strict";
  function navigation() {
    var links = $(".navbar a, .nav a");
    $.each(links, function (key, va) {
      if (va.href === document.URL) {
        $(this).parents("li").addClass("active");
      }
    });
  }
  lozad(".lozad", {
    load: function (el) {
      el.src = el.dataset.src;
    },
  }).observe();
  function popupGallery() {
    $(".popup-gallery").magnificPopup({
      delegate: "img",
      type: "image",
      mainClass: "mfp-with-zoom mfp-img-mobile",
      fixedContentPos: false,
      gallery: {
        enabled: true,
      },
      zoom: {
        enabled: true,
        duration: 300,
      },
      callbacks: {
        elementParse: function (qw) {
          qw.src = qw.el.attr("src");
        },
      },
    });
    $(".iframe-trigger, #iframe-trigger").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  }
  window.addEventListener("mousewheel", function (event) {}, {
    passive: true,
  });
  $(document).ready(function () {
    navigation();
    AOS.init({
      offset: 200,
      duration: 1500,
      once: true,
    });
    if ($(".timer").length) {
      $(".timer").countTo();
    }
    $("#getting-started").countdown("2024/03/03", function (event) {
      var $this = $(this);
      $this.html(
        event.strftime(
          '<span class="countdown_value"> %m <span class="countdown_lable"> Months  </span></span> <span class="countdown_value"> %d <span class="countdown_lable"> Days </span> </span> <span class="countdown_value"> %H <span class="countdown_lable"> Hours </span></span> <span class="countdown_value"> %M <span class="countdown_lable"> Minutes </span></span> <span class="countdown_value"> %S <span class="countdown_lable"> Seconds </span></span>'
        )
      );
    });
    popupGallery();
  });
})(jQuery);
