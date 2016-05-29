

$('.add-cat').click(function(){
  $('.canvas').append('<img class="cat" src="images/george.jpg">');
});
$('.remove-cat').click(function(){
  $('.cat:last').remove();
});
$('.hide-cats').click(function(){
  $('.cat').hide('slow');
});
$('.show-cats').click(function(){
  $('.cat').show('fast');
});
$('.fade-out').click(function(){
  $(".cat:visible:last").fadeOut(2000);
});
jQuery('.fade-in').click(function(){
  jQuery(".cat:hidden:last").fadeIn(500);
});
