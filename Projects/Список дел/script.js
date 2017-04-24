 $("#text").on("keydown", function(event) {
     if (event.which == 13) {
        var field  = $("#text").val();
        $(".list").append("<li class='list-group-item added'>" + field + "</li>");
        $("#text").val("");

        $(".added").on("click", function () {
            $(this).remove();
        }); 
         $(".added").on("mouseenter", function () {
            $(this).css({
                backgroundColor:"pink"
            });
         });

        $(".added").on("mouseout", function () {
            $(this).css({
                backgroundColor:"white"
            });
        });

     } 
});

$(".added").on("click", function () {
    $(this).remove();
});

$(".added").on("mouseenter", function () {
    $(this).css({
        backgroundColor:"pink"
    });
});

$(".added").on("mouseout", function () {
    $(this).css({
        backgroundColor:"white"
    });
});
