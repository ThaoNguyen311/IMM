import $ from 'jquery';
export default class header {
    constructor(element) {
        this.html = $('html');
        this.header = $(element);
        this.wrapper = $('#wrapper');
        //this.menuBar = $('#open-menu');
        //this.mainMenu = $('#main-menu');
        $(window).resize(this.onResizeWindow.bind(this));
        this.pinHeader();
        //this.openMenuMobile();
        this.openSearch();
        this.element = element;
    }

    onResizeWindow() {
        this.pinHeader();
    }

    pinHeader() {
        let scrollTop = $(window).scrollTop();
        if (scrollTop > 0) {
            this.header.addClass('fixed-menu');
        }
        $(window).scroll(function() {
            let scrollTop = $(window).scrollTop();
            if (scrollTop > 0) {
                this.header.addClass('fixed-menu');
            } else {
                this.header.removeClass('fixed-menu');
            }
        }.bind(this));
    }
    openSearch() {
        $('.search__open').click(function() {
            var searchWrap = $('.search__wrap');
            searchWrap.css({ 'opacity': '1', 'visibility': 'visible' })
        });
        $('.search__close').click(function() {
            var searchWrap = $('.search__wrap');
            searchWrap.css({ 'opacity': '0', 'visibility': 'hidden' })
        });

    }
}