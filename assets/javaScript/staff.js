// wow.js
function ceateWOW() {
  wow = new WOW(
    {
      animateClass: 'animated',
      offset:       100,
      callback:     function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
      }
    }
  );
  wow.init();
}

// 擴充函式
$.fn.showFlex = function() {
  this.css('display','flex');
}


/* 控制隱藏顯示 */
$(function () {
  // 開
  $('#staffOpenBtn').on('click', function () {
    var staffAreaDom = $('.staff .staffArea')
    var closeBtnDom = $('.staff #staffCloseBtn')
    var openBtnDom = $('.staff  #staffOpenBtn')
    if (staffAreaDom && closeBtnDom) {
      staffAreaDom.showFlex()
      closeBtnDom.show()
      openBtnDom.hide()
      ceateWOW()
    }
  })

  // 關
  $('#staffCloseBtn').on('click', function () {
    var staffAreaDom = $('.staff .staffArea')
    var closeBtnDom = $('.staff #staffCloseBtn')
    var openBtnDom = $('.staff  #staffOpenBtn')
    if (staffAreaDom && closeBtnDom) {
      staffAreaDom.hide()
      closeBtnDom.hide()
      openBtnDom.show()
      ceateWOW()
    }
  })
})
