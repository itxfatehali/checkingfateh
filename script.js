
function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
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

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

var menu = document.querySelector(".nav-plus");
var menumain = document.querySelector(".menu");
var menuclose = document.querySelector(".menu-icon");
var main = document.querySelector('#main');

menu.addEventListener("click", function() {
  gsap.to(menumain , {
      height:'50vh',
      opacity:1,
      display: 'block',
  });
  gsap.to(main , {
      pointerEvents: "none",
      filter: "blur(14px)",
  });
});

menuclose.addEventListener("click", function() {
  gsap.to(menumain , {
      height:'0vh',
      opacity:0,
      display: 'none',
  });
  gsap.to(main , {
      pointerEvents: "auto",
      filter: "none",
  });
});

new Typed('#typed', {
  strings : ['Fateh Ali.','a Developer.','a Designer.'],
  typeSpeed : 70,
  delaySpeed : 100000,
  loop : true
});


Shery.makeMagnet(".nav-plus , .menu-icon , .hero img", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
if (window.innerWidth <= 600) {
  Shery.removeMouseFollower();
}
var swiper = new Swiper(".left .mySwiper", {
  effect: "cards",
  grabCursor: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

gsap.to(".blob-1" , {
  rotate:360,
  repeat:-1,
  yoyo:true,
  duration:5,
  x:-50,
  delay:1
})
gsap.to(".blob-2" , {

  repeat:-1,
  yoyo:true,
  duration:2,
  y:80,
  x:-40,
  delay:2
})
gsap.to(".blob-3" , {
  rotate:360,
  repeat:-1,
  yoyo:true,
  duration:10,
 
  delay:4
})
document.addEventListener('mousemove', function(e) {
  let body = document.querySelector('body');
  let circle = document.getElementById('circle');
  let left = e.pageX;
  let top = e.pageY;
  circle.style.left = left + 'px';
  circle.style.top = top + 'px';
  circle.style.visibility = 'visible'
});
var swiper = new Swiper(".reviews .mySwiper", {

  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3.8,
      spaceBetween: 50,
    },
  },
  
}
);


  var mainbody = document.querySelector("body");
var mf = document.querySelector(".mf");
var mf1 = document.querySelector(".mf1");
var mf3 = document.querySelector(".mf3");
var mf2 = document.querySelector(".mf2");
var mf4 = document.querySelector(".mf4");
var mf5 = document.querySelector(".mf5");
mainbody.addEventListener('mousemove' , function(det){
  gsap.to(mf, {
    duration: 1,
    skewX: 0,
    skewY: 0,
    duration: .2, x: det.x, y: det.y,
    onUpdate: function() {
   
    },
    onComplete: function() {
      // Code to execute when the animation completes
    }
  });

})
mainbody.addEventListener('mousemove' , function(deti){
  gsap.to(mf1, {
    duration: 1,
    skewX: 0,
    skewY: 0,
    duration: .3, x: deti.x, y: deti.y,
    onUpdate: function() {
   
    },
    onComplete: function() {
      // Code to execute when the animation completes
    }
  });

})
mainbody.addEventListener('mousemove' , function(deti){
  gsap.to(mf3, {
    duration: 1,
    skewX: 0,
    skewY: 0,
    duration: .4, x: deti.x, y: deti.y,
    onUpdate: function() {
   
    },
    onComplete: function() {
      // Code to execute when the animation completes
    }
  });

})


mainbody.addEventListener('mousemove' , function(deti){
  gsap.to(mf2, {
    duration: 1,
    skewX: 0,
    skewY: 0,
    duration: .5, x: deti.x, y: deti.y,
    onUpdate: function() {
   
    },
    onComplete: function() {
      // Code to execute when the animation completes
    }
  });

})

mainbody.addEventListener('mousemove' , function(deti){
  gsap.to(mf4, {
    duration: 1,
    skewX: 0,
    skewY: 0,
    duration: .6, x: deti.x, y: deti.y,
    onUpdate: function() {
   
    },
    onComplete: function() {
      // Code to execute when the animation completes
    }
  });

})

mainbody.addEventListener('mousemove' , function(deti){
  gsap.to(mf5, {
    duration: 1,
    skewX: 0,
    skewY: 0,
    duration: .7, x: deti.x, y: deti.y,
    onUpdate: function() {
   
    },
    onComplete: function() {
      // Code to execute when the animation completes
    }
  });

})

gsap.to(".icon-down" ,{
  x:30, 
  y:-10,
  repeat:-1,
  yoyo:true
})

gsap.to(".contacter", {
y:10,
repeat:-1,
yoyo:true,
  ease: "linear"
});


var elem1 = document.querySelector("#feat-1");
var elemimg = document.querySelector(".swiper-feats");
var elem2 = document.querySelector("#feat-2");
var elemimg1 = document.querySelector(".swiper-feats1");
var elem3 = document.querySelector("#feat-3");
var elemimg2 = document.querySelector(".swiper-feats2");

// 1swiper
gsap.set(".swiper-feats", { opacity: 0 });


elem1.addEventListener("mousemove", function(dets) {
  gsap.to(".swiper-feats", {
    left: dets.clientX,

    duration: 0.2, 
  });
});

// Event listener for mouseenter
elem1.addEventListener("mouseenter", function(dets) {
  gsap.to(".swiper-feats", {
    opacity: 1,
    duration: 0.2 // Adjust duration as needed
  });
});

// Event listener for mouseleave
elem1.addEventListener("mouseleave", function(dets) {
  gsap.to(".swiper-feats", {
    opacity: 0,
    duration: 0.2 // Adjust duration as needed
  });
});
var swiper3 = new Swiper("#feat-1 .mySwiper3", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },

});



// 2swiper
gsap.set(".swiper-feats", { opacity: 0 });


elem2.addEventListener("mousemove", function(dets) {
  gsap.to(".swiper-feats1", {
    left: dets.clientX,

    duration: 0.2, 
  });
});

// Event listener for mouseenter
elem2.addEventListener("mouseenter", function(dets) {
  gsap.to(".swiper-feats1", {
    opacity: 1,
    duration: 0.2 // Adjust duration as needed
  });
});

// Event listener for mouseleave
elem2.addEventListener("mouseleave", function(dets) {
  gsap.to(".swiper-feats1", {
    opacity: 0,
    duration: 0.2 // Adjust duration as needed
  });
});
var swiper3 = new Swiper("#feat-2 .mySwiper3", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },

});

// 3-swiper

gsap.set(".swiper-feats", { opacity: 0 });


elem3.addEventListener("mousemove", function(dets) {
  gsap.to(".swiper-feats2", {
    left: dets.clientX,

    duration: 0.2, 
  });
});

// Event listener for mouseenter
elem3.addEventListener("mouseenter", function(dets) {
  gsap.to(".swiper-feats2", {
    opacity: 1,
    duration: 0.2 // Adjust duration as needed
  });
});

// Event listener for mouseleave
elem3.addEventListener("mouseleave", function(dets) {
  gsap.to(".swiper-feats2", {
    opacity: 0,
    duration: 0.2 // Adjust duration as needed
  });
});
var swiper3 = new Swiper("#feat-3 .mySwiper3", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },

});