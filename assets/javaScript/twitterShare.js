// refer - https://codepen.io/Huskie/pen/wKphk
var twitterShare = document.querySelector('[data-js="twitter-share"]')

twitterShare.onclick = function (e) {
  e.preventDefault()
  var twitterWindow = window.open(
    'https://twitter.com/share?url=' + window.shareUrl,
    'twitter-popup',
    'height=350,width=600'
  )
  if (twitterWindow.focus) {
    twitterWindow.focus()
  }
  return false
}
