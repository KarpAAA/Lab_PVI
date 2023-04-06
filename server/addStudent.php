<?php

$servername = 'localhost';
$username = 'root';
$password = 'root';
$dbname = 'pviDatabase';


try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


    $stmt = $conn->prepare("INSERT INTO Student VALUES (null, :name, :group, :gender, :birthday,0)");
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':group', $group);
    $stmt->bindParam(':gender', $gender);
    $stmt->bindParam(':birthday', $birthday);

    $name = $_POST["name"];
    $group = $_POST["group"];
    $gender = $_POST["gender"];
    $birthday = $_POST["birthday"];
    $stmt->execute();

} catch (PDOException $e) {
    echo  $e->getMessage();
}

$conn = null;

header("Location: http://localhost:63342/Lab_PVI/content/home1.php?_ijt=umr2klenj0a0iub63jokci0mpc&_ij_reload=RELOAD_ON_SAVE");
exit();