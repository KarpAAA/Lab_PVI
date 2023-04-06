function openNewStudentDialog() {
    $("#dialogContainer").load("/additionalContent/dialog/newStudentDialog.html", function () {
        $("#addStudentForm").submit(function (event) {
            event.preventDefault();

            let formData = $(this).serialize();
            let formFields = formData.split('&');
            let formDataObject = {};

            $.each(formFields, function (index, field) {
                formDataObject[field.split('=')[0]] = field.split('=')[1];
            });
            if (!dateCheck(formDataObject.birthday)) return;
            addStudent(new Student(null, formDataObject.name, formDataObject.sGroup, formDataObject.birthday, true, formDataObject.gender));

        });

    }).css("display", "block");
}
function openDeleteStudentDialog(button) {

    const id = $(`#studentsTable tr`).eq(button.parentNode.parentNode.rowIndex)
        .find('td').eq(1).attr("id");
    console.log(button.parentNode.parentNode.rowIndex);
    $("#dialogContainer").load("/additionalContent/dialog/deleteStudentDialog.html", function () {

        $("#deleteStudentButton").on("click", function () {
            deleteStudent(id);
        });
        $("#close").on("click", function () {
            closeDialog();
        });
    }).css("display", "block");


}
function openEditStudentDialog(button) {
    let row = button.parentNode.parentNode;
    let columns = row.children;
    let ifMan;
    let ifWoman;
    if (columns.item(4).innerHTML === "Male") ifMan = true;
    if (columns.item(4).innerHTML === "Female") ifWoman = true;

    $("#dialogContainer").load("/additionalContent/dialog/newStudentDialog.html", function () {

        $(document).ready(function () {
            $('#addStudentForm input').each(function() {
                let inputId = $(this).attr('id');
                if(inputId === 'id'){
                    $(this).val(columns.item(1).innerText);
                }
                else if(inputId === 'group'){
                    $(this).val(columns.item(2).innerText);
                }
                else if (inputId === 'name') {
                    $(this).val(columns.item(3).innerText);
                }
                else if (inputId === 'birthday') {
                    $(this).val(columns.item(5).innerText);
                }
                else if(inputId === 'male'){
                    $(this).prop("checked", ifMan);
                }
                else if(inputId === 'female'){
                    $(this).prop("checked", ifWoman);
                }

            });
            $("h2").text("Editing Student");
            $("#close").on("click", function () {
                closeDialog();
            });
            $("#submitButton").attr( {
                'value' : "Edit"
            });
            $("#addStudentForm").submit(function (event) {
                event.preventDefault();

                let formData = $(this).serialize();
                let formFields = formData.split('&');
                let formDataObject = {};

                $.each(formFields, function (index, field) {
                    formDataObject[field.split('=')[0]] = field.split('=')[1];
                });
                if (!dateCheck(formDataObject.birthday)) return;
                editStudent(new Student(formDataObject.id, formDataObject.name, formDataObject.sGroup, formDataObject.birthday, true, formDataObject.gender));

            });

        });



    }).css("display", "block");

}
function closeDialog() {
    $("#dialogContainer").css("display", "none").html("");
}
function dateCheck(birthday) {

    let dataMax = new Date().toISOString().split("T")[0];

    if (birthday > dataMax) {
        alert('Виберіть дату яка не є майбутньою!!!');
        return false;
    }
    return true;
}
