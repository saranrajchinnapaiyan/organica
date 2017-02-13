$(document).ready(function(){
    
    /***To find mobile , ipad, desktop****/

        isMobile = {
            Android: function () {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function () {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function () {
                return navigator.userAgent.match(/iPhone|iPod/i);
            },
            Opera: function () {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function () {
                return navigator.userAgent.match(/IEMobile/i);
            },
            ipad: function(){
                return navigator.userAgent.match(/iPad/i);	
            },
            any: function () {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        };
    
    $('.flexslider').flexslider({
        animation: "slide",
        itemWidth: 350,
        itemMargin: 25,
        animationLoop : true,
        slideshow : true,
        pauseOnHover: true,
        start: function(slider){
            $('body').removeClass('loading');
        }
    });
    
    $('ul#slides li').each(function(index, ele){
        var self = this;
        var li = ele;
        $(li).removeClass('article slide_' + index).addClass('article slide_' + index);
    });

    $('.article-preview').find('.col-lg-6').each(function(index, dom){
        var self = this;
        $(dom).removeClass('preview_article_'+ index ).addClass('preview_article_' + index);
    })
   
    
    //Fb Share articles goes here
    $('.sharefb').click(function(){
		FB.ui({
        method: 'feed',link: 'https://www.facebook.com',
		caption:  "Welcome to Food Factory | foodfactory.com", 
		picture: "https://www.alkaseltzer.com/static/media/images/fbshare_colors4.jpg", 
		description: "Can you make brilliant colors out of Alka-Seltzer and a \r\n\r\n head of cabbage? Why yes, yes you can."}, function(response){})
    });
});