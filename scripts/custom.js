$(document).ready(function () {
    var Home = {};
    (function(jQuery){
        /***To find mobile , ipad, desktop****/
        isMobile = {
            Android: function () {
                return navigator.userAgent.match(/Android/i);
            }
            , BlackBerry: function () {
                return navigator.userAgent.match(/BlackBerry/i);
            }
            , iOS: function () {
                return navigator.userAgent.match(/iPhone|iPod/i);
            }
            , Opera: function () {
                return navigator.userAgent.match(/Opera Mini/i);
            }
            , Windows: function () {
                return navigator.userAgent.match(/IEMobile/i);
            }
            , ipad: function () {
                return navigator.userAgent.match(/iPad/i);
            }
            , any: function () {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        };

    }(this));

    Home.isMobile = isMobile;

    $('.flexslider').flexslider({
        animation: "slide"
        , itemWidth: 250
        , itemMargin: 25
        , animationLoop: true
        , slideshow: true
        , pauseOnHover: true
        , start: function (slider) {
            $('body').removeClass('loading');
        }
    });

    $('ul#slides li').each(function (index, ele) {
        var self = this;
        var li = ele;
        $(li).removeClass('article slide_' + index).addClass('article slide_' + index);
    });
    $('.article-preview').find('.col-lg-6').each(function (index, dom) {
        var self = this;
        $(dom).removeClass('preview_article_' + index).addClass('preview_article_' + index);
    })
    
    var d = $('.detailed_article .right .single-news, .right h3');
    (isMobile.ipad()) ? $(d).addClass('custom-container'): $(d).removeClass('custom-container');
    
    //Accordion for recommended articles in detailed pages
    $(".tabs").fadeIn(1000);
        $("a").click(function(){
        $(".menu").slideUp();
            if ($(this).next().is(":hidden")){
                $(this).next().slideDown(300)
            }
    });
    //Fb Share articles goes here
    $('.sharefb').click(function () {
        FB.ui({
            method: 'feed'
            , link: 'https://www.facebook.com'
            , caption: "Welcome to Food Factory | foodfactory.com"
            , picture: "https://www.alkaseltzer.com/static/media/images/fbshare_colors4.jpg"
            , description: "Can you make brilliant colors out of Alka-Seltzer and a \r\n\r\n head of cabbage? Why yes, yes you can."
        }, function (response) {})
    });

    Home.tabAccordionInfo = function(){
        var self = this;
        var tabinfo = {};
        tabinfo.grape = "Black grapes are delicious, Fresh black grapes are low in calories, with a 1-cup serving containing only 62 calories and less than 1/2 gram of total fat. While you can eat the grapes whole and raw, making a fresh juice from them by blending 1 cup of grapes with 1/2 cup of fresh water will give you 1 cup of fresh juice that is lower in calories than a commercially produced grape juice, even if unsweetened...";
        tabinfo.apple = "An apple won’t replace your toothbrush, but biting and chewing an apple stimulates...";
        tabinfo.orange = "Oranges are a good source of several vitamins and minerals, especially vitamin C, thiamin, folate and potassium. Oranges are an excellent source of vitamin C. One large orange can provide over 100% of the daily recommended intake. Thiamin: One of the B-vitamins, also called vitamin B1. Found in a wide variety of foods";
        tabinfo.kiwi = "The fiber and potassium in kiwis support heart health. An increase in potassium intake along with a decrease in sodium intake is the most important dietary change that a person can make to reduce their risk of cardiovascular disease...";
        tabinfo.mango = "Mangoes are a tropical fruit containing soluble fiber and a wide range of antioxidants, as well as high amounts of vitamin A (from beta-carotene) and vitamin C. They are relatively low in calories and have glycemic index values ranging from low to medium, which means that they should not cause major spikes in blood sugar levels...";
        tabinfo.fig = "Figs are one of the earliest fruits grown by man. Though figs are not available throughout the year, dried figs (popularly known as anjeer in India) are. Not only is dried fig tasty to eat, it has numerous health benefits to offer as well...";

        return tabinfo;
    };


    window.Home = Home;
    //set accordion tab preview content
    $('.detailed_article .right').find('.menu').each(function(i,val){
        var self = this;
        var tabContents = window.Home.tabAccordionInfo();
        var fruitName = $(val).find('p').data('fruit');
        $.each(tabContents, function(i,v){
            if(fruitName == i)
                $(val).find('li p').text(v);
        });


    });
});

