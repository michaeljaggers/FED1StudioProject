$(document).ready(function () {
    $('#myTable').DataTable();

    $(".thumb").on("click", function () {
        
        var imgSrc = $(this).attr("src");

        $("#lightbox-content").html('<img src="' + imgSrc + '" class="img-responsive"/>');

        $("#lightbox-container").fadeIn(500);

        $("#lightbox-container").on("click", function () {
            $(this).fadeOut(500);
        });
    });
});