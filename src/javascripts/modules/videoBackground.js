import $ from 'jquery';
export default class videoBackground {
    constructor(element) {
        var figure = $('.video-section__item').hover(hoverVideo, pauseVideo);

        function hoverVideo(e) {
            $('video', this).get(0).play()
        }

        function pauseVideo(e) {
            $('video', this).get(0).pause();
        }
    }
}