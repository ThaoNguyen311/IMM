import bowser from 'bowser';
import slick from 'slick-carousel';
import matchHeight from 'jquery-match-height';
class globalSite {
    static showContentWhenPageLoadFinish() {
        setTimeout(function() {
            $('.over-loader').fadeOut('slow');
        }, 500);
    }

    static checkDevice() {
        let html = $('html');
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            html.addClass('touch');
        } else {
            html.addClass('no-touch');
        }
    }
    static detectBrowser() {
        var browserName = bowser.name;
        var browserVersion = bowser.version;
        var $body = $('html')
        if (browserName === 'Chrome') {
            $body.addClass('chrome');
        }
        if (browserName === 'Firefox') {
            $body.addClass('firefox');
        }
        if (browserName === 'Internet Explorer') {
            $body.addClass('ie');
        }
        if (browserName === 'Microsoft Edge') {
            $body.addClass('edge');
        }
        if (browserName === 'Safari') {
            $body.addClass('safari');
        }
    }
    static customJs() {
        //custom blog height
        function setMaxheight(item) {
            var highestBox = 0;
            item.each(function() {
                if ($(this).height() > highestBox) {
                    highestBox = $(this).height();
                }
            });
            item.height(highestBox);
        }
        setMaxheight($('.blog__des'));
        setMaxheight($('.blog__name'));
        setMaxheight($('.benifit__title'));
        // Button back to top
        let scrollTop = $(".scrollTop");

        $(window).scroll(function() {
            // declare variable
            var topPos = $(this).scrollTop();

            // if user scrolls down - show scroll to top button
            if (topPos > 100) {
                $(scrollTop).css("opacity", "1");

            } else {
                $(scrollTop).css("opacity", "0");
            }
        });
        $(scrollTop).click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;

        });
    }


    

    
}
export default globalSite;