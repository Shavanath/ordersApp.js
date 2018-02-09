<?php

session_start();
include_once 'loginsystem.php';
include_once 'signup.php';

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Żryj</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="styles/styles.css">
</head>
<body class="flex">
<header></header>
<div class="wrapper flex">

    <header>
        <h1 class="title">Zara bejsz jadł</h1>
    </header>
    <?php
;
;
        if (isset($_SESSION['u_id'])) {
            $username = $_SESSION['u_first'];
            echo '
        <form class="logged-in flex" action="php/logout.php" method="POST">
            <button class="logout-button default-button shadow" type="submit" name="submit">Nażarł sie już '.$username.'</button>
        </form>';
        } else {
            $username = $_SESSION['u_first'];
            echo '
        <form class="login-wrapper flex" action="php/login.php" method="POST">
            <input class="login-input" name="uid" placeholder="Nick dej">
            <input type="password" class="password-input input" name="pwd" placeholder="Hasło dej">
            <button type="submit" name="submit" class="default-button shadow submit-login">Zaloguj</button>
        </form>
        
        <a href="#" class="tab-clicked register-tab default-button shadow">Rejestracja</a>
        <form class="tab-display login-wrapper signup-form flex" action="php/signup.php" method="POST">
            <input class="login-input" name="username" placeholder="Dej nick">
            <input type="password" class="login-input" name="password" placeholder="Dej hasło">
            <button class="default-button shadow" type="submit" name="submit-signup">Zarejestruj</button>
        </form>
        ';
        }

    ?>

</div>


<script src="js/jquery-3.3.1.js"></script>
<script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
<script src="js/script.js"></script>
</body>
</html>


