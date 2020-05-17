$(function () {
  // 開
  $('#howToUseOpenBtn').on('click', function () {
    var stepDom = $('.howToUse .steps')
    var howToUseCloseBtnDom = $('.howToUse #howToUseCloseBtn')
    var howToUseOpenBtnDom = $('.howToUse  #howToUseOpenBtn')
    if (stepDom && howToUseCloseBtnDom) {
      stepDom.show()
      howToUseCloseBtnDom.show()
      howToUseOpenBtnDom.hide()
    }
  })

  // 關
  $('#howToUseCloseBtn').on('click', function () {
    var stepDom = $('.howToUse .steps')
    var howToUseCloseBtnDom = $('.howToUse #howToUseCloseBtn')
    var howToUseOpenBtnDom = $('.howToUse  #howToUseOpenBtn')
    if (stepDom && howToUseCloseBtnDom) {
      stepDom.hide()
      howToUseCloseBtnDom.hide()
      howToUseOpenBtnDom.show()
    }
  })
})
