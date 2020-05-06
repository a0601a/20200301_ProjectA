

function fbShareTemplate(obj) {
  return (
    '<div id="asdfasdf" class="fb-share-button" data-href="{{data-href}}" data-layout="button" data-size="small">' +
    '   <a target="_blank" href="{{href}}" class="fb-xfbml-parse-ignore">分享</a>' +
    '</div>'
  ).replace(/{{data-href}}/g, obj.dataHref)
  .replace(/{{href}}/g, obj.href)
}

function fbShare(obj) {
  var fbDom = $('#fb')
  if ( fbDom ) fbDom.append(fbShareTemplate(obj))
}