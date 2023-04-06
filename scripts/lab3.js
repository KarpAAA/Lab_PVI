function deleteStudent1(id) {
    $.ajax({
        url: "/server/deleteStudent.php",
        type: "POST",
        data: {id: id},
        success: function (){
            console.log("Студент був успішно видалений з бази даних!");
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error("Сталася помилка під час видалення студента з бази даних: " + textStatus, errorThrown);
        }
    });

}
function addStudent1(student) {
    $.ajax({
        url: "/server/addStudent.php",
        type: "POST",
        data: JSON.stringify(student),
        contentType: "application/json",
        success: function (response) {
            console.log("Студент був успішно доданий до бази даних!");
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error("Сталася помилка під час додавання студента до бази даних: " + textStatus, errorThrown);
        }
    });
}
function editStudent1(student){
    $.ajax({
        url: "/server/editStudent.php",
        type: "POST",
        data: JSON.stringify(student),
        contentType: "application/json",
        success: function (response) {
            console.log("Студент був успішно оновлений в базі даних!");
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error("Сталася помилка під час додавання студента до бази даних: " + textStatus, errorThrown);
        }
    });
}
function studentsList(){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("toChange").innerHTML =
                "<div class=\"row\">\n" +
                "    <div class=\"col-11\" id=\"studentsDiv\">\n" +
                "        <h1>Students:</h1>\n" +
                "        <button onclick=\"openNewStudentDialog()\" class=\"glyphButton\" id=\"addStudent\">\n" +
                "            <span class=\"glyphicon glyphicon-plus\"></span>\n" +
                "        </button>\n" +
                "\n" +
                "        <table id=\"studentsTable\" class=\"table table-bordered table-hover\">\n" +
                "            <thead>\n" +
                "            <tr>\n" +
                "                <th>Checked</th>\n" +
                "                <th>Group</th>\n" +
                "                <th>Name</th>\n" +
                "                <th>Gender</th>\n" +
                "                <th>Birthday</th>\n" +
                "                <th>Status</th>\n" +
                "                <th>Options</th>\n" +
                "            </tr>\n" +
                "            </thead>\n" +
                    this.responseText +
                "        </table>\n" +
                "    </div>\n" +
                "    <div class=\"col-1\" ></div>\n" +
                "</div>";

        }
    };

    xhttp.open("GET", "../server/studentsTable.php");
    xhttp.send();
}