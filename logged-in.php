<?php

session_start();
include_once 'loginsystem.php';
include_once 'signup.php';

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="styles/styles.css">
</head>
<body>
<header></header>
<div class="wrapper flex">

    <?php


    if (isset($_SESSION['u_id'])) {
        $username = $_SESSION['u_first'];
        echo '
        <form class="logged-in flex" action="php/logout.php" method="POST">
            <button class="logout-button default-button" type="submit" name="submit">Nażarł sie już '.$username.'</button>
        </form>';
    } else {
        echo '
        <form class="signup-form" action="php/signup.php" method="POST">
            <input name="username" placeholder="Kto chce żreć?">
            <input name="password" placeholder="Wybierz se hasło">
            <button type="submit" name="submit-signup">Zarejestruj se się</button>
        </form>

        <form class="login-wrapper flex" action="php/login.php" method="POST">
            <input class="login-input input" name="uid" placeholder="Nick dej">
            <input class="password-input input" name="pwd" placeholder="Hasło dej">
            <button type="submit" name="submit" class="submit-login"></button>
        </form>';
    }

    ?>



    <form class=" header flex">
        <input class="item-input input" placeholder="zamów tu se" name="order">
        <button type="submit" name="" class="add-item flex">
            <i class="fas fa-plus fa-sm"></i>
        </button>
    </form>
    <ul class="list flex"></ul>
</div>


<script src="jquery-3.3.1.js"></script>
<script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
<script src="script.js"></script>
</body>
</html>


