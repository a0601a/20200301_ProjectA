$(function () {
  
  function setBodyFont(){
    console.log(' test')
    var bodyDom = $('body')
    var fontJPClass = 'fontJP'
    var fontzhTWClass = 'fontzhTW'

    if (localStorage['lang'] === undefined || localStorage['lang'] === 'zhTW') bodyDom.addClass(fontzhTWClass)
    else if ( localStorage['lang'] === 'japen' ) bodyDom.addClass(fontJPClass)
    else bodyDom.addClass(fontzhTWClass)
  }


  setBodyFont()
})