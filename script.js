function locoMotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

locoMotiveAnimation();

function navBarAnimation () {
    gsap.to (".logo svg", {
        transform: "translateY(-110%)",
        scrollTrigger:{
            trigger: ".page1",
            scroller: ".main",
            start: "top 0",
            end: "top -5%",
            scrub: 2,
        }
    })
    
    gsap.to (".menu .links", {
        transform: "translateY(-100%)",
        opacity: 0,
        scrollTrigger:{
            trigger: ".page1",
            scroller: ".main",
            start: "top 0",
            end: "top -5%",
            scrub: 2,
        }
    })
}

navBarAnimation(); 

function videoConAnimation() {
  let playButton = document.querySelector("#play");
  let videoContainer = document.querySelector(".video-container");

  videoContainer.addEventListener("mouseenter", () => {
    gsap.to(playButton, {
      scale: 1,
      opacity: 1,
    });
  });

  videoContainer.addEventListener("mouseleave", () => {
    gsap.to(playButton, {
      scale: 0,
      opacity: 0,
    });
  });

  videoContainer.addEventListener("mousemove", (dets) => {
    gsap.to(playButton, {
      left: dets.x - 50,
      top: dets.y - 50,
    });
  });
}

videoConAnimation();

function loadingAnimation() {
  gsap.from(".page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3,
  });
  gsap.from(".page1 .video-container", {
    scale: 0.8,
    opacity: 0,
    delay: 1,
    duration: 0.5,
  });
}

loadingAnimation();

function mouseOverProduct() {
  const productsCon = document.querySelector(".products");

  productsCon.addEventListener("mouseenter", () => {
    gsap.to(".cursor", {
      scale: 1,
    });
  });

  productsCon.addEventListener("mousemove", (dets) => {
    gsap.to(".cursor", {
      left: dets.x,
      top: dets.y,
    });
  });

  productsCon.addEventListener("mouseleave", () => {
    gsap.to(".cursor", {
      scale: 0,
    });
  });
}

mouseOverProduct();
