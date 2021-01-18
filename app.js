gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".section").forEach(function (section) {
  ScrollTrigger.create({
    trigger: section,
    start: "top top",
    pin: true,
    pinSpacing: false
    // markers: true,
  });
});