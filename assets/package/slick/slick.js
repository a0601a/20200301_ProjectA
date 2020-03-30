$(document).ready(function() {
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
          '    <img class="position-absolute" src="assets/images/20200327_cutPic/element/TOP/inside/TOP arrow.png" alt="" style="top:0;left:0;">' +
          '  </button>' +
          '</li>'
      )
    }

    var aaa = slickDots.find('li:last-child')
    if (aaa) {
      aaa.after(
        '<li class="slick-active" >' +
          '  <button class="position-relative" type="button">' +
          '    <img class="position-absolute" src="assets/images/20200327_cutPic/element/TOP/inside/TOP arrow2.png" alt="" style="top:0;left:0;">' +
          '  </button>' +
          '</li>'
      )
    }
  }
})
