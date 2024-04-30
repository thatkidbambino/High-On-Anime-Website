<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $file = fopen("contacts-info.csv", "a");

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $formData = array($name, $email, $message);

    fputcsv($file, $formData);

    fclose($file);

    echo "Information saved successfully!";
}
?>
