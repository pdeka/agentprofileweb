/*! =========================================================
 *
 * Material Kit PRO - v2.0.0
 *
 * =========================================================
 *
 * Product Page: https://www.creative-tim.com/product/material-kit-pro
 * Available with purchase of license from http://www.creative-tim.com/product/material-kit-pro
 * Copyright 2017 Creative Tim (https://www.creative-tim.com)
 * License Creative Tim (https://www.creative-tim.com/license)
 *
 * ========================================================= */


materialKit = {
    misc: {
        navbar_menu_visible: 0,
        window_width: 0,
        transparent: true,
        colored_shadows: true,
        fixedTop: false,
        navbar_initialized: false,
        isWindow: document.documentMode || /Edge/.test(navigator.userAgent)
    },

    checkScrollForTransparentNavbar: debounce(function() {
        if ($(document).scrollTop() > 50) {
            if (materialKit.misc.transparent) {
                materialKit.misc.transparent = false;
                $('.navbar-color-on-scroll').removeClass('navbar-transparent');
            }
        } else {
            if (!materialKit.misc.transparent) {
                materialKit.misc.transparent = true;
                $('.navbar-color-on-scroll').addClass('navbar-transparent');
            }
        }
    }, 1)
};
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
}
