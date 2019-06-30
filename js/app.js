$(document).ready(function(){



//cursor_______
$(window).mousemove(function(e) {
    $('.cursor')
      .eq(0)
      .css({
        left: e.pageX - 10,
        top: e.pageY - 10
      });
    setTimeout(function() {
      $('.cursor')
        .eq(1)
        .css({
          left: e.pageX - 10,
          top: e.pageY - 10
        });
    }, 100);
});

$(window).on('load', function() {
    $(document).scrollTop(0);
    setTimeout(
        function() {
            $("#loader_sec").addClass("fade-up");
            $(document).scrollTop(0);
        }, 1000);
});

//nav bar scroll_______________

$('.menu_item:nth-child(1)').on('click', function(event) {
    var target = $('.sec_2');
    event.preventDefault();
    $('html, body').stop().animate({
        scrollTop: target.offset().top
    }, 1000);
});
$('.menu_item:nth-child(2)').on('click', function(event) {
    var target = $('.sec_3');
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
$('.menu_item:nth-child(3)').on('click', function(event) {
    var target = $('.sec_5');
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
if (window.innerWidth < 1280){
    $('#containerTXT1').addClass('unvisible');
    $('#containerTXT2').addClass('unvisible');
    $('#containerTXT3').addClass('unvisible');
}

//scroll magic___________________


var controller = new ScrollMagic.Controller();

var headerMagic2 = new ScrollMagic.Scene({
    triggerElement: '.btn_item',
    duration: "500%",
    triggerHook: 0.2
})
.setClassToggle('.container', 'color2')
.addTo(controller);

var headerMagic3 = new ScrollMagic.Scene({
    triggerElement: '.sec_5',
    duration: "50%"
})
.setClassToggle('.container', 'color2')
.addTo(controller);
// var headerMagic4 = new ScrollMagic.Scene({
//     triggerElement: '.sec_6',
//     duration: "50%"
// })
// .setClassToggle('.container', 'color4')
// .addTo(controller);

var headerHideMagic5 = new ScrollMagic.Scene({
    triggerElement: '.header_title_second'
})
.setClassToggle('.header_bottom', 'hide')
.addTo(controller);

var headerHideMagic6 = new ScrollMagic.Scene({
    triggerElement: '.sec_5'
})
.setClassToggle('#containerTXT3', 'visible')
.addTo(controller);


if ($(window).width() > 1280) {
var wipeAnimation = new TimelineMax()
    .fromTo("#containerTXT1", 1, {x: "135%"}, {x: "0%", ease: Linear.easeNone});  // in from left
    new ScrollMagic.Scene({
        triggerElement: ".sec_1",
        triggerHook: "onLeave",
        duration: "20%"
    })
    .setPin(".sec_1")
    .setTween(wipeAnimation)
    .addTo(controller);

var wipeAnimationSecond = new TimelineMax()
    .fromTo("#containerTXT2", 1, {y: "100%"}, {y: "-220%", ease: Linear.easeNone}); // in from top
    new ScrollMagic.Scene({
        triggerElement: ".sec_2",
        triggerHook: 0.2,
        duration: "50%"
    })
    .setPin("#sec_2")
    .setTween(wipeAnimationSecond)
    .addTo(controller);

    var wipeAnimationThird = new TimelineMax()
    .fromTo("#containerTXT3", 1, {x: "-70%"}, {x: "130%", ease: Linear.easeNone});  // in from left
    new ScrollMagic.Scene({
        triggerElement: ".sec_5",
        triggerHook: 0.4,
        duration: "40%"
    })
    .setPin(".sec_1")
    .setTween(wipeAnimationThird)
    .addTo(controller);
    
var headerHideTXT1 = new ScrollMagic.Scene({
    triggerElement: '.sec_2'
    })
    .setClassToggle('#containerTXT1', 'hide')
    .addTo(controller);
var headerHideTXT2 = new ScrollMagic.Scene({
    triggerElement: '.sec_3'
    })
    .setClassToggle('#containerTXT2', 'hide')
    .addTo(controller);


}
});