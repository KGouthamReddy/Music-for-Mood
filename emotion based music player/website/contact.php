<?php 
  $message_sent = false;
  if(isset($_POST['email']) && $_POST['email'] != '' ){

    if( filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){

      require_once('PHPMailerAutoload.php');
      

      
      $mail = new PHPMailer/src/PHPMailer();
      $mail->isSMTP();
      $mail->SMTPAuth = true;
      $mail->SMTPSecure = 'ssl';
      $mail->Host = 'smtp.gmail.com'; 
      $mail->Port = '465';
      $mail->SMTPAuth = true;
      $mail->Username = 'gouthamreddy0906@gmail.com'; 
      $mail->Password = '9000356035';

      $userName = $_POST['name'];
      $userEmail = $_POST['email'];
      $messageSubject = $_POST['subject'];
      $message = $_POST['message'];

      $to = "goutham3560@gmail.com";
      $body = "";

      $body .="From: ".$userName. "\r\n";
      $body .="Email: ".$userEmail. "\r\n";
      $body .="Message: ".$message. "\r\n";

      mail($to,$messageSubject,$body);

      $message_sent = true;
    }
  
}
?>

<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-sscale=1.0">
  <title>Responsive Contact US Page</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="contact.css">
</head>
<body>
  <header>
    <a href="#" class="logo">Eump</a>
    <div class="toggle"><a href="home.php">home</a></div>
  </header>
     <section class="contact">
          <div class="content">
             <h2>Contact Us</h2>
             <p>If you have any queries a member of support staff will always be happy to help.<br> Feel free to contact us.</p>
          </div>
          <div class="container">
            <div class="contactInfo">
               <div class="box">
                  <div class="icon"><i class="fa fa-map-marker" aria-hidden=true></i></div>
                  <div class="text">
                      <h3>Address</h3>
                      <p>123 padur omr road,<br>Chennai,TamilNadu,<br>603103</p>
                  </div>
                </div>   
                 <div class="box">
                  <div class="icon" ><i class="fa fa-phone" aria-hidden=true></i></div>
                  <div class="text">
                      <h3>Phone</h3>
                      <p>9000356035</p>
                  </div>
                </div> 
                <div class="box">
                  <div class="icon"><i class="fa fa-envelope-o" aria-hidden=true></i></div>
                  <div class="text">
                      <h3>Email</h3>
                      <p>eump.support@gmail.com</p>
                  </div>
                </div> 
            </div>


            <?php 
            if($message_sent):
            ?>
              <div class="msg">
                <h1>Thanks, we'll be in touch.</h1>
              </div>
               


            <?php else: ?>
            <div class="contactForm">
              <form method="POST" action="contact.php">
                <h2>Send Message</h2>
                <div class="inputBox" id="subject">
                  <input type="text" name="name" required="required">
                  <span>Full Name</span>
                </div>
                <div class="inputBox" id="subject">
                  <input type="eamil" name="email" required="required">
                  <span>Email</span>
                </div>
                <div class="inputBox" id="subject">
                  <input type="text" name="subject" required="required">
                  <span>Subject</span>
                </div>
                <div class="inputBox" id="message">
                  <textarea required="required" name="message" id="Body"></textarea>
                  <span>Type your Message...</span>
                </div>
                <div class="inputBox">
                  <input type="submit" name="submit" value="Send" onclick="alert('mail sent successfully.')"></input>
                </div>
              </form>
            </div>
          <?php endif; ?>


          </div>
     </section>
    
</body>
</html> 
                             