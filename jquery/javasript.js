$(document).ready(function(){
    $('.slideCar').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: $(".next"),
        prevArrow: $(".back")
      });
});



$(document).ready(function(){
   $(".esc").css({visibility:"hidden"});
   $(".esc1").css({visibility:"hidden"});
   $(".esc3").css({visibility:"hidden"});
   $(".esc4").css({visibility:"hidden"});
   $(".esc5").css({visibility:"hidden"});
   $(".esc6").css({visibility:"hidden"});
   $(".esc7").css({visibility:"hidden"});
  });  



function desfoque(id, tipo, mensagem){
    if(tipo == "ent"){
           $("."+mensagem).css({visibility:"visible"});
           $("."+mensagem).css("font-weight"," 500 ");
           $("#"+id).css({filter:"blur(2px)"}); 
       
    }else{
        $("#"+id).css({filter:""});
        $("."+mensagem).css({visibility:"hidden"});
    }
}