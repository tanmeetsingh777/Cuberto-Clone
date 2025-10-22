Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.makeMagnet(".tag");
Shery.hoverWithMediaCircle(".hvr" , {videos: ["./0.mp4" , "./2.mp4" ,"./3.mp4"]})

gsap.to(".fleftelm",{
  scrollTrigger:{
    trigger:".fimages",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    pin: true,
    endTrigger: ".last",
  },

  y: "-300%",
  ease: Power1,
})

let sections = document.querySelectorAll(".fleftelm");

Shery.imageEffect(".images", {
  style: 5,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});

