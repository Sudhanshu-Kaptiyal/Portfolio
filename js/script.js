
// Locomotive scroll
gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth: true,
});

// Updating Loco scroll so srolltrigger can work
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
        };
    },

    pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed",
});


































// Preloader
// Preloader
const fill = gsap.timeline({
    paused: 'true',
});

fill.to('#percent, #bar', {
    duration: .2,
    opacity: 0,
    zIndex: -1,
});
fill.to('#preloader', {
    duration: .8,
    width: '0%',
});

let bar = document.querySelector('#barconfirm');
let percent = document.querySelector('#percent');

document.addEventListener('DOMContentLoaded', function () {
    let loaded = 0;
    let total = document.getElementsByTagName('*').length;
    let id = setInterval(frame, 10);

    function frame() {
        if (loaded >= total) {
            clearInterval(id);
            fill.play();
        } else {
            loaded++;
            let progress = (loaded / total) * 100;
            bar.style.width = progress + '%';
            percent.innerHTML = Math.floor(progress) + '%';
        }
    }
});




























// header
const header = document.querySelector('#header');

locoScroll.on('scroll', function (scrollData) {
    if (scrollData.scroll.y >= header.offsetTop + header.offsetHeight) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});










// Banner Onload animation
window.addEventListener('load', function () {
    gsap.fromTo('.onload-header', {
        y: '-150%',
        opacity: 0,
    }, {
        duration: 1.5,
        y: '0',
        ease: 'power2.out',
        opacity: 1,
        delay: 2,
    });

    // background-image
    gsap.fromTo('.onload-bg-image', {
        opacity: 0,
    }, {
        duration: 2,
        ease: 'power2.out',
        opacity: 1,
        delay: 2,
    });


    gsap.fromTo('.onload-heading p span', {
        y: '-100%'
    }, {
        duration: .1,
        y: '0%',
        stagger: .03,
        ease: 'expo',
        delay: .5,
    });


    gsap.fromTo('.onload-hero-links', {
        y: '100%',
        opacity: 0,
    }, {
        duration: 1.5,
        y: '0%',
        ease: 'expo',
        opacity: 1,
        delay: 2,
    });


    gsap.fromTo('#onload-parallax', {
        y: '25%',
        opacity: 0,
    }, {
        duration: 1.5,
        y: '0%',
        ease: 'expo',
        delay: 2.5,
        opacity: 1,
    });
});






















// Arrow Animation

const buttons = document.querySelectorAll('.btn-hover');

buttons.forEach(button => {
    const icon1 = button.querySelector('.icon-hover-1');
    const icon2 = button.querySelector('.icon-hover-2');
    const icon3 = button.querySelector('.icon-hover-3');
    const arrow = button.querySelector('.arrow-hover-v1');

    let resetTransformsTimeout;

    button.addEventListener('mouseenter', () => {
        icon1.style.transform = 'translateX(25px)';
        icon2.style.transform = 'translateX(-20px)';
    });

    button.addEventListener('mouseleave', () => {
        icon1.style.transform = 'translateX(25px)';
        icon2.style.transform = 'translateX(0px )';
        icon3.style.transform = 'translateX(-40px)';

        resetTransformsTimeout = setTimeout(() => {
            // Disable transition property
            icon1.style.transition = 'none';
            icon2.style.transition = 'none';
            icon3.style.transition = 'none';

            // Set original CSS values
            icon1.style.transform = '';
            icon2.style.transform = '';
            icon3.style.transform = '';

            // Enable transition property after resetting the values
            setTimeout(() => {
                icon1.style.transition = '';
                icon2.style.transition = '';
                icon3.style.transition = '';
            }, 1);
        }, 400);
    });

    // Cancel the timeout if the mouse re-enters the button
    button.addEventListener('mouseenter', () => {
        clearTimeout(resetTransformsTimeout);
    });
});




















// Hamburger menu
const Hamburger_Box = document.querySelector('.hamburger-box');
let Hamburger_Box_Open = false;

Hamburger_Box.addEventListener('click', () => {
    if (!Hamburger_Box_Open) {
        Hamburger_Box.classList.add('hamburger-open');
        Hamburger_Box_Open = true;
    } else {
        Hamburger_Box.classList.remove('hamburger-open');
        Hamburger_Box_Open = false;
    }
});
















// Menu Animation
const menuTimeline = gsap.timeline({ paused: true, default: { ease: 'expo' } });



menuTimeline
    .to('.menu', {
        top: '10px!important',
        duration: 1,
        ease: 'expo',
    })
    .to('.menu ul li a', {
        duration: .5,
        opacity: 1,
        y: 0,
        stagger: 0.15,
        ease: 'expo',
        delay: -.9,
    })
    .to('.menu-dot', {
        bottom: '0px',
        duration: .5,
        stagger: .15,
        ease: 'expo',
        delay: -1.2,
        opacity: 1,
    })
    .to('.menu-line', {
        height: '100%',
        stagger: .15,
        ease: 'expo',
        duration: .5,
        delay: -1.2,
    })
    .to('.menu-line-mobile', {
        bottom: '10px',
        ease: 'expo',
        stagger: .15,
        duration: 1,
        delay: -.65,
        opacity: 1,
    })







const menuButton = document.querySelector('.hamburger-box');
const elementsToBlur = document.querySelectorAll('.blur');
const header_contact = document.querySelector('#header-contact');
let isPlaying = false;

menuButton.addEventListener('click', function () {
    if (!isPlaying) {

        elementsToBlur.forEach(element => {
            element.classList.add('blurred');
        });

        menuTimeline.play();
        header_contact.style.display = "none";
        isPlaying = true;
    }
    else if (menuTimeline.reversed()) {
        menuTimeline.play();
        isPlaying = true;
        header_contact.style.display = "none";
    }
    else {
        menuTimeline.reverse(.5);
        header_contact.style.display = "flex";
        elementsToBlur.forEach(element => {
            element.classList.remove('blurred');
        });

        if (!menuTimeline.paused()) {
            return;
        }
        isPlaying = false;
    }
});


document.addEventListener('click', function (event) {
    if (!event.target.closest('.menu') && isPlaying && menuTimeline.progress() !== 0) {
        menuTimeline.reverse(.5);
        header_contact.style.display = "flex";
        elementsToBlur.forEach(element => {
            element.classList.remove('blurred');
        });
        isPlaying = false;
        if (Hamburger_Box_Open) {
            Hamburger_Box.classList.remove('hamburger-open');
            Hamburger_Box_Open = false;
        }
    }
});















// About animation

const about_Animation = gsap.fromTo(
    "#about-animation",
    { rotation: "0" },
    { rotation: "90", duration: 1, ease: "none" }
);

ScrollTrigger.create({
    trigger: "#about-section",
    start: "-40% bottom",
    end: "50% top",
    animation: about_Animation,
    scrub: .7,
    velocity: 10,
    scroller: '.smooth-scroll',
});













// progress bar

function illustratorProgressBar() {
    var xvaluenow = 100; // change percent value here
    var rotatenum = 'rotate(' + xvaluenow * 1.8 + 'deg)';

    var progress_circle = document.getElementById('progress-circle');
    var progress_style = document.getElementById('progress-style');

    /* Fix: Cover gap with shadow */
    if (xvaluenow == 0) {
        var shadowfix = "0";
    }
    else {
        var shadowfix = "1px";
    }

    /* Inserting values */
    progress_circle.setAttribute("aria-valuenow", xvaluenow);
    progress_style.innerHTML = " \
  .p-h:before, .p-f, .p-f:before{ \
  -moz-transform: " + rotatenum + "; \
  -webkit-transform: " + rotatenum + "; \
  -o-transform: " + rotatenum + "; \
  -ms-transform: " + rotatenum + "; \
  transform: " + rotatenum + "; \
  -webkit-box-shadow: 0 0 0 " + shadowfix + " #828282; \
    box-shadow: 0 0 0 " + shadowfix + " #828282;}\
  \ ";
}


ScrollTrigger.create({
    trigger: "#progress",
    scroller: '.smooth-scroll',
    start: "top 85%",
    end: "bottom top",
    repeatRefresh: true,
    toggleActions: "restart none restart reset",
    onEnter: function () {
        illustratorProgressBar();
    },
});


















// Work arrow animation


const works = document.querySelectorAll('.work-img');

works.forEach(figure => {
    const icon1 = figure.querySelector('.icon-arrow-1');
    const icon2 = figure.querySelector('.icon-arrow-2');
    const icon3 = figure.querySelector('.icon-arrow-3');
    const arrow = figure.querySelector('.work-img-arrow');

    let resetTransformsTimeout;

    figure.addEventListener('mouseenter', () => {
        icon1.style.transform = 'translateX(25px)';
        icon2.style.transform = 'translateX(0px)';
        icon2.style.color = '#F8F8F8';
        arrow.style.background = '#1D1F21';
    });

    figure.addEventListener('mouseleave', () => {
        icon1.style.transform = 'translateX(25px)';
        icon2.style.transform = 'translateX(45px )';
        icon3.style.transform = 'translateX(21px)';
        arrow.style.background = '#F8F8F8';

        resetTransformsTimeout = setTimeout(() => {
            // Disable transition property
            icon1.style.transition = 'none';
            icon2.style.transition = 'none';
            icon3.style.transition = 'none';
            arrow.style.background = '#F8F8F8';

            // Set original CSS values
            icon1.style.transform = '';
            icon2.style.transform = '';
            icon3.style.transform = '';
            arrow.style.background = '';

            // Enable transition property after resetting the values
            setTimeout(() => {
                icon1.style.transition = '';
                icon2.style.transition = '';
                icon3.style.transition = '';
                arrow.style.transition = '';
            }, 1);
        }, 500);
    });

    // Cancel the timeout if the mouse re-enters the button
    figure.addEventListener('mouseenter', () => {
        clearTimeout(resetTransformsTimeout);
    });
});























// Work animation
const work_h_Animation = gsap.timeline()

work_h_Animation
    .fromTo(
        "#work-heading",
        { x: "100" },
        { x: "0", duration: 1.5, ease: "expo" }
    )
    .fromTo(
        "#work-heading span",
        { opacity: 0, stagger: 0, ease: 'expo' },
        { opacity: 1, duration: 2, delay: -1.5, stagger: .15, ease: 'expo' }
    );

ScrollTrigger.create({
    trigger: "#work-container",
    start: "top 80%",
    end: "bottom top",
    animation: work_h_Animation,
    velocity: 10,
    repeatRefresh: true,
    toggleActions: "restart none none reset",
    scroller: '.smooth-scroll',
});





const work_p_Animation = gsap.timeline()

work_p_Animation
    .fromTo(
        "#work-para",
        {
            x: "100",
            opacity: 0,
        },

        {
            x: "0",
            opacity: 1,
            ease: 'expo',
            duration: 1.5,
            delay: .25,
        }
    );


ScrollTrigger.create({
    trigger: "#work-heading",
    start: "top 80%",
    end: "bottom top",
    animation: work_p_Animation,
    velocity: 10,
    toggleActions: "restart none none reset",
    scroller: '.smooth-scroll',
});




// Work 
const work_Animation = gsap.timeline();

work_Animation
    .fromTo(
        "#work-box",
        {
            willChange: 'width, height',
            width: '100%',
        },
        {
            duration: 1.5,
            ease: "expo",
            width: '0%',
        }
    );

ScrollTrigger.create({
    trigger: "#work-box",
    start: "top 85%",
    end: "50% top",
    animation: work_Animation,
    velocity: 10,
    toggleActions: "restart none none reset",
    scroller: '.smooth-scroll',
});






const work_Animation_2 = gsap.timeline();

work_Animation_2
    .fromTo(
        "#work-box2",
        {
            willChange: 'width, height',
            width: '100%',
        },
        {
            duration: 1.5,
            ease: "expo",
            width: '0%',
        }
    );

ScrollTrigger.create({
    trigger: "#work-box2",
    start: "top 85%",
    end: "top top",
    animation: work_Animation_2,
    velocity: 10,
    toggleActions: "restart none none reset",
    scroller: '.smooth-scroll',
});










// view-more-btn

const view_more_btn = document.querySelector('#view-more-btn');
const view_more = document.querySelector(('#view-more'));
const view_more_text = document.querySelector('#view-more-text');
const view_less_text = document.querySelector('#view-less-text');


let view_more_true = true;

view_more_btn.addEventListener('click', function () {

    if (view_more_true) {
        view_more.style.maxHeight = "100px";
        view_more_text.style.display = "none";
        view_less_text.style.display = "block";
        view_more_true = false;
    }
    else {
        view_more.style.maxHeight = "0px";
        view_more_text.style.display = "block";
        view_less_text.style.display = "none";
        view_more_true = true;

    }

    const websiteHeight = document.body.offsetHeight;
    ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.pin) {
            trigger.pinSpacingTop = websiteHeight;
        }
    });
    ScrollTrigger.refresh();
});






// help container for larger viewport size

const help_main = gsap.timeline();

help_main
    .fromTo(
        '.box-2',
        {
            top: '200%'
        },
        {
            top: '0%',
            stagger: .5,
            ease: 'expo',
        },
    );



ScrollTrigger.create({
    pin: '#help-main',
    pinSpacing: true,
    trigger: '#main-box',
    start: 'center center',
    // markers: true,
    end: '200% top',
    animation: help_main,
    repeatRefresh: true,
    toggleActions: 'restart none none reset',
    scroller: '.smooth-scroll',
    scrub: .5,
    onUpdate: function (self) {
        const websiteHeight = document.body.offsetHeight;
        self.pinSpacingTop = websiteHeight;
    }
});








const read_more_btn = document.querySelector('#read-more-btn');
const read_more = document.querySelector(('#read-more'));
const read_more_text = document.querySelector('#read-more-text');
const read_less_text = document.querySelector('#read-less-text');


let read_more_true = true;

read_more_btn.addEventListener('click', function () {

    if (read_more_true) {
        read_more.style.maxHeight = "100vh";
        read_more_text.style.display = "none";
        read_less_text.style.display = "block";
        read_more_true = false;
    }
    else {
        read_more.style.maxHeight = "0vh";
        read_more_text.style.display = "block";
        read_less_text.style.display = "none";
        read_more_true = true;
    }
});








// Help

const help_h_Animation = gsap.timeline()

help_h_Animation
    .fromTo(
        "#help-heading",
        { x: "100", opacity: 0, },
        { x: "0", opacity: 1, duration: 1.5, ease: "expo", stagger: 4 }
    )

ScrollTrigger.create({
    trigger: "#help-container",
    start: "top 80%",
    end: "bottom top",
    animation: help_h_Animation,
    velocity: 10,
    repeatRefresh: true,
    toggleActions: "restart none none reset",
    scroller: '.smooth-scroll',
});









const help_p_Animation = gsap.timeline()

help_p_Animation
    .fromTo(
        "#help-para",
        { x: "100", opacity: 0, },
        { x: "0", opacity: 1, duration: 1.5, ease: "expo", stagger: 4, delay: .15 }
    )


ScrollTrigger.create({
    trigger: "#help-container",
    start: "top 80%",
    end: "bottom top",
    animation: help_p_Animation,
    velocity: 10,
    repeatRefresh: true,
    toggleActions: "restart none none reset",
    scroller: '.smooth-scroll',
});








//opacity
const opacity_gsap = gsap.timeline();

opacity_gsap
    .fromTo(
        '#opacity-gsap',
        {
            opacity: 0,
            x: '50'
        },
        {
            opacity: 1,
            duration: 2,
            ease: 'expo',
            x: '0',
            delay: -.5,
        }
    );

ScrollTrigger.create({
    trigger: '#opacity-gsap',
    animation: opacity_gsap,
    start: 'top 90%',
    end: 'bottom top',
    repeatRefresh: true,
    toggleActions: 'restart none none reset',
    scroller: '.smooth-scroll',
});












const btn_opacity_gsap = gsap.timeline();

btn_opacity_gsap
    .fromTo(
        '#btn-opacity-gsap',
        {
            opacity: 0,
            x: '50'
        },
        {
            opacity: 1,
            duration: 2,
            ease: 'expo',
            x: '0',
            delay: -.5,
        }
    );

ScrollTrigger.create({
    trigger: '#btn-opacity-gsap',
    animation: btn_opacity_gsap,
    start: 'top 80%',
    end: 'bottom top',
    repeatRefresh: true,
    toggleActions: 'restart none none reset',
    scroller: '.smooth-scroll',
});

















// About animation

const hire_Animation = gsap.fromTo(
    "#hire-animation",
    { rotation: "0" },
    { rotation: "90", duration: 1, ease: "none" }
);

ScrollTrigger.create({
    trigger: "#hire-section",
    start: "top 90%",
    end: "bottom top",
    animation: hire_Animation,
    scrub: .7,
    velocity: 10,
    scroller: '.smooth-scroll',
});









































































// Media Query Moblie view

if (window.matchMedia("(max-width: 552px)").matches) {

    //  Paralax Gallery
    const figure_1_Animation = gsap.fromTo(
        ".center-gl",
        { y: "-40%" },
        { y: "60%", duration: 6, ease: "none" }
    );

    ScrollTrigger.create({
        trigger: ".section-2",
        start: "top bottom",
        end: "200% top",
        animation: figure_1_Animation,
        scrub: 1,
        velocity: 10,
        scroller: '.smooth-scroll',
    });






    const figure_2_Animation = gsap.fromTo(
        ".side-gl",
        { y: "-15%", },
        { y: "20%", duration: 1, ease: "none" }
    );

    ScrollTrigger.create({
        trigger: ".section-2",
        start: "top bottom",
        end: "200% top",
        animation: figure_2_Animation,
        scrub: .8,
        velocity: 30,
        scroller: '.smooth-scroll',
    });



















    // read-more-btn

    const about_read_btn = document.querySelector('#about-read-btn');
    const about_read_para = document.querySelector(('#about-read-para'));
    const about_read_more = document.querySelector('#about-read-more');
    const about_read_less = document.querySelector('#about-read-less');


    let about_read_true = true;

    about_read_btn.addEventListener('click', function () {

        if (about_read_true) {
            about_read_para.style.maxHeight = "30vh";
            about_read_more.style.display = "none";
            about_read_less.style.display = "block";
            about_read_true = false;
        }
        else {
            about_read_para.style.maxHeight = "0vh";
            about_read_more.style.display = "block";
            about_read_less.style.display = "none";
            about_read_true = true;
        }
    });
















    // view-more-btn

    const view_more_btn = document.querySelector('#view-more-btn');
    const view_more = document.querySelector(('#view-more'));
    const view_more_text = document.querySelector('#view-more-text');
    const view_less_text = document.querySelector('#view-less-text');


    let view_more_true = true;

    view_more_btn.addEventListener('click', function () {

        if (view_more_true) {
            view_more.style.maxHeight = "125vh";
            view_more_text.style.display = "none";
            view_less_text.style.display = "block";
            view_more_true = false;
        }
        else {
            view_more.style.maxHeight = "0vh";
            view_more_text.style.display = "block";
            view_less_text.style.display = "none";
            view_more_true = true;

        }


    });









    // help container for smaller viewport size

    const help_main = gsap.timeline();

    help_main
        .fromTo(
            '.box-2',
            {
                top: '300%'
            },
            {
                top: '0%',
                stagger: .5,
                ease: 'expo',
            },
        );

    ScrollTrigger.create({
        pin: '#help-main',
        pinSpacing: true,
        trigger: '#help-heading',
        start: 'top 85vh',
        end: '300vh top',
        animation: help_main,
        repeatRefresh: true,
        toggleActions: 'restart none none reset',
        scroller: '.smooth-scroll',
        scrub: .4,
    })




}



























// Media query tablet view

else if (window.matchMedia("(max-width:820px) and (min-width:552px)").matches) {


    //  Paralax Gallery
    const figure_1_Animation = gsap.fromTo(
        ".center-gl",
        { y: "-40%" },
        { y: "80%", duration: 6, ease: "none" }
    );

    ScrollTrigger.create({
        trigger: ".section-2",
        start: "top bottom",
        end: "200% top",
        animation: figure_1_Animation,
        scrub: 1,
        velocity: 10,
        scroller: '.smooth-scroll',
    });






    const figure_2_Animation = gsap.fromTo(
        ".side-gl",
        { y: "-5%", },
        { y: "80%", duration: 1, ease: "none" }
    );

    ScrollTrigger.create({
        trigger: ".section-2",
        start: "top bottom",
        end: "200% top",
        animation: figure_2_Animation,
        scrub: .8,
        velocity: 30,
        scroller: '.smooth-scroll',
    });

















    const help_main = gsap.timeline();

    help_main
        .fromTo(
            '.box-2',
            {
                top: '300%'
            },
            {
                top: '0%',
                stagger: .5,
                ease: 'expo',
            },
        );

    ScrollTrigger.create({
        pin: '#help-main',
        pinSpacing: true,
        trigger: '#help-heading',
        start: 'top 15%',
        end: '300vh top',
        animation: help_main,
        repeatRefresh: true,
        toggleActions: 'restart none none reset',
        scroller: '.smooth-scroll',
        scrub: .4,
    })






}






















else {









    // Paralax gallery

    const figure_1_Animation = gsap.fromTo(
        ".center-gl",
        { y: "-105%" },
        { y: "-10%", duration: 6, ease: "none" }
    );

    ScrollTrigger.create({
        trigger: ".section-2",
        start: "top bottom",
        end: "200% top",
        animation: figure_1_Animation,
        scrub: .7,
        velocity: 10,
        scroller: '.smooth-scroll',
    });











    const figure_2_Animation = gsap.fromTo(
        ".side-gl",
        { y: "-35%", },
        { y: "40%", duration: 1, ease: "none" }
    );

    ScrollTrigger.create({
        trigger: ".section-2",
        start: "top bottom",
        end: "200% top",
        animation: figure_2_Animation,
        scrub: 1,
        velocity: 30,
        scroller: '.smooth-scroll',
    });



}













































































// LocoScroll Refresh
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();