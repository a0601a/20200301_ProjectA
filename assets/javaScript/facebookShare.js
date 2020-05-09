function fbShareTemplate(obj) {
  return (
    '<div id="fbShareBtn" class="fb-share-button" data-href="{{data-href}}" data-layout="button" data-size="small">' +
    '   <a target="_blank" href="{{href}}" class="fb-xfbml-parse-ignore">分享</a>' +
    '</div>'
  )
    .replace(/{{data-href}}/g, obj.dataHref)
    .replace(/{{href}}/g, obj.href)
}

function fbShare(obj) {
  var fbDom = $('#fb')
  if (fbDom) fbDom.append(fbShareTemplate(obj))
}

$(function () {
  $(function(){
    $('#fbShareBtn').hover(
      function(){
        $('#facebookBtn').stop().css({
          transform: 'rotateY(1260deg)',
          transition: 'transform 2.6s ease'
        }, 2600)
      },
      function(){
        $('#facebookBtn').stop().css({
          transform: 'rotateY(0deg)'
        }, 2600)
      }
)
  })
})
