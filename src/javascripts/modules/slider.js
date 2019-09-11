import $ from 'jquery';
import slick from 'slick-carousel';
export default class slider {
    constructor(element) {
        this.element = $(element);
        this.sliderService();
        this.sliderOnMobile();
    }

    sliderService() {
        this.element.find('.service__slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 767,
                    settings: "unslick"
                }
            ]
        });
    }
    sliderOnMobile() {
        this.element.find('.mobile__slider').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            responsive: [{
                    breakpoint: 9999,
                    settings: "unslick"
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplay: true
                    }
                },
                {
                    breakpoint: 568,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true
                    }
                }
            ]
        });
    }
}