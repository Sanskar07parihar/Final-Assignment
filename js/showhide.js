// Shows more or less information when clicked on the view more/ view less link.

$(document).ready(function () {
    $("#show-hide").hide();

    $("#more").click(function () {
        $("#show-hide").slideToggle();
        $("#more").hide();
        $("#less").show();
    });

    $("#less").click(function () {
        $("#show-hide").slideToggle();
        $("#less").hide();
        $("#more").show();
    });
});