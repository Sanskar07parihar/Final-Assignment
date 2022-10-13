// Shows animation by increasing and decresing the logo size of the compnies when mouse is over the logo.

$(document).ready(function () {

    $("#renault-logo, #kia-logo, #mg-logo").hover(function () {
        $(this).animate({
            width: '170px'
        });
    }, function () {
        $(this).animate({
            width: '150px'
        });
    });
});
