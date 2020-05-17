/* 控制隱藏顯示 */
$(function () {
  // 開
  $('#howToUseOpenBtn').on('click', function () {
    var stepDom = $('.howToUse .steps')
    var closeBtnDom = $('.howToUse #howToUseCloseBtn')
    var openBtnDom = $('.howToUse  #howToUseOpenBtn')
    if (stepDom && closeBtnDom) {
      stepDom.show()
      closeBtnDom.show()
      openBtnDom.hide()
    }
  })

  // 關
  $('#howToUseCloseBtn').on('click', function () {
    var stepDom = $('.howToUse .steps')
    var closeBtnDom = $('.howToUse #howToUseCloseBtn')
    var openBtnDom = $('.howToUse  #howToUseOpenBtn')
    if (stepDom && closeBtnDom) {
      stepDom.hide()
      closeBtnDom.hide()
      openBtnDom.show()
    }
  })
})
