ScrollTrigger.defaults({
  markers:false
})

var points = gsap.utils.toArray('.point');
var indicators = gsap.utils.toArray('.indicator');

var height = 100 * points.length;

gsap.set('.indicators', {display: "flex"});

var tl = gsap.timeline({
  duration: points.length,
  scrollTrigger: {
    trigger: ".philosophie",
    start: "top center",
    end: "+="+height+"%",
    scrub: true,
    id: "points",
  }
})

var pinner = gsap.timeline({
  scrollTrigger: {
    trigger: ".philosophie .wrapper",
    start: "top top",
    end: "+="+height+"%",
    scrub: true,
    pin: ".philosophie .wrapper",
    pinSpacing: true,
    id: "pinning",
    //markers: true
  }
})



points.forEach(function(elem, i) {
  
  gsap.set(elem, {position: "absolute", top: 0});

  tl.to(indicators[i], {backgroundColor: "#052c29", duration: 0.25}, i)
  tl.from(elem.querySelector('img'), {autoAlpha:1}, i)
  tl.from(elem.querySelector('article'), {autoAlpha:0, translateY: 100}, i)
  
  tl.addLabel('position-' + i)  // Adding a label here, with the index as unique identifier
  
  if (i != points.length-1) {
    tl.to(indicators[i], {backgroundColor: "#adadad", duration: 0.25}, i+0.75)
    tl.to(elem.querySelector('article'), {autoAlpha:0, translateY: -100}, i + 0.75)
    tl.to(elem.querySelector('img'), {autoAlpha:1}, i + 0.75)
  }
  
});


// Looping over all the indicators...
indicators.forEach( function(indicator, i) {
  // ...forEach of them adding a click-event listener...
  indicator.addEventListener('click', function() {
    // ...leveraging the ScrollToPlugin and ...
    // ...ScrollTrigger's  labelToScroll() method
    gsap.to(window, { 
      duration: 1, 
      scrollTo: tl.scrollTrigger.labelToScroll(`position-${i}`)
    });
    
  })
  
})


