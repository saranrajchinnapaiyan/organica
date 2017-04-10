$(document).ready(function () {
    $the_post		  = jQuery('.the-post'),
    $window           = jQuery(window),

    $("#sendMail").on('click', function () {
        var self = this;
        var myObj = {};
        var formData = {
            name: {
                "domSelector": ".name"
                , "errormsg": "Please Enter your Name"
                , "validation": "empty"
                , "errorDom": ".name-error"
            }
            , mail: {
                "domSelector": ".mail"
                , "errormsg": "Please Enter a valid email id"
                , "validation": "mail"
                , "errorDom": ".email-error"
            }
            , message: {
                "domSelector": ".msg"
                , "errormsg": "Please Enter your Message"
                , "validation": "empty"
                , "errorDom": ".msg-error"
            }
        , };
        var isValid = Home.prototype.validateForm([], formData);

        if(! isValid.length)
                Home.prototype.contactUsSendMail();
            else
                return;

    });

    /*
        IIME for Global Access across Application
    */
    (function (global) {
        function Home() {
            //constructor
        }
        /***To find mobile , ipad, desktop****/
        Home.prototype.isMobile = {
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
                return (Home.prototype.isMobile.Android() || Home.prototype.isMobile.BlackBerry() || Home.prototype.isMobile.iOS() || Home.prototype.isMobile.Opera() || Home.prototype.isMobile.Windows());
            }
        };
        Home.prototype.validateForm = function (arr, formData) {
            console.log('validation called');
            var self = this;
            var focusField = false;
            arr = [];
            //TODO: validation
            $.each(formData, function (key, value) {
                console.log(key, value);
                var val = $(value.domSelector).val().trim();
                if (value.validation == 'empty') {
                    if (val == '' || null || undefined) {
                        $(value.errorDom).html(value.errormsg);
                        $(value.errorDom).css({
                            "display": "block"
                            , "color": "red"
                        });
                        arr.push(value.errormsg);
                        if (!focusField) {
                            focusField = false;
                            $(value.domSelector).focus();
                        }
                    }
                    else $(value.errorDom).css({
                        "display": "none"
                    });
                }
                else if (value.validation == 'mail') {
                    var mailId = $(value.domSelector).val();
                    var mailformat = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
                    if (mailId != '') {
                        if (mailformat.test(val))
                            $(value.errorDom).css('display', 'none');
                        else {
                            $(value.errorDom).html(value.errormsg);
                            $(value.errorDom).css({
                                "display": "block"
                                , "color": "red"
                            });
                            arr.push(value.errormsg);
                            focusField = true;
                            $(value.domSelector).focus();
                        }
                    }
                    else {
                        $(value.errorDom).html(value.errormsg);
                        $(value.errorDom).css({
                            "display": "block"
                            , "color": "red"
                        });
                    }
                }
            });
            return arr;
        };
        Home.prototype.contactUsSendMail = function () {
            var self = this;
            var formObj = $("#contact-us-form input").serializeObject();
            formObj.isSubscribed = $("#sendail-form input[type='checkbox']").is(':checked') ? true : false;
            $("#loader").show();
            $("#contact-us .desc").hide();
            $("#loader").hide();
            $("#contact-us .thank-you").css({"display": 'block !important', "color" : "#fff"});
//            $.ajax({
//                data : formObj,
//                url: '/sendmail',
//                dataType : 'json',
//                type : 'POST',
//                success : function(data){
//                    $("#loader").hide();
                        //TODO : Reset the form
//                },
//                fail : function(Error){
//                    $("#loader").hide();
//                    console.log(error);
                        //TODO : show error msg for user
//                },
//            });


        };

        Home.prototype.isUndefined = function (obj) {
            return obj === void 0;
        };
        Home.prototype.isNull = function (obj) {
            return obj === null;
        };
        Home.prototype.isObject = function (obj) {
            return obj === Object(obj);
        };
        Home.prototype.setFlexslider = function () {
            var w = (Home.prototype.isMobile.any() ? 200 : 250)
            var margin = (Home.prototype.isMobile.any() ? 20 : 25)
            $('.flexslider').flexslider({
                animation: "slide"
                , itemWidth: w
                , itemMargin: margin
                , animationLoop: true
                , slideshow: true
                , pauseOnHover: true
                , start: function (slider) {
                    $('body').removeClass('loading');
                }
            });
        };
        Home.prototype.tabAccordionInfo = function () {
            var self = this;
            var tabinfo = {};
            tabinfo.grape = {
                "info": "Black grapes are delicious, Fresh black grapes are low in calories, with a 1-cup serving containing only 62 calories and less than 1/2 gram of total fat. While you can eat the grapes whole and raw, making a fresh juice from them by blending 1 cup of grapes with 1/2 cup of fresh water will give you 1 cup of fresh juice that is lower in calories than a commercially produced grape juice, even if unsweetened..."
                , "readmorelink": "what-are-the-health-benefits-of-black-seedless-grapes.html"
                , "title": "Grapes"
            , };
            tabinfo.apple = {
                "info": "An apple won’t replace your toothbrush, but biting and chewing an apple stimulates..."
                , "readmorelink": "what-are-the-health-benefits-of-apple.html"
                , "title": "An Apple"
            , };
            tabinfo.orange = {
                "info": "Oranges are a good source of several vitamins and minerals, especially vitamin C, thiamin, folate and potassium. Oranges are an excellent source of vitamin C. One large orange can provide over 100% of the daily recommended intake. Thiamin: One of the B-vitamins, also called vitamin B1. Found in a wide variety of foods..."
                , "readmorelink": "what-are-the-health-benefits-of-orange.html"
                , "title": "Orange"
            , };
            tabinfo.kiwi = {
                "info": "The fiber and potassium in kiwis support heart health. An increase in potassium intake along with a decrease in sodium intake is the most important dietary change that a person can make to reduce their risk of cardiovascular disease..."
                , "readmorelink": "what-are-the-health-benefits-of-kiwifruit.html"
                , "title": "Kiwi"
            , };
            tabinfo.fig = {
                "info": "Figs are one of the earliest fruits grown by man. Though figs are not available throughout the year, dried figs (popularly known as anjeer in India) are. Not only is dried fig tasty to eat, it has numerous health benefits to offer as well..."
                , "readmorelink": "what-are-the-health-benefits-of-fig.html"
                , "title": "Fig Dried"
            , };
            return tabinfo;
        };
        Home.prototype.addClassToSlider = function () {
            var self = this;
            $('ul#slides li').each(function (index, ele) {
                var self = this;
                var li = ele;
                $(li).removeClass('article slide_' + index).addClass('article slide_' + index);
            });
        };
        Home.prototype.addClassToArticlePreview = function () { //Home page
            var self = this;
            $('.article-preview').find('.col-lg-6').each(function (index, dom) {
                var self = this;
                $(dom).removeClass('intro-articles preview_article_' + index).addClass('intro-articles preview_article_' + index);
            });
        };
        Home.prototype.addClasstoDetailedArticleView = function () {
            var self = this;
            var dom = $('.detailed_article').find('.article-body');
            $(dom).removeClass('container').addClass('container-fluid');
        };
        Home.prototype.setIpadAlignment = function () {
            var self = this;
            var d = $('.detailed_article .right .single-news, .right h3');
            (self.isMobile.ipad()) ? $(d).addClass('custom-container'): $(d).removeClass('custom-container');
        };
        Home.prototype.showAccordionTab = function () {
            var self = this;
            //Accordion for recommended articles in detailed pages
            $(".tabs").fadeIn(1000);
            $("a").click(function () {
                $(".menu").slideUp();
                if ($(this).next().is(":hidden")) {
                    $(this).next().slideDown(300)
                }
            });
        };
        Home.prototype.setAccordionTabReadMoreAnchor = function () {
            var self = this;
        };
        Home.prototype.setAccordionTabInfo = function () {
            var self = this;
            var dom = $('.detailed_article .right');
            //set accordion tab preview content
            $(dom).find('.menu').each(function (i, val) {
                var self = this;
                var tabContents = Home.prototype.tabAccordionInfo();
                var fruitName = $(val).find('.tabSummary').data('fruit');
                $.each(tabContents, function (fname, fruitDetails) {
                    if (fruitName == fname) {
                        $(val).find('li p.info').text(fruitDetails.info);
                        $(val).find('li h1.title').text(fruitDetails.title);
                        $(val).find('li a.goto').attr("href", fruitDetails.readmorelink);
                    }
                });
            });
            Home.prototype.setAccordionTabReadMoreAnchor();
        };
        Home.prototype.fbShare = function(url){
//              FB.ui({
//                method: 'share',
//                display: 'popup',
//                href: 'https://ibeinghuman.herokuapp.com/health-wellbeing/what-are-the-health-benefits-of-apple.html',
//              }, function(response){});
        };
        Home.prototype.setProgressIndicator = function(){
//            var value = $(window).scrollTop();
//            $('progress').attr('value', value);
//            var winHeight = $(window).height(),
//                docHeight = $(document).height();
//                max = docHeight - winHeight;
//                $('progress').attr('max', max);
        };
        Home.prototype.setArticleDate = function(){
            var self = this;
            var dom = $('.article-body span.date');
            var m_names = new Array("Jan", "Feb", "Mar",
                "Apr", "May", "Jun", "Jul", "Aug", "Sep",
                "Oct", "Nov", "Dec");
                var d = new Date();
                var curr_date = d.getDate();
                var curr_month = d.getMonth();
                var curr_year = d.getFullYear();
                $(dom).text(m_names[curr_month] + "-" + (curr_date - 2) + "-" + curr_year);
        };
        Home.prototype.deviceAlignment = function(){
            var self = this;
            if(self.isMobile.any())
                $('.intro-articles').addClass('padd0');
        };
        Home.prototype.setReaderIndicator = function(){
            console.log('indicator scrolling');
            var reading_content = $the_post.find( '#the-post-inner');
            var content_height	= reading_content.height();
            var window_height	= $window.height();
            var percent 		= 0,
                content_offset	= reading_content.offset().top,
                window_offest	= $window.scrollTop();

                if (window_offest > content_offset) {
                    percent = 100 * (window_offest - content_offset) / (content_height - window_height);
                }
                jQuery('#reading-position-indicator').css('width', percent + '%');

        };

        Home.prototype.fbShare = function (url) {
            //              FB.ui({
            //                method: 'share',
            //                display: 'popup',
            //                href: 'https://ibeinghuman.herokuapp.com/health-wellbeing/what-are-the-health-benefits-of-apple.html',
            //              }, function(response){});
            //coupon page facebook share.
            var h = 250;
            var w = 600;
            var left = (screen.width / 2) - (w / 2);
            var top = (screen.height / 2) - (h / 2);
            newwindow = window.open('http://www.facebook.com/sharer.php?u=https://ibeinghuman.herokuapp.com/health-wellbeing/what-are-the-health-benefits-of-apple.html', 'name', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
            //if (window.parent.window.focus) {newwindow.focus()} //window.parent.newwindow.focus();
        };
        Home.prototype.setmCustomScrollBar = function () {
            var self = this;
            var mobBody = Home.prototype.isMobile.any() ? $('body, html') : '';
            var articlePart = $('.article-section');
            var target = (mobBody != "") ? $(articlePart, mobBody) : $(articlePart);
            $('.article-section,body,html').mCustomScrollbar({
                theme: "dark-3"
                , alwaysTriggerOffsets: false
                , scrollButtons: {
                    enable: true
                }
                , callbacks: {
                    onTotalScrollOffset: 60,
                    onTotalScrollBackOffset: 50,
                    whileScrolling : function(){
                        //self.setReaderIndicator();
                        self.setProgressIndicator();
                    }
                , }
            , });
        };
        Home.prototype.addClassRecomdedArticle = function () {
            var self = this;
            var dom = $('.detailed_article .right');
            $(dom).find('.col-md-6:first').addClass('padd-r-0');
            $(dom).find('.col-md-6:last').addClass('padd-l-0');
        };
        Home.prototype.addClassToFooterSection = function () {
            var self = this;
            var f = $('.footer .social-section');
            $(f).addClass('row');
        };
        Home.prototype.addAltTags = function () {
            var self = this;
            var imges = $('img');
            $(imges).each(function (index, ele) {
                if (ele.getAttribute('alt') == '') ele.setAttribute("alt", "Health benifits of fruits");
            });
        };
        Home.prototype.setBorderAdjustment = function () {
            var self = this;
            var dom = $('.news-preview');
            Home.prototype.isMobile.any() ? $(dom).addClass('adjust-device') : $(dom).removeClass('adjust-device')
        };
        Home.prototype.addClassToRemoveDevicePadding = function () {
            var self = this;
            var dom = $('.article_wrapper .left');
            (Home.prototype.isMobile.any() ? $(dom).addClass('padd-r-0') : $(dom).removeClass('padd-r-0'))
        };
        Home.prototype.init = function () {
            var self = this;
            self.setFlexslider();
            self.addClassToSlider();
            self.addClasstoDetailedArticleView();
            self.addClassToArticlePreview();
            self.setArticleDate();
            //self.setReaderIndicator();
            //self.setProgressIndicator();

            //For SEO Optimaization
            self.addAltTags();

            //!Alignment for iPad
            self.setIpadAlignment();

            //!Alignment for devices
            self.deviceAlignment();
            self.showAccordionTab();
            self.setAccordionTabInfo();
            self.setmCustomScrollBar();
            self.setBorderAdjustment(); //For Device, recommended articles left border+adjusment
            self.addClassRecomdedArticle();
            self.addClassToRemoveDevicePadding();
            self.addClassToFooterSection();
        };
        //Add your object to global scope
        window.Home = Home;
        //init all the page load actions
        this.Home.prototype.init();
    }(this || {}));

    //    SerializeObject
    $.fn.serializeObject = function() {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };

    $(window).on("orientationchange", function () {
        //Always call the init, so that no need of refreshing page
        console.log('Orientation changed, caaling init()');
        Home.prototype.init();
    });
});
