<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "pviDatabase";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $conn->prepare("SELECT * FROM student;");
    $stmt->execute();

    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($result);

    $conn = null;

} catch (PDOException $e) {
    echo $e->getMessage();
}



