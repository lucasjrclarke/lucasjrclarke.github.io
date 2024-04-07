/* function for sticky header from https://stackoverflow.com/questions/73675222/how-to-change-appearance-of-position-sticky-element-only-when-the-user-starts */

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("header--bar").classList.add("sticky-header");
    } else {
        document.getElementById("header--bar").classList.remove("sticky-header");
    }
};