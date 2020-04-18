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
    return '<iframe src="https://xr718.github.io/20200301_ProjectA/beef_noodles.html" name="foodIntroductioniFrame" width="100%" marginwidth="0" marginheight="0" scrolling="No" frameborder="0" id="foodIntroductioniFrame" />'
  }
  foodIntroductionElement.append(template())
  $('#foodIntroductioniFrame').on('load', function () {
    console.log('iframe')

    var iframeid = document.getElementById('foodIntroductioniFrame') //iframe id
    var iframe = iframeid
    var bHeight = iframe.contentWindow.document.body.scrollHeight
    var dHeight = iframe.contentWindow.document.documentElement.scrollHeight
    var height = Math.max(bHeight, dHeight)
    iframe.height = height
    console.log(height)
  })
  
})

// foodIntroductioniFrame
