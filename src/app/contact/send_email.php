<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Formulardaten empfangen und validieren
    $name = htmlspecialchars(strip_tags($_POST['name']));
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(strip_tags($_POST['message']));

    // Überprüfen, ob die Daten korrekt sind
    if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Fehler: Alle Felder müssen korrekt ausgefüllt werden!";
        exit;
    }

    // E-Mail-Adresse des Empfängers
    $to = "info@appelt-bauservice.de";  // Ersetze dies mit deiner E-Mail-Adresse
    $subject = "Neue Nachricht von $name";

    // Nachrichtentext
    $body = "Du hast eine neue Nachricht von $name ($email):\n\n$message";

    // Kopfzeilen (Absender-Adresse)
    $headers = "From: $email";

    // E-Mail senden
    if (mail($to, $subject, $body, $headers)) {
        echo "Danke! Deine Nachricht wurde erfolgreich gesendet.";
    } else {
        echo "Es gab ein Problem beim Senden der Nachricht.";
    }
} else {
    echo "Ungültige Anfrage.";
}
?>
