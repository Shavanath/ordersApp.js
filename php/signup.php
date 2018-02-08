<?php

if (isset($_POST['submit-signup'])) {

    include_once 'loginsystem.php';

    $first = mysqli_real_escape_string($conn, $_POST['username']);
    $pwd = mysqli_real_escape_string($conn, $_POST['password']);

    // Error handlers

    // Check for empty fields

    if (empty($first) || empty($pwd)) {
        header('Location: ../index.php?signup=empty');
        exit();
    } else {

        // Check if input characters are valid

        if (!preg_match('/^[a-zA-Z]*$/', $first)) {
            header('Location: ../index.php?signup=invalid');
            exit();
        } else {
            $sql = "SELECT * FROM users WHERE user_uid='$first'";
            $result = mysqli_query($conn, $sql);
            $resultCheck = mysqli_num_rows($result);

            if ($resultCheck > 0) {
                header('Location: ../index.php?signup=usertaken');
                exit();
            }
            else {
                $hashedPwd = password_hash($pwd, PASSWORD_DEFAULT);

                $sql = "INSERT INTO users (user_uid, user_pwd) VALUES ('$first', '$hashedPwd');";

                $result = mysqli_query($conn, $sql);

                header('Location: ../index.php?signup=success');
                exit();
            }
        }
    }
}
else {
    header('Location: ../index.php');
    exit();
}
