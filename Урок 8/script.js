$(".item").on("click", function () {
    $(this).remove();
})

$(".field").on("keydown", function(event) {
    if (event.which == 13) {
        var field = $(".field");
        var text = field.val();
        var block = $("<li></li>");
        block.html(text);
        block.addClass("list-group-item item");
        console.log(text);
        $("ul").append(block);
        field.val("");
    }
})

$(".item").on("mouseenter", function () {
    $(this).css({
        backgroundColor: "#CD5C5C"
    });
})

$(".item").on("mouseout", function () {
    $(this).css({
        backgroundColor: "white"
    });
})