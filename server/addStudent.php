<?php

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "pviDatabase";


if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $json = file_get_contents('php://input');
    $student = json_decode($json);

//    if (!validateField($student->name, "^[A-Za-zА-Яа-я. -]*$")
//        || !validateField($student->sGroup, "[A-Z-0-9]{4,}")
//        || !validateField($student->gender, "([MF])ale")
//        || !validateField($student->birthday, "\d{4}-\d{2}-\d{2}")){
//        echo "-1";
//        exit();
//    }

    try {

        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $stmt = $conn->prepare("INSERT INTO Student VALUES (null, :name, :group, :gender, :birthday, 0)");
        $stmt->bindParam(":name", $name);
        $stmt->bindParam(":group", $sGroup);
        $stmt->bindParam(":gender", $gender);
        $stmt->bindParam(":birthday", $birthday);

        $name = $student->name;
        $sGroup = $student->sGroup;
        $gender = $student->gender;
        $birthday = $student->birthday;

        $stmt->execute();

        echo $conn->lastInsertId();
        $conn = null;

    } catch (PDOException $e) {
        echo "Помилка";
    }
}

function validateField($value, $pattern)
{
    if (empty($value) || !preg_match($pattern, $value)) {
        return false;
    }
    return true;
}
