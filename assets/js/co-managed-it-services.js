src = "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js";
type = "text/javascript";

type =
  "text/javascript" >
  WebFont.load({
    google: {
      families: [
        "Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic",
        "Poppins:regular,italic,500,600,700,800",
        "Orbitron:regular,700",
      ],
    },
  });
t;
src = "https://use.typekit.net/map8qgu.js";
type = "text/javascript";

try {
  Typekit.load();
} catch (e) {}

type =
  "text/javascript" >
  !(function (o, c) {
    var n = c.documentElement,
      t = " w-mod-";
    (n.className += t + "js"),
      ("ontouchstart" in o ||
        (o.DocumentTouch && c instanceof DocumentTouch)) &&
        (n.className += t + "touch");
  })(window, document);

src = "https://www.google.com/recaptcha/api.js";
type = "text/javascript";

document.addEventListener("DOMContentLoaded", (event) => {
  function setFontSize() {
    if (window.innerWidth <= 1200 && window.innerWidth >= 991) {
      document.body.style.fontSize = window.innerWidth / 1440 + "rem";
    } else {
      if (document.body.style.removeProperty) {
        document.body.style.removeProperty("font-size");
      } else {
        document.body.style.removeAttribute("font-size");
      }
    }
  }
  window.addEventListener("resize", function () {
    setFontSize();
  });
  setFontSize();
});

[js - line - animation];
visibility: hidden;

w == editor[js - line - animation];
visibility: visible;

[js - line - animation].line;
overflow: hidden(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-W6PJW3P");

src =
  "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=642e1e0cec894908466572c7";
type = "text/javascript";

src =
  "https://assets-global.website-files.com/642e1e0cec894908466572c7/js/webflow.acf3f4027.js";
type = "text/javascript";

var d = new Date();
var n = d.getFullYear();
$(".year").text(n);

async;
src = "https://assets.calendly.com/assets/external/widget.js";
type = "text/javascript";

$(".calendly").click(function () {
  Calendly.initPopupWidget({
    url: "https://calendly.com/taylormaguire/discovery-call?hide_gdpr_banner=1",
  });
  return false;
});

setInterval(function () {
  if ($(".w-nav-overlay").css("display") !== "block") {
    $("body").removeClass("no-scroll");
  } else {
    $("body").addClass("no-scroll");
  }
}, 10);

src = "https://unpkg.com/split-type";
src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js";
src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js";

window.addEventListener("DOMContentLoaded", (event) => {
  // Split text into spans
  let typeSplit = new SplitType("[text-split]", {
    types: "words, chars",
    tagName: "span",
  });

  // Link timelines to scroll position
  function createScrollTrigger(triggerElement, timeline) {
    // Reset tl when scroll out of view past bottom of screen
    /*ScrollTrigger.create({
              trigger: triggerElement,
              start: "top bottom",
              onLeaveBack: () => {
                timeline.progress(0);
                timeline.pause();
              }
            });*/
    // Play tl when scrolled into view (60% from top of screen)
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top 60%",
      onEnter: () => timeline.play(),
    });
  }

  $("[hero-slide-up]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), {
      delay: 0.7,
      yPercent: 100,
      duration: 0.2,
      ease: "power1.out",
      stagger: { amount: 0.6 },
    });
    createScrollTrigger($(this), tl);
  });

  $("[hero-paragraph-slide-up]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), {
      delay: 1,
      yPercent: 100,
      duration: 0.2,
      ease: "power1.out",
      stagger: { amount: 0.6 },
    });
    createScrollTrigger($(this), tl);
  });

  $("[letters-slide-up]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), {
      yPercent: 100,
      duration: 0.2,
      ease: "power1.out",
      stagger: { amount: 0.6 },
    });
    createScrollTrigger($(this), tl);
  });

  // Avoid flash of unstyled content
  gsap.set("[text-split]", { opacity: 1 });
});

$(".w-nav-menu").on("click", "a", function () {
  $(".w-nav-button").triggerHandler("tap");
});

$(".menu-button").click(function () {
  var navHeight = $(".page-padding.cc-nav").height();
  var h = window.innerHeight - navHeight.toFixed();

  $(".nav-menu").css("height", h.toString() + "px", "important");
});

$(window).on("beforeunload", function () {
  $("body").hide();
  $(window).scrollTop(0);
});

src = "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js";
type = "text/javascript";

const sliderUpcoming = $(".testimonial-slider");

sliderUpcoming.slick({
  infinite: false,
  centerMode: false,
  slidesToShow: 2.3,
  slidesToScroll: 2,
  autoplay: false,
  autoplaySpeed: 3000,
  dots: false,
  prevArrow: $(".testimonial-slider-arrows .prev"),
  nextArrow: $(".testimonial-slider-arrows .next"),
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 479,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        centerMode: false,
      },
    },
  ],
});
