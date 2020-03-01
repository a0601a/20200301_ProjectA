$(window).mousemove(function(evt){
  var x = evt.pageX;
  var y = evt.pageY;
  // console.log(x + "," + y);
  
  if (x>$(window).width()/2 + 50){
    $("#bolw").css("transform","translateY(400px)");
    $("#soup").css("transform","translateY(170px)");
    $("#noodles").css("transform","translateY(20px)");  
    $("#bokcoy").css("transform","translate(28px,-5px)");
    $("#radish").css("transform","translate(80px,-130px)");
    $("#radish2").css("transform","translate(80px,-130px)");
    $("#carrot").css("transform","translate(0px,-180px)");
    $("#carrot2").css("transform","translate(0px,-180px)");
    $("#beef").css("transform","translateY(-300px)");
    $("#beef2").css("transform","translateY(-300px)");
    $("#beef3").css("transform","translateY(-300px)");
    $("#greenonion").css("transform","translateY(-400px)");
    $("#greenonion2").css("transform","translateY(-400px)");
    
    $("#radish2").css("transition-delay","0.1s");
    $("#carrot2").css("transition-delay","0.1s");
    $("#beef2").css("transition-delay","0.1s");
    $("#beef3").css("transition-delay","0.2s");
    $("#greenonion2").css("transition-delay","0.1s");
    $("#soup").attr("src","https://res.cloudinary.com/fssalad/image/upload/v1575504369/001.%E7%89%9B%E8%82%89%E9%BA%B5/2.0/OK%E7%89%9B%E8%82%89%E9%BA%B5_%E6%B9%AF2_bokius.png");
    
    $(".text.text1").addClass("text_1");
    $(".text.text2").addClass("text_2");
    $(".text.text3").addClass("text_3");
    $(".text.text4").addClass("text_4");
    $(".text.text5").addClass("text_5");
    $(".text.text6").addClass("text_6");
    $(".text.text7").addClass("text_7");
    $(".text.text8").addClass("text_8");
    
  }else if (x<$(window).width()/2 - 50){
    $("#bolw").css("transform","translate(0px)");
    $("#soup").css("transform","translate(0px)");
    $("#noodles").css("transform","translate(0px)");
    $("#bokcoy").css("transform","translate(0px)");
    $("#radish").css("transform","translate(0px)");
    $("#radish2").css("transform","translate(0px)");
    $("#carrot").css("transform","translate(0px)");
    $("#carrot2").css("transform","translate(0px)");
    $("#beef").css("transform","translate(0px)");
    $("#beef2").css("transform","translate(0px)");
    $("#beef3").css("transform","translate(0px)");
    $("#greenonion").css("transform","translate(0px)");
    $("#greenonion2").css("transform","translate(0px)");
    
    $("#beef3").css("transition-delay","0.15s");
    $("#soup").attr("src","https://res.cloudinary.com/fssalad/image/upload/v1575504369/001.%E7%89%9B%E8%82%89%E9%BA%B5/2.0/OK%E7%89%9B%E8%82%89%E9%BA%B5_%E6%B9%AF_btuhi6.png");
    
    $(".text.text1").removeClass("text_1");
    $(".text.text2").removeClass("text_2");
    $(".text.text3").removeClass("text_3");
    $(".text.text4").removeClass("text_4");
    $(".text.text5").removeClass("text_5");
    $(".text.text6").removeClass("text_6");
    $(".text.text7").removeClass("text_7");
    $(".text.text8").removeClass("text_8");
  }
})