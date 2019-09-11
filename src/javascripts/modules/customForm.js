import $ from 'jquery';
export default class customForm {
    constructor(element) {
        this.element = $(element);
        this.stepForm();
    }
    stepForm() {
        var current_art, next_art, prev_art;
        $('#nextStep').click(function() {
            current_art = $(this).parents('article');
            next_art = $(this).parents('article').next();
            next_art.show();
            current_art.hide();
        });
        $('#prevStep').click(function() {
            current_art = $(this).parents('article');
            prev_art = $(this).parents('article').prev();
            prev_art.show();
            current_art.hide();
        });
        $('#toResult').click(function() {
            var radPorposeVal = $("input[name='porpose']:checked").val();
            var radAssetVal = $("input[name='asset']:checked").val();
            current_art = $(this).parents('article');
            console.log(radPorposeVal + '+' + radAssetVal);
            $('#stepRegister').show();
            if (radPorposeVal === "yes") {
                if (radAssetVal === "enough") {
                    current_art.hide();
                    $('#one_first').show();
                } else {
                    current_art.hide();
                    $('#one_second').show();
                }
            } else if (radPorposeVal === "no") {
                if (radAssetVal === "enough") {
                    current_art.hide();
                    $('#two_first').show();
                } else {
                    current_art.hide();
                    $('#two_second').show();
                }
            }
        });
        $('#return').click(function() {
            current_art = $('article');
            $('#stepRegister').hide();
            current_art.hide();
            $('article').eq(0).show();
            $('html, body').animate({
                scrollTop: $("#findNation").offset().top - 100 //make scoll element to middle
            }, 500);
        })
    }
}