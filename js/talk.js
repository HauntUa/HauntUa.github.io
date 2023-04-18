new TypeIt("#wq-zrn", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("王岐 && 胖娃")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("你最胖喽")
    .pause(3000)
    .go();

new TypeIt('#talkToZRN', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();
