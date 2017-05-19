
jQuery(document).ready(function() {

    /*
        Background slideshow
    */
    $('.coming-soon').backstretch([
        "assets/img/backgrounds/1.jpg", 
        "assets/img/backgrounds/2.jpg",
        "assets/img/backgrounds/3.jpg",
        "assets/img/backgrounds/strawberry-detailed-article-banner.jpg",
        "assets/img/backgrounds/stick_05.jpg",
        "assets/img/backgrounds/slider_01.jpg",
        "assets/img/backgrounds/flexlslider_thumb_gojiberry.jpg",
        "assets/img/backgrounds/cherry-detailed-article-banner.jpg",
    ], {duration: 3000, fade: 750});

    /*
	    Countdown initializer
	*/
	var now = new Date();
	var countTo = 7 * 24 * 60 * 60 * 1000 + now.valueOf();    
	$('.timer').countdown(countTo, function(event) {
		$(this).find('.days').text(event.offset.totalDays);
		$(this).find('.hours').text(event.offset.hours);
		$(this).find('.minutes').text(event.offset.minutes);
		$(this).find('.seconds').text(event.offset.seconds);
	});

    /*
        Tooltips
    */
    $('.social a').tooltip();

    /*
        Subscription form
    */
    $('.subscribe form').submit(function(e) {
    	e.preventDefault();
        var postdata = $('.subscribe form').serialize();
        $.ajax({
            type: 'POST',
            url: 'assets/subscribe.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {
                if(json.valid == 0) {
                    $('.success-message').hide();
                    $('.error-message').hide();
                    $('.error-message').html(json.message);
                    $('.error-message').fadeIn();
                }
                else {
                    $('.error-message').hide();
                    $('.success-message').hide();
                    $('.subscribe form').hide();
                    $('.success-message').html(json.message);
                    $('.success-message').fadeIn();
                }
            }
        });
    });

});
