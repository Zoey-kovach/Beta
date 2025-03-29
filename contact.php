<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $subject = trim($_POST['subject']);
    $message = trim($_POST['message']);

    // Validation
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        http_response_code(400);
        echo "All fields are required.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Please provide a valid email address.";
        exit;
    }

    // Email sending setup
    $recipient = "jboyedoe0001@gmail.com"; 
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Subject: $subject\n\n";
    $email_content .= "Message:\n$message\n";

    $headers = "From: $name <$email>";

    if (mail($recipient, $subject, $email_content, $headers)) {
        http_response_code(200);
        echo "Thank you! Your message has been sent.";
    } else {
        http_response_code(500);
        echo "Oops! Something went wrong, and we couldn't send your message.";
    }
} else {
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}
?>
