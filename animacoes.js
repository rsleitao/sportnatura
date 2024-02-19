var owl = $('.owl-carousel');
owl.owlCarousel({
    items:6,
    loop:true,
    margin:40,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false
});

wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();
