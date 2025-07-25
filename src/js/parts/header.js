export class Header {
    init() {
        this.HeaderFixed();
        this.MegaMenuactive();
    }
     HeaderFixed() {
        // header fixed js
        var prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;
        $(window).scroll(function () {
            var sticky = $(".header"),
                scroll = $(window).scrollTop();
            if (scroll >= 50) {
                sticky.addClass("header-fixed");
                sticky.removeClass("header-fixed-os");
            }
            else {
                sticky.removeClass("header-fixed");
                sticky.addClass("header-fixed-os");
            }
            var currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
            if (prevScrollPos > currentScrollPos || currentScrollPos === 0) {
                $(".header").removeClass("hidden");
            } else {
                $(".header").addClass("hidden");
            }
            prevScrollPos = currentScrollPos;
        });
    }

    MegaMenuactive(){
        $('.menu-item').on('click', function (e) {
            e.preventDefault();

            if ($(this).find('.mega-menu').length > 0) {
                const $this = $(this);
                const $header = $('header');
                const $body = $('body');
                const $html = $('html');
                const $currentMegaMenu = $this.find('.mega-menu');
                const isActive = $this.hasClass('menu-active');

                // Reset all states
                $('.menu-item').removeClass('menu-active');
                $('.mega-menu').removeClass('mega-menu-open'); // this class will control visibility
                $header.removeClass('header-active');
                $body.removeClass('header-active-bg overflow-hidden');
                $html.removeClass('overflow-hidden');

                // If not already active, activate it
                if (!isActive) {
                $this.addClass('menu-active');
                $currentMegaMenu.addClass('mega-menu-open'); // let CSS handle show
                $header.addClass('header-active');
                $body.addClass('header-active-bg overflow-hidden');
                $html.addClass('overflow-hidden');
                }
            }
        });
    }
}