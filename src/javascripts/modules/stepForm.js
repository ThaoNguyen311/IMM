import $ from 'jquery';
export default class stepForm {
    constructor(element) {
        this.element = $(element);
        this.stepForm();
    }
    stepForm() {
        var form = $("#stepForm");
        var current_step, next_step, previous_step;
        var left, opacity, scale;
        var animating;
        $(".next").click(function() {
            form.validate({
                errorPlacement: function errorPlacement(error, element) { element.before(error); },
                rules: {
                    email: {
                        email: true,
                    },
                    phone: {
                        digits: true,
                    },
                    age: {
                        digits: true,
                    },
                    year: {
                        digits: true,
                    },
                    nhanvien: {
                        digits: true,
                    },
                    sonhanvienquanly: {
                        digits: true,
                    }
                },
                messages: {
                    name: {
                        required: "Vui lòng nhập họ và tên",
                    },
                    email: {
                        required: "Vui lòng nhập email",
                        email: 'Vui lòng nhập địa chỉ email hợp lệ'
                    },
                    phone: {
                        required: "Vui lòng nhập số điện thoại",
                        digits: 'Vui lòng nhập số điện thoại hợp lệ'
                    },
                    age: {
                        required: "Vui lòng nhập tuổi",
                        digits: 'Vui lòng nhập số tuổi hợp lệ'
                    },
                    company: {
                        required: "Vui lòng nhập tên công ty",
                    },
                    year: {
                        required: "Vui lòng nhập năm thành lập công ty",
                        digits: 'Vui lòng nhập năm thành lập hợp lệ'
                    },
                    linhvuc: {
                        required: "Vui lòng nhập lĩnh vực kinh doanh",
                    },
                    vondangky: {
                        required: "Vui lòng nhập số vốn đăng ký",
                    },
                    doanhso: {
                        required: "Vui lòng nhập doanh số năm gần nhất"
                    },
                    loinhuan: {
                        required: "Vui lòng nhập lợi nhuận"
                    },
                    nhanvien: {
                        required: "Vui lòng nhập số nhân viên",
                        digits: 'Vui lòng số nhân viên hợp lệ'
                    },
                    chucvu: {
                        required: "Vui lòng nhập chức vụ",
                    },
                    sonhanvienquanly: {
                        required: "Vui lòng nhập số nhân viên quản lý",
                        digits: 'Vui lòng số nhân viên hợp lệ'
                    },
                    bangcap: {
                        required: "Vui lòng nhập bằng cấp",
                    },
                    solandimy: {
                        required: "Vui lòng nhập số lần đi mỹ"
                    },
                    thanhphodudinh: {
                        required: "Vui lòng nhập thành phố dự định"
                    },
                    tuoicon: {
                        required: "Vui lòng nhập tuổi các con"
                    },
                    thoigianquamy: {
                        required: "Vui lòng điền thông tin"
                    },
                    tienmatdautu: {
                        required: "Vui lòng điền thông tin"
                    }
                }
            });
            if (form.valid() == true) {
                current_step = $(this).parent();
                next_step = $(this).parent().next();
                $("#progressbar li").eq($("fieldset").index(next_step)).addClass("active");
                next_step.show();
                current_step.hide();
                var posTop = $('.scrollTo').position().top;
                $('html, body').animate({
                    scrollTop: posTop
                }, 300);
                return false;
            }
        });
        $(".previous").click(function() {
            current_step = $(this).parent();
            previous_step = $(this).parent().prev();
            $("#progressbar li").eq($("fieldset").index(current_step)).removeClass("active");
            previous_step.show();
            current_step.hide();
        });

        function ShowSubDropdown(e, c) {
            e.click(function() {
                var rad = $(this).val();
                console.log(rad);
                rad === "yes" ? c.addClass('d-block') : c.removeClass('d-block');
            });
        }
        ShowSubDropdown($('.shareCompany'), $('#show1'));
        ShowSubDropdown($('.have-related'), $('#show2'));
    }

}