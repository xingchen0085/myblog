// Floating label headings for the contact form
$(function () {
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

jQuery(document).ready(function(i) {
    var o = 1170;
    if (i(window).width() > o) {
        var a = i("#mainNav").height();
        i(window).on("scroll", {
            previousTop: 0
        }, function() {
            var o = i(window).scrollTop();
            o < this.previousTop ? o > 0 && i("#mainNav").hasClass("is-fixed") ? i("#mainNav").addClass("is-visible") : i("#mainNav").removeClass("is-visible is-fixed") : o > this.previousTop && (i("#mainNav").removeClass("is-visible"),
                o > a && !i("#mainNav").hasClass("is-fixed") && i("#mainNav").addClass("is-fixed")),
                this.previousTop = o
        })
    }
});
