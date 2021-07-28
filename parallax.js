let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
.to('.bird1', 3, {y:650,x:-400})
.to('.bird2', 3, {y:600},'-=3')

let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "100%",
    triggerHook: 0,
})
    .setTween(timeline)
    
    .addTo(controller);