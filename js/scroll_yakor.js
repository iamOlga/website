$(document).ready(function(){
    $("#menu").on("click",".local_href", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href');
        var top2 = $(id).offset().top;
        $('body,html').animate({scrollTop: top2}, 1200);
    });
});
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1800);
    });
});