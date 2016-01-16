<?php
    if($_POST) {

    $EmailFrom = "Becky Sroufe";
    $EmailTo = "becky@beckysroufe.com";
    $Subject = "You've received a message from beckysroufe.com!";
    $Name = Trim(stripslashes($_POST['name']));
    $Phone = Trim(stripslashes($_POST['phone'])); 
    $Email = Trim(stripslashes($_POST['email'])); 
    $Message = Trim(stripslashes($_POST['message'])); 

    // prepare email body text
    $Body = "";
    $Body .= "Name: ";
    $Body .= $Name;
    $Body .= "\n";
    $Body .= "Phone: ";
    $Body .= $Phone;
    $Body .= "\n";
    $Body .= "Email: ";
    $Body .= $Email;
    $Body .= "\n";
    $Body .= "Message: ";
    $Body .= $Message;
    $Body .= "\n";

    // send email 
    $success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");
     ?> 
        
        <p class="success">Success! Your message has been sent.</p>
        <?php
     
    }
?>