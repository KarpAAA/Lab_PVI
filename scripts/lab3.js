function deleteStudentFromDb(id) {
    $.ajax({
        url: "../server/deleteStudent.php",
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
function addStudentToDb(student, callback) {
    $.ajax({
        url: "../server/addStudent.php",
        type: "POST",
        data: JSON.stringify(student),
        contentType: "application/json",
        success: function (response) {
            callback(response);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error("Сталася помилка під час додавання студента до бази даних: " + textStatus, errorThrown);
        }
    });
}
function editStudentInDb(student){
    $.ajax({
        url: "../server/editStudent.php",
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