<?php
$servername = 'localhost';
$username = 'root';
$password = 'root';
$dbname = 'pviDatabase';


try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


    $stmt = $conn->prepare("DELETE FROM Student WHERE id = :id");
    $stmt->bindParam(':id', $id);
    $id = $_POST["id"];
    $stmt->execute();

} catch (PDOException $e) {
    echo  $e->getMessage();
}

$conn = null;
