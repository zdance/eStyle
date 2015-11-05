
$(document).ready(function(){
    
<!--   #abs BEGIN -->

$('.pages ul li').click(function(){
  
  $('.pages ul li').removeClass('activeli');

  $(this).addClass('activeli');

});


<!-- #abs  END -->

<!-- #top  BEGIN -->

$('#top').click(function(){
  $('html,body').animate({scrollTop:0},500);
});

<!-- #top  END -->

<!-- .novosti>p  BEGIN -->

$('.read').click(function(){
  $(this).parent().find($('#p')).toggleClass('down');
  if($(this).text() == '+ Read More'){
    $(this).text('-++ Read More');
  }if($(this).text() == '- Read More'){
    $(this).text('+++ Read More');
  }
});

<!-- .novosti>p  END -->


<!-- .pokaz  BEGIN -->

$('.pokaz').click(function(){
  $('#wrapmodal').animate({left: '0px'}, 400, function(){
    $('.content').css('color','lime');
  });
});

$('.closee').click(function(){
  $('#wrapmodal').animate({left: '-2500px'}, 400, function(){
    $('.content').css('color','');
  });
});

<!-- .pokaz  END -->

<!-- Article show  END -->

  $(window).scroll(function(){
      var top = $(window).scrollTop();
      var body = $('body').height();
      var win = $(window).height();
      top = top + 300;
    var res = body - win;
    if( res < top){
      $('article').fadeIn(1000);
    }
  //alert(res+' ' +' ' +top)
  });


<!-- Article show  END -->


});<!-- END -->



