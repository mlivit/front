var adition = adition || {};
adition.srq = adition.srq || [];
adition.srq.push(function(api) {
    api.registerAdfarm("onsite2.stable.ps-tek.de");
    api.configureRenderSlot("bannerSlot").setContentunitId(3880046);
    api.load().completeRendering();
});
adition.srq.push(function(api) {
    api.renderSlot("bannerSlot");
});

//autostart
(function() {
    var section = document.getElementById("component-t1");
    var container = window.parent.document.getElementById("component-T1");
    if (container) {
        container.parentNode.insertBefore(section, container);
        container.style.display = "none";
    }
})();