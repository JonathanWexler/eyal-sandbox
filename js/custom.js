$(document).ready(function() {  
  
//set opacity to 0.4 for all the images  
//opacity = 1 - completely opaque  
//opacity = 0 - invisible  
  
$('#card').css('opacity', 0.0);  
$('#card').stop().fadeTo(4000, 1);  
  
// when hover over the selected image change the opacity to 1  
$('#card').hover(  
   function(){  
      $(this).find('#card').stop().fadeTo('slow', 1);  
   },  
   function(){  
      $(this).find('#card').stop().fadeTo('slow', 0.4);  
   });  
  
}); 