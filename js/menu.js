// Gives a nice color effect when mouse is over menu options by adding and removing class.

$(document).ready(function () {
    $("#home").hover(function () {
        $(this).addClass("menu-over");
        $(this).removeClass("menu-out");
    }, function () {
        $(this).addClass("menu-out");
        $(this).removeClass("menu-over");
    });

    $("#contactUs").hover(function () {
        $(this).addClass("menu-over");
        $(this).removeClass("menu-out");
    }, function () {
        $(this).addClass("menu-out");
        $(this).removeClass("menu-over");
    });
});