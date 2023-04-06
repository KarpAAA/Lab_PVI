<?php

$servername = 'localhost';
$username = 'root';
$password = 'root';
$dbname = 'pviDatabase';

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare("SELECT * FROM Student");
    $stmt->execute();

    while ($row = $stmt->fetch()) {
        echo "<tr>" .
            "<td>" . '<input type="checkbox"/>' . "</td>" .
            "<td>" . $row["group"] . "</td>" .
            "<td>" . $row["name"] . "</td>" .
            "<td>" . $row["gender"] . "</td>" .
            "<td>" . $row["birthday"] . "</td>" .
            "<td>" . '<input type="checkbox" checked={true}/>' . "</td>" .
            "<td>" . '<button type="button" onclick="deleteStudent('. $row["id"] .')" >DELETE</button>' . "</td>" .
            "</tr>";

    }
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
$conn = null;


