var scrolling = 0;

	$(window).on('load', function () {
	var navButtons = $(".main-nav a").filter("[href^='#']");
	  var ctrl = new ScrollMagic.Controller({addIndicators: true});
	  $(window).on("click", ".main-nav a", function(event) {
		scrolling = 1;
		event.preventDefault();
		const linkId = $(this).attr("href");
		ctrl.scrollTo(function (newpos) {
		  TweenMax.to(window, 0.5, {scrollTo: {y:newpos},onComplete:scrollingOff})
	  });
		ctrl.scrollTo(linkId);
		
	  })
		
	   TweenLite.to(".text1", 1, {fontSize:100,
	   top:'20%',delay:.5,ease: Power4.easeOut}) 
		
		ctrl = new ScrollMagic.Controller({
		});
	
	
	function scrollingOff(){scrolling = 0};
	
	var currentSlide = 0;
	console.log('currentslide is' + currentSlide)
		// This each sets the animation
		$('.hero').each(function(index,element) {  
			new ScrollMagic.Scene({
				triggerHook: 'onLeave',
				triggerElement: this,
				offset:-20,
			})
			.on('leave', function (event) 
			{if(scrolling === 0){
				  console.log("scrolling " + scrolling);
				  //var topbox = $('#topbox').height();
				  console.log(index);
				  console.log('.hero' + (index))
				  currentSlide = index;
				  //console.log('currentslide is' + currentSlide)
				//  console.log('window height: ' + $('.hero').height() - (index));
				  TweenLite.to(navButtons, 0.5, {className: ""});
				  console.log(event.scrollDirection);

				  if (currentSlide > 0){
				  TweenLite.to(window, 1,{scrollTo:{y:".hero" + (index),autoKill:false},ease: Power4.easeOut});
				  TweenLite.to(navButtons.filter(".active"), 0.5, {className: ""});
				  TweenLite.to(navButtons.filter("[href='#section-" + currentSlide + "']"), 0.5, {className: "active"});
				}
				if (currentSlide == 0){
console.log('its zero')				
TweenLite.to(window, 1,{scrollTo:{y:"#topbox",autoKill:false},ease: Power4.easeOut});
				}
				TweenLite.to(".text" + (index), 1, {fontSize:30,top:'0',delay:.5,ease: Power4.easeOut})
			}
			   })
			.addTo(ctrl);  // scene end
	
	
			
		   new ScrollMagic.Scene({
				triggerElement: this,
				triggerHook: 'onEnter',
				offset:20, // small offset added to prevent overscrolling accidentally triggering
			})
			  .addTo(ctrl)
			  .on('enter', function (event) {
			   if(scrolling === 0){
				console.log("scrolling " + scrolling);
					  console.log('triggered');
					  console.log('.hero' + (index+1))
					 //console.log('currentslide is ' + currentSlide)
					  currentSlide = index+1;
					  var prevSlide = index;
					  console.log(index+1);
					  console.log(event.scrollDirection);
					  if (currentSlide == 0){
						console.log('its zerooo')				
						TweenLite.to(window, 1,{scrollTo:{y:".hero1",autoKill:false},ease: Power4.easeOut});
										}
					  if (currentSlide > 1){
					  TweenLite.to(window, 1, {scrollTo:{y:".hero" + (index+1),autoKill:false},ease: Power4.easeOut});
					  }
					  console.log(index)
					  if (currentSlide < 1){
						TweenLite.to(window, 1, {scrollTo:{y:".hero" + (currentSlide+1),autoKill:false},ease: Power4.easeOut});
						console.log('currentslide is ' + (currentSlide+1))
					  }
					  TweenLite.to(navButtons.filter(".active"), 0.5, {className: ""});
					  TweenLite.to(navButtons.filter("[href='#section-" + prevSlide + "']"), 0.5, {className: ""});
					TweenLite.to(navButtons.filter("[href='#section-" + currentSlide + "']"), 0.5, {className: "active"});
			   }       
					  TweenLite.to(".text" + (index+1), 1, {fontSize:30,top:'0',delay:.5,ease: Power4.easeOut})
											 
			   }); // scene end
		   currentSlide= 0;
		  
		}); //hero each
	  
	  }); //window onload
