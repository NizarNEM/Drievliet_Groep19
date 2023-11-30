(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-W6PJW3P");

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

src = "https://use.typekit.net/map8qgu.js";
type = "text/javascript";

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
