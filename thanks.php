<html>
<head>
    <link href="css/style.css" rel="stylesheet">
</head>
<body class="php">
    <div class="php">
        <h2>Dankeschön für Deine Nachricht!</h2>
        E-Mail: <?php echo $_POST["email"]; ?><br>
        Vorname: <?php echo $_POST["forname"]; ?><br>
        Nachname: <?php echo $_POST["surname"]; ?><br>
        Nachricht: <?php echo $_POST["message"]; ?><br>
        <?php
        $sender = $_POST["email"];
        $receiver = "pascalpeters98@icloud.com";
        $subject = "Formular-Eingang";
        $message = "Von: " . $_POST["forname"] . " " . $_POST["surname"] . "\n" . "Nachricht: " . $_POST["message"];
        $headers = "From:" . $sender;
        
        if (mail($receiver, $subject, $message, $headers)) {
            echo "Nachricht akzeptiert";
        } else {
            echo "Fehler: Versuchen Sie es erneut";
        }
        ?><br>
        <a href="contact.html"><button>Zurück zur Seite</button></a>
    </div>
</body>
</html>