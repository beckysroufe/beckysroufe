<?php

  $name    = $_POST['name'];
  $email   = $_POST['email'];
  $message = $_POST['message'];

  $to      = "becky@beckysroufe.com";
  $subject = "";
  $message = "";
  $headers = "From: $email";

  if( mail($to,$subject,$message,$headers) )
  {
    echo "<h2>Thanks so much for reaching out! I'll get back to you as soon as possible.</h2>";
  }
  else
  {
    echo "<h2>Whoops! Sorry, there has been an error. Please shoot me an e-mail at <a href="mailto:becky@beckysroufe.com">becky@beckysroufe.com</a></h2>";
  }

?>