//= require_tree .

// For form submission
$("#js-contact-form").submit(function(event) {
	/* stop form from submitting normally */
	event.preventDefault();

	/* get some values from elements on the page: */
	var $form = $( this ),
		$submit = $form.find( 'button[type="submit"]' ),
		name_value = $form.find( 'input[name="name"]' ).val(),
		email_value = $form.find( 'input[name="email"]' ).val(),
		message_value = $form.find( 'textarea[name="message"]' ).val(),
		url = $form.attr('action');

	/* Send the data using post */
	var posting = $.post( url, { 
		name: name_value, 
		email: email_value, 
		message: message_value 
	});

	posting.done(function( data ) {
		/* Put the results in a div */
		$( "#js-contact-response" ).html(data);

		/* Change the button text. */
		$submit.text('Sent, Thank you');

		/* Disable the button. */
		$submit.attr("disabled", true);
	});
});

// Modal Box jQuery
$(function(){

var appendthis =  ("<div class='modal-overlay js-modal-close'></div>");

  $('a[data-modal-id]').click(function(e) {
    e.preventDefault();
    $("body").append(appendthis);
    $(".modal-overlay").fadeTo(500, 0.7);
    //$(".js-modalbox").fadeIn(500);
    var modalBox = $(this).attr('data-modal-id');
    $('#'+modalBox).fadeIn($(this).data());
  });  
  
	$(".js-modal-close, .modal-overlay").click(function() {
	  $(".modal, .modal-overlay").fadeOut(500, function() {
	    $(".modal-overlay").remove();
	  });
	});
	 
	$(window).resize(function() {
	  $(".modal").css({
	  });
	});
 
$(window).resize();
 
});