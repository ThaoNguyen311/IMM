import $ from 'jquery';
export default class scrollRegister {
    constructor(element) {
        this.element = $(element);
        $(window).resize(this.onResizeWindow.bind(this));
        this.scrollSidebar();
    }

    onResizeWindow() {
        this.scrollSidebar();
    }

    scrollSidebar() {
        let $sticky = $('.sidebar-sticky');
        let $stickyrStopper = $('.sticky-stopper');
        if (!!$sticky.offset()) { // make sure ".sticky-stopper" element exists

            let generalSidebarHeight = $sticky.innerHeight();
            let stickyTop = ($sticky.offset() || { "top": NaN }).top;
            let stickOffset = $('.header').innerHeight() + 10;
            let stickyStopperPosition = ($stickyrStopper.offset() || { "top": NaN }).top;
            let stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
            $(window).scroll(function() { // scroll event
                let windowTop = $(window).scrollTop(); // returns number
                if ($(window).innerWidth() > 991) {
                    if (stopPoint < windowTop) {
                        $sticky.css({ position: 'absolute', top: 'initial' });
                    } else if (stickyTop < windowTop + stickOffset) {
                        $sticky.css({ position: 'fixed', top: stickOffset });
                    } else {
                        $sticky.css({ position: 'absolute', top: 'initial' });
                    }
                }
            });
        }
    }
}