var tl = new TimelineLite();

tl.from("#arrival", 5, {
    opacity: 0,
    ease: Power2.easeOut,
}, 0);
