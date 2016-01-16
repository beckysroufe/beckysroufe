//= require_tree .

// For form submission
$(document).ready(function() {
 $(document).on('submit', '#js-form-contact', function()
 {

  var data = $(this).serialize();
  
  $.ajax({
  
  type : 'POST',
  url  : 'form-send.php',
  data : data,
  success :  function(data)
       {
      $("#js-form-contact").fadeOut(500).hide(function()
      {
       $(".result").fadeIn(500).show(function()
       {
        $(".result").html(data);
       });
      });
      
       }
  });
  return false;
 });
 
});

// Modal Box jQuery
$(function(){

var appendthis =  ("<div class='modal-overlay js-modal-close'></div>");

  $('a[data-modal-id]').click(function(e) {
    e.preventDefault();
    $("body").append(appendthis);
    $(".modal-overlay").fadeTo(300, 0.7);
    //$(".js-modalbox").fadeIn(500);
    var modalBox = $(this).attr('data-modal-id');
    $('#'+modalBox).fadeIn($(this).data());
  });  
  
	$(".js-modal-close, .modal-overlay").click(function() {
	  $(".modal, .modal-overlay").fadeOut(500, function() {
	    $(".modal-overlay").remove();
	  });
	});
	 
	// $(window).resize(function() {
	//   $(".modal").css({
	//   });
	//});
 
$(window).resize();
 
});