// fix - slick.js 在row為多個時filter會錯誤的問題
// https://gist.github.com/mariovalney/b6e56f061698031f1684edee43a2dc1e
// https://github.com/kenwheeler/slick/issues/1350
(function( $ ) {
  $.fn.slickFilterable = function( options ) {

      /**
       * A plugin to create a slick we can filter.
       *
       * If you are not using Rows you can use slickFilter
       * (check documentation) otherwise we can provide a valid filter.
       *
       * options {
       *      slideSelector    string     jQuery selector to get slides. Imetiate children by default.
       *      filterName       string     We will search for data-{filterName} clickable elements.
       *      slick            object     The slick settings. Check Slick doc.
       *      beforeFilter     function   A fuction called before filter slider. Receives the trigger element
       *                                  as this and 3 params: category (string), slider and slides (jQuery objects).
       *      filter           mix        A valid parameter to jQuery filter() function. If it's a functio we will wrap
       *                                  it and it receives the trigger element as this and 3 params: category (string),
       *                                  slider (jQuery object) and a copy of settings (extended).
       * }
       */
      var settings = $.extend({
          slideSelector: '> *',
          filterName: 'filter-slick',
          slick: {},
          beforeFilter: function() {},
          filter: function( element, category, slider, settings ) { return true; },
      }, options );

      return this.each(function() {
          var slider = $(this),
              slides = slider.find( settings.slideSelector ),
              slickObj;

          /**
           * Create Slick
           *
           * TIP: you should you 'slidesPerRow' instead 'slidesToShow' in grid mode (with rows)
           * to avoid slick break layout when there are less slides than on "page".
           */
          slickObj = slider.slick( settings.slick );

          // Handle Filter Click
          $('[data-' + settings.filterName + ']').on('click', function(event) {
              event.preventDefault();

              var category = $(this).data(settings.filterName),
                  newSlides = $.extend(true, {}, slides),
                  newSlickOptions;

              if ( ! category ) return;

              // Before Filter Slides
              if ( typeof settings.beforeFilter == 'function' ) {
                  settings.beforeFilter.call(this, category, slider, slides);
              }

              // Destroy and empty
              slider.slick('unslick');

              // Recreate All Slides
              if ( category === 'all' ) {
                  slider.find( settings.slideSelector ).remove();
                  slider.append( newSlides );
                  slider.slick( settings.slick );

                  // 20200507 - add -defined function
                  appendDots()

                  return;
              }

              /**
               * Filter Slides
               *
               * If settings.filter is a function we pass the category, slider and a copy of settings
               * expecting a true or false return to pass it to jQuery.filter();
               *
               * If not, we just pass it directly.
               */
              if ( typeof settings.filter !== 'function' ) {
                  newSlides = newSlides.filter( settings.filter );
              } else {
                  newSlides = newSlides.filter( function() {
                      return settings.filter.call( this, category, slider, $.extend( true, {}, settings ) );
                  } );
              }

              slider.find( settings.slideSelector ).remove();
              slider.append( newSlides );
              slider.slick( settings.slick );


          });
      });
  };
}(jQuery)); 
 
 // 附加DOM
  function appendDots(){
    var slickDots = $('.slick-dots')
    if (slickDots[0]) {
      var aa = slickDots.find('li:first-child')
      if (aa) {
        aa.before(
          '<li class="slick-active" >' +
            '  <button class="position-relative" type="button">' +
            '    <img class="position-relative arrow" src="assets/images/20200501_content/FOOD/T-arrow.png" alt="" style="top:-1px;left:0;">' +
            '  </button>' +
            '</li>'
        )
      }

      var aaa = slickDots.find('li:last-child')
      if (aaa) {
        aaa.after(
          '<li class="slick-active" >' +
            '  <button class="position-relative" type="button">' +
            '    <img class="position-relative arrow" src="assets/images/20200501_content/FOOD/T-arrow2.png" alt="" style="top:-1px;left:0;">' +
            '  </button>' +
            '</li>'
        )
      }
    }
  }


$(document).ready(function() {
  // 隨機模組 - https://stackoverflow.com/questions/31459832/randomise-and-order-divs-slick-js
  $.fn.randomize = function (selector) {
    var $elems = selector ? $(this).find(selector) : $(this).children(),
        $parents = $elems.parent();

    $parents.each(function () {
        $(this).children(selector).sort(function (childA, childB) {
            // * Prevent last slide from being reordered
            if($(childB).index() !== $(this).children(selector).length - 1) {
                return Math.round(Math.random()) - 0.5;
            }
        }.bind(this)).detach().appendTo(this);
    });

    return this;
};


// $('.slider-nav').randomize().slick({
  // $('.slider-nav').slick({
  //   infinite: true,
  //   // slidesToShow: 5,
  //   // slidesToScroll: 5,

  //   slidesPerRow: 4,
  //   rows: 4,
  //   speed: 500,
  //   fade: true,
  //   cssEase: 'linear',
  //   asNavFor: '.slider-for',
  //   dots: true,
  //   focusOnSelect: true,
  //   asNavFor: null
  // })
  $('.slider-nav').slickFilterable({
    filterName: 'filter-heading',
    filter: function( category, slider, settings ) {
      return $(this).hasClass( category );
    },
    slick:   {
  infinite: true,
  slidesPerRow: 4,
  rows: 4,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  asNavFor: '.slider-for',
  dots: true,
  focusOnSelect: true,
  asNavFor: null
}
});




  

  appendDots()
})







// 隨機按鈕

$(document).ready(function() {
  var sliderNavDom =  $('.slider-nav')
  var randomBtnDom = $('#randomBtn')


  randomBtnDom.click(function(){
    sliderNavDom.slick('destroy')
    sliderNavDom.randomize().slick({
      infinite: true,
      slidesPerRow: 4,
      rows: 4,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      asNavFor: '.slider-for',
      dots: true,
      focusOnSelect: true,
      asNavFor: null
    })

    appendDots()
  })
})


$(document).ready(function() {
    $(document).on('click', '.foodFilter', function(e){
      var self = $(e.target)
    })
})
