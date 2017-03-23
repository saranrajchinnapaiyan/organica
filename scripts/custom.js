$(document).ready(function () {

    (function(global){

        function Home(){
            //constructor
        }

        /***To find mobile , ipad, desktop****/
        Home.prototype.isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            ipad: function() {
                return navigator.userAgent.match(/iPad/i);
            },
            any: function() {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        };

        Home.prototype.setFlexslider = function() {
            $('.flexslider').flexslider({
                animation: "slide",
                itemWidth: 250,
                itemMargin: 25,
                animationLoop: true,
                slideshow: true,
                pauseOnHover: true,
                start: function(slider) {
                    $('body').removeClass('loading');
                }
            });
        };

        Home.prototype.tabAccordionInfo = function(){
            var self = this;
            var tabinfo = {};
            tabinfo.grape = {
                "info": "Black grapes are delicious, Fresh black grapes are low in calories, with a 1-cup serving containing only 62 calories and less than 1/2 gram of total fat. While you can eat the grapes whole and raw, making a fresh juice from them by blending 1 cup of grapes with 1/2 cup of fresh water will give you 1 cup of fresh juice that is lower in calories than a commercially produced grape juice, even if unsweetened...",
                "readmorelink":"what-are-the-health-benefits-of-black-seedless-grapes.html",
                "title" : "Grapes",
            };
            tabinfo.apple = {
                "info": "An apple won’t replace your toothbrush, but biting and chewing an apple stimulates...",
                "readmorelink":"what-are-the-health-benefits-of-apple.html",
                "title" : "An Apple",
            };
            tabinfo.orange = {
                "info": "Oranges are a good source of several vitamins and minerals, especially vitamin C, thiamin, folate and potassium. Oranges are an excellent source of vitamin C. One large orange can provide over 100% of the daily recommended intake. Thiamin: One of the B-vitamins, also called vitamin B1. Found in a wide variety of foods...",
                "readmorelink":"what-are-the-health-benefits-of-orange.html",
                "title" : "Orange",
            };
            tabinfo.kiwi = {
                "info": "The fiber and potassium in kiwis support heart health. An increase in potassium intake along with a decrease in sodium intake is the most important dietary change that a person can make to reduce their risk of cardiovascular disease...",
                "readmorelink":"what-are-the-health-benefits-of-kiwifruit.html",
                "title" : "Kiwi",
            };
            tabinfo.fig = {
                "info": "Figs are one of the earliest fruits grown by man. Though figs are not available throughout the year, dried figs (popularly known as anjeer in India) are. Not only is dried fig tasty to eat, it has numerous health benefits to offer as well...",
                "readmorelink":"what-are-the-health-benefits-of-fig.html",
                "title" : "Fig Dried",
            };
            return tabinfo;
        };

        Home.prototype.addClassToSlider = function(){
            var self = this;
            $('ul#slides li').each(function (index, ele) {
                var self = this;
                var li = ele;
                $(li).removeClass('article slide_' + index).addClass('article slide_' + index);
            });
        };

        Home.prototype.addClassToArticlePreview = function(){ //Home page
            var self = this;
            $('.article-preview').find('.col-lg-6').each(function (index, dom) {
                var self = this;
                $(dom).removeClass('preview_article_' + index).addClass('preview_article_' + index);
            });
        };

        Home.prototype.setIpadAlignment = function(){
            var self = this;
            var d = $('.detailed_article .right .single-news, .right h3');
            (self.isMobile.ipad()) ? $(d).addClass('custom-container'): $(d).removeClass('custom-container');
        };

        Home.prototype.showAccordionTab = function(){
            var self = this;
            //Accordion for recommended articles in detailed pages
            $(".tabs").fadeIn(1000);
                $("a").click(function(){
                $(".menu").slideUp();
                    if ($(this).next().is(":hidden")){
                        $(this).next().slideDown(300)
                    }
            });
        };

        Home.prototype.setAccordionTabReadMoreAnchor = function(){
            var self = this;

        };

        Home.prototype.setAccordionTabInfo = function(){
            var self = this;
            var dom = $('.detailed_article .right');
            //set accordion tab preview content
            $(dom).find('.menu').each(function(i,val){
                var self = this;
                var tabContents = Home.prototype.tabAccordionInfo();
                var fruitName = $(val).find('.tabSummary').data('fruit');
                $.each(tabContents, function(fname, fruitDetails){
                    if(fruitName == fname){
                        $(val).find('li p.info').text(fruitDetails.info);
                        $(val).find('li h1.title').text(fruitDetails.title);
                        $(val).find('li a.goto').attr("href",fruitDetails.readmorelink);
                    }
                });
            });

            Home.prototype.setAccordionTabReadMoreAnchor();
        };

        Home.prototype.init = function(){
            var self = this;
            self.setFlexslider();
            self.addClassToSlider();
            self.addClassToArticlePreview();
            self.setIpadAlignment();
            self.showAccordionTab();
            self.setAccordionTabInfo();
        };


        //Add your object to global scope
            window.Home = Home;
        //init all the page load actions
        this.Home.prototype.init();
    }(this || {}));

//
//
//    $('.flexslider').flexslider({
//        animation: "slide"
//        , itemWidth: 250
//        , itemMargin: 25
//        , animationLoop: true
//        , slideshow: true
//        , pauseOnHover: true
//        , start: function (slider) {
//            $('body').removeClass('loading');
//        }
//    });
//
//    $('ul#slides li').each(function (index, ele) {
//        var self = this;
//        var li = ele;
//        $(li).removeClass('article slide_' + index).addClass('article slide_' + index);
//    });
//    $('.article-preview').find('.col-lg-6').each(function (index, dom) {
//        var self = this;
//        $(dom).removeClass('preview_article_' + index).addClass('preview_article_' + index);
//    })
//
//    var d = $('.detailed_article .right .single-news, .right h3');
//    (isMobile.ipad()) ? $(d).addClass('custom-container'): $(d).removeClass('custom-container');
//
//    //Accordion for recommended articles in detailed pages
//    $(".tabs").fadeIn(1000);
//        $("a").click(function(){
//        $(".menu").slideUp();
//            if ($(this).next().is(":hidden")){
//                $(this).next().slideDown(300)
//            }
//    });
//    //Fb Share articles goes here
//    $('.sharefb').click(function () {
//        FB.ui({
//            method: 'feed'
//            , link: 'https://www.facebook.com'
//            , caption: "Welcome to Food Factory | foodfactory.com"
//            , picture: "https://www.alkaseltzer.com/static/media/images/fbshare_colors4.jpg"
//            , description: "Can you make brilliant colors out of Alka-Seltzer and a \r\n\r\n head of cabbage? Why yes, yes you can."
//        }, function (response) {})
//    });
//
//
//
//
//
//    //set accordion tab preview content
//    $('.detailed_article .right').find('.menu').each(function(i,val){
//        var self = this;
//        var tabContents = window.Home.tabAccordionInfo();
//        var fruitName = $(val).find('p').data('fruit');
//        $.each(tabContents, function(i,v){
//            if(fruitName == i)
//                $(val).find('li p').text(v);
//        });
//
//
//    });
});

