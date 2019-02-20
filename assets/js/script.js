$(".page").children().each(function (i, ele) {
    // console.log(ele);
    $(ele).attr("data-aos", "fade-up");
});


$(document).ready(function () {
    AOS.init({
        duration: 1200,
    })
});