document.addEventListener('DOMContentLoaded', (event) => {
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

(function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
        'gtm.start':
            new Date().getTime(), event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-W6PJW3P');

!function (o, c) {
    var n = c.documentElement, t = " w-mod-";
    n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch")
}(window, document);

try {
    Typekit.load();
} catch (e) {
    console.log(e)
}