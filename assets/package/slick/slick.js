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
  $('.slider-nav').slick({
    infinite: true,
    // slidesToShow: 5,
    // slidesToScroll: 5,

    slidesPerRow: 4,
    rows: 4,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    asNavFor: '.slider-for',
    dots: true,
    focusOnSelect: true
  })
})

$(document).ready(function() {
  // 附加DOM
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
})
