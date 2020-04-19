// -- 介紹食物 --

$(function () {
  // addScript('script.js');

  // Include script file
  function addScript(filename) {
    var head = document.getElementsByTagName('head')[0]

    var script = document.createElement('script')
    script.src = filename
    script.type = 'text/javascript'

    head.append(script)
  }

  // addCSS('style.css');

  // Include CSS file
  function addCSS(filename) {
    var head = document.getElementsByTagName('head')[0]

    var style = document.createElement('link')
    style.href = filename
    style.type = 'text/css'
    style.rel = 'stylesheet'
    head.append(style)
  }

  // == -- ==
  var foodIntroductionElement = $('#foodIntroduction')

  function template() {
    return '<iframe src="./beef_noodles.html" name="foodIntroductioniFrame" width="100%" marginwidth="0" marginheight="0" scrolling="No" frameborder="0" id="foodIntroductioniFrame" style="height: 1228px;"/>'
  }
  foodIntroductionElement.append(template()).css('height', '1228px')
  $('#foodIntroductioniFrame').on('load', function () {
  })
})

// foodIntroductioniFrame
