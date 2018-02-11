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
<body>
<header></header>
<div class="wrapper flex">

    <?php


    if (isset($_SESSION['u_id'])) {
        $username = $_SESSION['u_first'];
        $userId = $_SESSION['u_id'];
        echo '
        <form class="logged-in flex" action="php/logout.php" method="POST">
            <button class="logout-button default-button shadow" type="submit" name="submit">Nażarł sie już '.$username.'</button>
        </form>';
    }
    ?>


    <form class="add-list-item flex" action="" method="POST">
        <input class="item-input" placeholder="zamów tu se" name="order">
        <button type="submit" name="" class="add-item-button flex">
            <i class="fas fa-plus fa-sm"></i>
        </button>
    </form>
    <ul class="list flex"></ul>
</div>


<script src="js/jquery-3.3.1.js"></script>
<script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
<script src="js/script.js"></script>
<script>
    myApp.setUser('<?php echo $username ?>');
    myApp.setUserId('<?php echo $userId ?>');
</script>
</body>
</html>


