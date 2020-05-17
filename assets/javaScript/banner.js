// $(function(){
//   var elementArray = ['.top100Of','.about','.howToUse','.staff']
  
  
//   for (var index = 0; index < elementArray.length; index++) {
//     var element = $(elementArray[index])
//     var font = $(element).find('.font')
//     // var tl = getTimeLine()
//     var tl = new TimelineLite({paused: true})
    
//     // gsap 動畫
//     mySplitText = new SplitText(font, {type:"chars, words"})
//     chars = mySplitText.chars;
//     gsap.set(font, {perspective: 400});
//     tl.from(chars, {autoAlpha:0, visibility:"hidden"})
//       .staggerFrom(chars, 0.7, {duration: 2.8, y:100, transformOrigin:"50% 50%"}, 0.02)
//       .to(chars, 0.7, { autoAlpha:0, visibility:"hidden" })

//     // 事件
//     $(element).mouseenter(function(e){
//       var self = e.target
//       console.log(' mouseenter')
//       // tl.restart()
//       tl.play()
//     })
//     $(element).mouseover(function(e){
//       var self = e.target
//       console.log(' mouseeover')
//       tl.pause()
//       tl.restart()
//     })
//   }



//   function getTimeLine () {
//     return  gsap.timeline({paused: true})
//   }
// });


// == //
if( false ){


  $(function(){
    var element = $('.top100Of')
    var tl = getGSAPSetting({
      font: element.find('.font')
    })
    element.mouseenter(function(e){
      var self = e.target
      tl.play()
    })
    element.mouseover(function(e){
      var self = e.target
      tl.pause()
      tl.restart()
    })
  });
  $(function(){
    var element = $('.about')
    var tl = getGSAPSetting({
      font: element.find('.font')
    })
    element.mouseenter(function(e){
      var self = e.target
      tl.play()
    })
    element.mouseover(function(e){
      var self = e.target
      tl.pause()
      tl.restart()
    })
  });
  $(function(){
    var element = $('.howToUse')
    var tl = getGSAPSetting({
      font: element.find('.font')
    })
    element.mouseenter(function(e){
      var self = e.target
      tl.play()
    })
    element.mouseover(function(e){
      var self = e.target
      tl.pause()
      tl.restart()
    })
  });
  $(function(){
    var element = $('.staff')
    var tl = getGSAPSetting({
      font: element.find('.font')
    })
    element.mouseenter(function(e){
      var self = e.target
      tl.play()
    })
    element.mouseover(function(e){
      var self = e.target
      tl.pause()
      tl.restart()
    })
  });



  function getGSAPSetting (obj) {
    var tl = new TimelineLite({paused: true})
    
    // gsap 動畫
    var mySplitText = new SplitText(obj.font, {type:"chars, words"})
    var chars = mySplitText.chars;
    // gsap.set(obj.font, {perspective: 400});
    tl.from(chars, {autoAlpha:0, visibility:"hidden"})
      .staggerFrom(chars, 0.7, {duration: 2.8, y:100, transformOrigin:"50% 50%"}, 0.02)
      .to(chars, 0.7, { autoAlpha:0, visibility:"hidden" })


    return tl 
  }
}


// Smooth scrolling when clicking an anchor link
$(document).on('click', '.scrollingLink', function(e){
  e.preventDefault();

  var sec = 1
  $('html, body').animate({
      scrollTop: $($.attr(this, 'data-href')).offset().top
  }, sec * 1000);
})