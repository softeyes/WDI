$(function () {
    // keypress() - EVIL!
    $("html").keydown(function (event) {
        // Console will tell you which key was pressed
        console.log(event.which);
    })

    // Move the blue box to the right
    
    var ARROW_RIGHT = 39;

    $("html").keydown(function (event) {
        if (event.which == ARROW_RIGHT) {
            $(".blue-box").stop().animate({
                "margin-left": "+=10px"
            }, 500);
        };
    });
});
