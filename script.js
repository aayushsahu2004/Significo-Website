function Locomotive() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
};
Locomotive();

function navAnimation() {
    document.querySelectorAll(".nav-tag").forEach(function (elem) {
        var clutter = "";
        elem.textContent.split("").forEach(function (e) {
            clutter += `<h2>${e}</h2>`
        })
        elem.innerHTML = clutter;
    })

    var NavTag = document.querySelectorAll(".nav-tag");

    NavTag.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.from(elem.querySelectorAll(".nav-tag h2"), {
                y: 15,
                stagger: 0.1,
                opacity: 0,
                ease: Power4
            })
        })
    })

    gsap.from(".nav",{
        opacity:0,
        y:-40,
        duration:1
    },"a")
    gsap.from(".part2 .nav-tag",{
        opacity:0,
        stagger:0.2
    },"a")
};
navAnimation();

function HomePageAnimation() {
    gsap.set(".videoText", {
        scale: 20
    });

    var clutter = ""
    document.querySelector(".main-text").textContent.split("").forEach(function (elem) {
        clutter += `<span class="opacity-0">${elem}</span>`
    })
    document.querySelector(".main-text").innerHTML = clutter;

    gsap.to(".main-text span", {
        opacity: 1,
        stagger: 0.05,
        ease: Power4
    })

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom top",
            scrub: 2,
            pin: true
        }
    })

    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top -1%",
            end: "bottom top",
            scrub: 2,
        }
    })

    function headingText() {
        var h1data = document.querySelector(".heading-text");
        splitedData = h1data.textContent.split("")
        var clutter = ""
        splitedData.forEach(element => {
            clutter += `<span>${element}</span>`
        })
        h1data.innerHTML = clutter;
    }
    headingText();

    tl
        .to(".videodiv", {
            '--clip': "0%",
            ease: Power2,
        }, 'a')

        .to(".videoText", {
            scale: 1,
            ease: Power2
        }, 'a')

    gsap.from('.heading-text span', {
        opacity: 0,
        stagger: 0.2,
        ease: Power2,
        scrollTrigger: {
            trigger: ".heading",
            start: "top -68%",
            end: "bottom -80%",
            // markers: true,
            scrub: 2,
        }
    })

    tl2
        .to(".lft", {
            xPercent: -3,
            ease: Power4
        }, 'b')

        .to(".rgt", {
            xPercent: 3,
            ease: Power4
        }, 'b')
};
HomePageAnimation();

function cardsAnimation() {
    function card1Animation() {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".card1",
                // markers: true,
                start: "top 58%",
                end: "top 58%",
                scrub: 0.8,
            }
        });
        tl
            .to(".card1", {
                width: '90%',
                backgroundColor: "black",
                ease: Power4
            }, "c")

            .to(".icon1", {
                stroke: "#AEDEE0"
            }, "c")

            .to(".card1-text", {
                color: "#AEDEE0"
            }, "c")
    };
    card1Animation();

    function card2Animation() {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".card2",
                // markers: true,
                start: "top 58%",
                end: "top 58%",
                scrub: 0.8,
            }
        });
        tl
            .to(".card2", {
                width: '90%',
                backgroundColor: "black",
                ease: Power4
            }, "c")

            .to(".icon2", {
                stroke: "#AEDEE0"
            }, "c")

            .to(".card2-text", {
                color: "#AEDEE0"
            }, "c")
    };
    card2Animation();

    function card3Animation() {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".card3",
                // markers: true,
                start: "top 58%",
                end: "top 58%",
                scrub: 0.8,
            }
        });
        tl
            .to(".card3", {
                width: '90%',
                backgroundColor: "black",
                ease: Power4
            }, "c")

            .to(".icon3", {
                stroke: "#AEDEE0"
            }, "c")

            .to(".card3-text", {
                color: "#AEDEE0"
            }, "c")
    };
    card3Animation();

    function card4Animation() {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".card4",
                // markers: true,
                start: "top 58%",
                end: "top 58%",
                scrub: 0.8,
            }
        });
        tl
            .to(".card4", {
                width: '90%',
                backgroundColor: "black",
                ease: Power4
            }, "c")

            .to(".icon4", {
                stroke: "#AEDEE0"
            }, "c")

            .to(".card4-text", {
                color: "#AEDEE0"
            }, "c")
    };
    card4Animation();
};
cardsAnimation();

function realpageAnimation() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".slides",
            // markers:true,
            start: "top top",
            end: "bottom top",
            scrub: 2,
            pin: true
        }
    })
    tl
        .to(".slides", {
            xPercent: -284,
            ease: Power2
        }, 'x')

        .to(".img1", {
            xPercent: -220,
            ease: Power2
        }, 'x')

        .to(".img2", {
            xPercent: -100,
            ease: Power2
        }, 'x')

        .to(".img3", {
            xPercent: -100,
            ease: Power2
        }, 'x')

        .to(".img4", {
            xPercent: -90,
            ease: Power2
        }, 'x')

        .to(".img5", {
            xPercent: -50,
            ease: Power2
        }, 'x')

        .to(".text-div", {
            xPercent: -20,
            ease: Power2
        }, 'x')


    gsap.to('.lastslideImg', {
        scrollTrigger: {
            trigger: ".slides",
            // markers: true,
            start: "top -10%",
            end: "top -90%",
            scrub: 2,
        },
        opacity: 0,
        ease: Power4
    })
};
realpageAnimation();

function teamPageAnimation() {
    document.querySelectorAll(".listelem").forEach(function (elem) {
        elem.addEventListener("mousemove", function (dets) {

            gsap.to(this.querySelector(".picture"), {
                opacity: 1,
                x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
                ease: Power4,
                duration: 0.5
            })
        })
        elem.addEventListener("mouseleave", function (dets) {
            gsap.to(this.querySelector(".picture"), {
                opacity: 0,
                ease: Power4,
                duration: 0.5
            })
        })
    })
};
teamPageAnimation();

function textAnimation() {
    var clutter = "";
    document.querySelector(".sub-text1").textContent.split("").forEach(function (elem) {
        clutter += `<span>${elem}</span>`
    })
    document.querySelector(".sub-text1").innerHTML = clutter;

    var clutter2 = "";
    document.querySelector(".sub-text2").textContent.split("").forEach(function (elem) {
        clutter2 += `<span>${elem}</span>`
    })
    document.querySelector(".sub-text2").innerHTML = clutter2;

    gsap.set(".sub-text1 span, .sub-text2 span", {
        opacity: 0.6
    })

    gsap.to(".sub-text1 span", {
        scrollTrigger: {
            trigger: ".text-1",
            // markers:true,
            start: "top bottom",
            end: "bottom bottom",
            scrub: 2
        },
        opacity: 1,
        color: "#2544EE",
        stagger: 0.01,
        ease: Power4
    })

    gsap.to(".sub-text2 span", {
        scrollTrigger: {
            trigger: ".sub-text2",
            // markers:true,
            start: "top bottom",
            end: "bottom 50%",
            scrub: 2
        },
        opacity: 1,
        color: "#704B98",
        stagger: 0.01,
        ease: Power4
    })
};
textAnimation();

function CapsulesAnimation() {
    gsap.to(".capsule2", {
        scrollTrigger: {
            trigger: ".capsules",
            start: "top 80%",
            bottom: "bottom bottom",
            // markers: true,
            scrub: 2,
        },
        y: -60,
        ease: Power4
    })
};
CapsulesAnimation();

function changeTheme() {
    document.querySelectorAll(".section")
        .forEach(function (e) {
            ScrollTrigger.create({
                trigger: e,
                start: "top 50%",
                end: "bottom 50%",
                onEnter: function () {
                    document.body.setAttribute("theme", e.dataset.color);
                },
                onEnterBack: function () {
                    document.body.setAttribute("theme", e.dataset.color);
                }
            })
        })
}
changeTheme();

function btnAnimation() {
    document.querySelectorAll(".first").forEach(function (elem) {
        var clutter = ""
        elem.textContent.split("").forEach(function (e) {
            clutter += `<h2 class="text-4xl md:text-[0.7rem] font-semibold font-['Satoshi']">${e}</h2>`
        })
        elem.innerHTML = clutter;
    })

    document.querySelectorAll(".second").forEach(function (elem) {
        var clutter = ""
        elem.textContent.split("").forEach(function (e) {
            clutter += `<h2 class="text-4xl md:text-[0.7rem] font-semibold font-['Satoshi']">${e}</h2>`
        })
        elem.innerHTML = clutter;
    })

    document.querySelectorAll(".third").forEach(function (elem) {
        var clutter = ""
        elem.textContent.split("").forEach(function (e) {
            clutter += `<h2 class="text-4xl md:text-[0.7rem] font-semibold font-['Satoshi']">${e}</h2>`
        })
        elem.innerHTML = clutter;
    })

    const maskerParent = document.querySelectorAll(".masker-parent");



    maskerParent.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.from(elem.querySelectorAll(".btn-text h2"), {
                y: 15,
                stagger: 0.1,
                opacity: 0,
                ease: Power4
            })
        })
    })
};
btnAnimation();

function footerAnimation() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".footer",
            // markers: true,
            start: "top 50%",
            end: "top 8%",
            scrub: 2
        }
    })

    tl
        .to(".footer", {
            height: "93%",
            ease: Power4
        }, 'f')
        .from(".footer-center h1", {
            y: 50,
            opacity: 0,
            ease: Power4,
            stagger: 0.5
        })
        .to(".footer-bottom", {
            y: 0,
            duration: 5,
            ease: Power4
        }, 'f')
};
footerAnimation();
