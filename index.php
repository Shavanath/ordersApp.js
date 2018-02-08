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
        if (isset($_SESSION['u_id'])) {
            $username = $_SESSION['u_first'];
            echo '
        <form class="logged-in flex" action="php/logout.php" method="POST">
            <button class="logout-button default-button" type="submit" name="submit">Nażarł sie już '.$username.'</button>
        </form>';
        } else {
            echo '
        <form class="login-wrapper flex" action="php/login.php" method="POST">
            <input class="login-input input" name="uid" placeholder="Nick dej">
            <input class="password-input input" name="pwd" placeholder="Hasło dej">
            <button type="submit" name="submit" class="default-button">Zaloguj</button>
        </form>
        
        <form class="login-wrapper signup-form flex" action="php/signup.php" method="POST">
            <input class="login-input input" name="username" placeholder="Dej nick">
            <input class="login-input input" name="password" placeholder="Dej hasło">
            <button class="default-button" type="submit" name="submit-signup">Zarejestruj</button>
        </form>
        ';
        }

    ?>

</div>


<script src="jquery-3.3.1.js"></script>
<script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
<script src="script.js"></script>
</body>
</html>


