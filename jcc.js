

$(window).scroll(
    {
        previousTop: 0
    }, 
    function () {     
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
        $(".wrapper em").text("Up"); /* optional for demo */
        $(".header").show();
    } else {
        $(".wrapper em").text("Down");
        $(".header").hide();
    }
    this.previousTop = currentTop;
})



$(window).scroll(
    {
        previousTop: 0
    }, 
    function () {     
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
        $(".wrapper em").text("Up"); /* optional for demo */
        $(".dropdown").show();
    } else {
        $(".wrapper em").text("Down");
        $(".dropdown").hide();
    }
    this.previousTop = currentTop;
});