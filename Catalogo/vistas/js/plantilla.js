/*******************************************
Developed By Carlos Emmanue Hernandez Correa
2020
Contact
  emmanuespook@hotmail.com
********************************************/

$(window).ready(function() {
    $('#magazine').turn({
              // display: 'double',
              acceleration: true,
              gradients: true,
              elevation:50,
              autoCenter: true,
              when: {
                turned: function(e, page) {
                  // console.log('Current view: ', $(this).turn('view'));
                }
              }
            });
});
  
$(window).bind('keydown', function(e){
    
    if (e.keyCode==37)
      $('#magazine').turn('previous');
    else if (e.keyCode==39)
      $('#magazine').turn('next');
      
});

$(document).on("click",".btn-sig",function(){
      $('#magazine').turn('next');
});

$(document).on("click",".btn-ant",function(){
      $('#magazine').turn('previous');
});


