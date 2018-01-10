<?php

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
                $name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $phone = trim($_POST["phone"]);
        $subject = trim($_POST["subject"]);
        $message = trim($_POST["message"]);

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL) OR empty($phone) OR empty($subject)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Uzupełnij formularz i spróbuj ponownie.";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "pjes@vp.pl";

        // Build the email content.
        $email_content = "Subject: $subject\n\n";
        $email_content .= "Name: $name\n";
        $email_content .= "Email: $email\n\n";

        // Build the email headers.
        $email_headers = "From: $name <$email> \n\nSubject: $subject\nPhone: $phone\n\n$message";

        // Send the email.
        if (mail($recipient, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Twoja wiadomość została wysłana.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Coś poszło nie tak. Wysłanie wiadomości było niemożliwe.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "Wystąpił nieznany problem. Spróbuj ponownie.";
    }

?>
