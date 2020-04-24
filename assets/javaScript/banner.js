$(function(){
  var elementArray = ['.top100Of','.about','.howToUse','.staff']
  
  
  for (var index = 0; index < elementArray.length; index++) {
    var element = $(elementArray[index])
    var font = $(element).find('.font')
    // var tl = getTimeLine()
    var tl = new TimelineLite({paused: true})
    
    // gsap 動畫
    mySplitText = new SplitText(font, {type:"chars, words"})
    chars = mySplitText.chars;
    gsap.set(font, {perspective: 400});
    tl.from(chars, {autoAlpha:0, visibility:"hidden"})
      .staggerFrom(chars, 0.7, {duration: 2.8, y:100, transformOrigin:"50% 50%"}, 0.02)
      .to(chars, 0.7, { autoAlpha:0, visibility:"hidden" })

    // 事件
    $(element).mouseenter(function(e){
      var self = e.target
      console.log(' mouseenter')
      // tl.restart()
      tl.play()
    })
    $(element).mouseover(function(e){
      var self = e.target
      console.log(' mouseeover')
      tl.pause()
      tl.restart()
    })
  }



  function getTimeLine () {
    return  gsap.timeline({paused: true})
  }
})


