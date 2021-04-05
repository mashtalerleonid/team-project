$("a.scrollto").click(function() {
    const elementClick = $(this).attr("href")
    const destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
    }, 500);
    return false;
 });