class Student {
    constructor(id, name, sGroup, birthdate, onlineStatus, gender) {
        this.id = id;
        this.name = name;
        this.sGroup = sGroup;
        this.birthday = birthdate;
        this.status = onlineStatus;
        this.gender = gender;
    }
}

function showStudent(student){
    let index = student.id;
    $("#studentsTable").append(`<tr id="row-${index}"></tr>`);
    $(`#studentsTable #row-${index}`).load("../additionalContent/newStudent.html", function (){

        $(`#studentsTable #row-${index} #id`).attr({
            "id": index
        }).text(index);

        $(`#studentsTable #row-${index} #group`).attr({
            "id": `group-${index}`
        }).text(student.group);

        $(`#studentsTable #row-${index} #name`).attr(
            {
                "id" : `name-${index}`
            }
        ).text(student.name);

        $(`#studentsTable #row-${index} #gender`).attr(
            {
                "id" : `gender-${index}`
            }
        ).text(student.gender);

        $(`#studentsTable #row-${index} #birthday`).attr(
            {
                "id" : `birthday-${index}`
            }
        ).text(student.birthday);

        $(`#studentsTable #row-${index} #online`).attr(
            {
                "id" : `online-${index}`
            }
        )

        if(student.status === true){
            $(`#studentsTable #row-${index} #online-${index} input`).attr(
                {
                    "checked" : "checked"
                }
            )
        }

    }).attr(
        {
            "id" : `row-${index}`
        }
    );
}
function addStudent(student) {
    addStudentToDb(student,function(id) {

        let index = id;
        $("#studentsTable").append("<tr id='newTr'></tr>");
        $("#studentsTable #newTr").load("../additionalContent/newStudent.html", function (){

            $(`#studentsTable #row-${index} #id`).attr({
                "id": index
            }).text(index);

            $(`#studentsTable #row-${index} #group`).attr({
                "id": `group-${index}`
            }).text(student.sGroup);

            $(`#studentsTable #row-${index} #name`).attr(
                {
                    "id" : `name-${index}`
                }
            ).text(student.name);

            $(`#studentsTable #row-${index} #gender`).attr(
                {
                    "id" : `gender-${index}`
                }
            ).text(student.gender);

            $(`#studentsTable #row-${index} #birthday`).attr(
                {
                    "id" : `birthday-${index}`
                }
            ).text(student.birthday);

            $(`#studentsTable #row-${index} #online`).attr(
                {
                    "id" : `online-${index}`
                }
            )

            if(student.status === true){
                $(`#studentsTable #row-${index} #online-${index} input`).attr(
                    {
                        "checked" : "checked"
                    }
                )
            }

        }).attr(
            {
                "id" : `row-${index}`
            }
        );
        closeDialog();
    });

}
function editStudent(student) {
    let id = student.id;

    $(`#studentsTable #row-${id}` , function (){
        $(`#group-${id}`).text(student.sGroup);
        $(`#name-${id}`).text(student.name);
        $(`#birthday-${id}`).text(student.birthday);
        $(`#gender-${id}`).text(student.gender);
    })

    editStudentInDb(student)
    closeDialog();
}
function deleteStudent(studentId) {
    $(`#studentsTable #row-${studentId}`).remove();
    closeDialog();
    deleteStudentFromDb(studentId);
}
function checkState(){
    if(document.getElementById("mainCheckbox").checked){
        checkAll();
    }
    else{
        unCheckAll();
    }
}
function checkAll(){
    const firstColumnCells = document.querySelectorAll("#studentsTable tr td:first-child");
    firstColumnCells.forEach(cell => {
        const checkbox = cell.querySelector("input[type=checkbox]");
        if (checkbox) {
            checkbox.checked = true;
        }
    });

}
function unCheckAll(){
    const firstColumnCells = document.querySelectorAll("#studentsTable tr td:first-child");
    firstColumnCells.forEach(cell => {
        const checkbox = cell.querySelector("input[type=checkbox]");
        if (checkbox) {
            checkbox.checked = false;
        }
    });
}
function checkOne(){

    unCheckAll();
    this.checked = true;
}
