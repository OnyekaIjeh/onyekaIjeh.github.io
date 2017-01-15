// Attach a submit handler to the form
$( "#contact-form" ).submit(function( event ) {
 
  // Stop form from submitting normally
  event.preventDefault();
 
  // Get some values from elements on the page:
    var $form = $( this );
    url = $form.attr( "action" );

   name = $( "input[name='name']" ).val();
    email = $( "input[name='email']" ).val();
    message = $( "#message" ).val();
    subject = $( "input[name='_subject']" ).val();
 
  // Send the data using post
  var posting = $.ajax({
    url: "https://formspree.io/hello@onyeka.name.ng", 
    method: "POST",
    data: { 
            name: name,
            email: email,
            message: message,
            _subject: subject
        },
    dataType: "json"
});
// add animation to submit button
$("#contact-form-submit").val('Sending...').addClass('disabled');
 
  // Put the results in a div + remove animation from submit button

  // if successful
  posting.done(function() {
      var content = "<p><b>Thanks for reaching out! I'd get back to you ASAP!<b/></p></br>";
      $( "#response" ).empty().append(content);
      $("#contact-form-submit").val('Send Message').addClass('disabled');
      $( "input[name='name']" ).val('');
      $( "input[name='email']" ).val('');
      $( "#message" ).val('');
      alert("Thanks for reaching out! I'd get back to you ASAP!");
  });

  //if failed
  posting.fail(function() {
      var content = "<p><b>There was an error submitting the form, please try again.<b/></p></br>";
      $( "#response" ).empty().append(content);
      $("#contact-form-submit").val('Send Message').removeClass('disabled');
      alert("There was an error submitting the form, please try again.");
  });
});