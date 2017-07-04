(function() {
    var t1, section = document.getElementById("component-t1");
    var container = window.parent.document.getElementById("component-T1");
    t1 = document.getElementById("teaser-1");
    // t1.src = t1.getAttribute("data-src");
    var img = new Image();
    img.src = t1.getAttribute("data-src");
    img.onload = function() {
        t1.src = this.src;
        container.parentNode.removeChild(container);
    }

    if (container) {
        container.parentNode.insertBefore(section, container);
        container.style.display = "none";
    }
})();