import gsap from "gsap";
export class Slick {
    init() {
        this.LogoSlider();
        this.MasterLogoSlider();
        this.TestimonialSlider()
        this.PairWellSlider();
        this.LeftRightSlider();
    }
    LogoSlider(){
        $('.logo-slider').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 8000,
            slidesToShow: 10,
            slidesToScroll: 4,
            autoplay: true,
            autoplaySpeed: 0, 
            cssEase: 'linear',
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
                },
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
            ]
        });
    }
    MasterLogoSlider(){
        $('.master-card-slider').slick({
            dots: false,
            arrows: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
                },
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
            ]
        });
    }
    LeftRightSlider(){
        $(document).ready(function () {
            $('.left-right-card-col').each(function () {
                const $block = $(this); // each card block
                const $slider = $block.find('.left-right-slider');
                const $prevArrow = $block.find('.prev-arrow');
                const $nextArrow = $block.find('.next-arrow');

                // Optional: remove slick if already applied (for dynamic reloads)
                if ($slider.hasClass('slick-initialized')) {
                    $slider.slick('unslick');
                }

                $slider.slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false,
                dots: false,
                arrows: true,
                prevArrow: $prevArrow,
                nextArrow: $nextArrow,
                autoplay: false
                });
            });
        });
    }
    PairWellSlider(){
        $('.pairs-well-slider').slick({
            dots: false,
            arrows: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
                },
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
            ]
        });
    }
    TestimonialSlider(){
        const cards = document.querySelectorAll('.testimonial-banner');
        let current = 0;

        function updateCards() {
        cards.forEach((card, index) => {
            const offset = (index - current + cards.length) % cards.length;

            if (offset === 0) {
            // Active card
            gsap.to(card, {
                duration: 0.6,
                x: 0,
                scale: 1, // No scale
                zIndex: 10,
                ease: 'power2.out'
            });
            card.classList.add('active');
            } else {
            // Right-stacked cards (same height)
            gsap.to(card, {
                duration: 0.6,
                x: offset * 30, // spacing between cards
                scale: 1,       // no scaling
                zIndex: cards.length - offset,
                ease: 'power2.out'
            });
            card.classList.remove('active');
            }
        });
        }
        $('.testimonial-prev-arrow').on('click', function () {
            current = (current + 1) % cards.length;
            updateCards();
        });
        
        $('.testimonial-next-arrow').on('click', function () {
            current = (current - 1 + cards.length) % cards.length;
            updateCards();
        });

        updateCards(); 
    }
}