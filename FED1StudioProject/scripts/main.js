$(document).ready(function () {
    //Tables
    $('#classTable1').DataTable();
    $('#classTable2').DataTable();
    $('#classTable3').DataTable();
    $('#classTable4').DataTable();
    $('#classTable5').DataTable();
    $('#classTable6').DataTable();
    //Lightbox
    $(".thumb").on("click", function () {
        
        var imgSrc = $(this).attr("src");

        $("#lightbox-content").html('<img src="' + imgSrc + '" class="img-responsive"/>');

        $("#lightbox-container").fadeIn(500);

        $("#lightbox-container").on("click", function () {
            $(this).fadeOut(500);
        });
    });
});