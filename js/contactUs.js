// Changes backround colors of submit and reset buttons on mouse hover.

$(document).ready(function () {
    $(':submit').css("background-color", "#4CAF50");

    $(':reset').css("background-color", "#d02b2b");

    $(':submit').hover(function () {
        $(this).css("background-color", "#027b07");
    }, function () {
        $(this).css("background-color", "#4CAF50");
    });

    $(':reset').hover(function () {
        $(this).css("background-color", "#b50000");
    }, function () {
        $(this).css("background-color", "#d02b2b");
    });

});