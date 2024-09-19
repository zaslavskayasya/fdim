<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $contact = htmlspecialchars($_POST['contact']);
    $agreement = isset($_POST['data-agreement']) ? 'Згоден' : 'Не згоден';

    $to = 'web.zaslavskaya@gmail.com'; // Вкажіть свою поштову скриньку
    $subject = 'Нова заявка з форми';
    $message = "Ім'я: $name\nКонтакт: $contact\nЗгода на обробку персональних даних: $agreement";
    $headers = 'From: webmaster@example.com' . "\r\n" .
               'Reply-To: webmaster@example.com' . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo 'Заявка успішно відправлена.';
    } else {
        echo 'Помилка при відправці заявки.';
    }
}
?>