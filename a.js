
let students = [];

function addStudent() {
    let name = document.getElementById("name").value.trim();
    let roll = document.getElementById("roll").value.trim();

    if (name === "" || roll === "") {
        alert("Please enter name and roll number");
        return;
    }
let exists = students.some(function(student) {
    return student.roll === roll;
});

if (exists) {
    alert("This roll number already exists!");
    return;
}
    students.push({
        name: name,
        roll: roll,
        status: "Not Marked"
    });

    showStudents();
    updateSummary();

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
}

function showStudents() {
    let list = document.getElementById("studentList");

    list.innerHTML = "";

    for (let i = 0; i < students.length; i++) {
        list.innerHTML += `
            <div class="student">
                <h3>${students[i].name}</h3>
                <p>Roll Number: ${students[i].roll}</p>
                <p>Attendance: ${students[i].status}</p>

               
<button
    onclick="markAttendance(${i}, 'Present')"
    ${students[i].status !== "Not Marked" ? "disabled" : ""}>
    Present
</button>

<button
    onclick="markAttendance(${i}, 'Absent')"
    ${students[i].status !== "Not Marked" ? "disabled" : ""}>
    Absent
</button>


                <button onclick="deleteStudent(${i})">
                    Delete
                </button>
            </div>
        `;
    }
}


function markAttendance(index, status) {

    if (students[index].status !== "Not Marked") {
        alert("Attendance already marked!");
        return;
    }

    students[index].status = status;

    showStudents();
    updateSummary();
}

function updateSummary() {
    let total = students.length;
    let present = 0;
    let absent = 0;

    for (let i = 0; i < students.length; i++) {
        if (students[i].status === "Present") {
            present++;
        } else if (students[i].status === "Absent") {
            absent++;
        }
    }

    document.getElementById("total").textContent = total;
    document.getElementById("present").textContent = present;
    document.getElementById("absent").textContent = absent;
}

function deleteStudent(index) {
    students.splice(index, 1);

    showStudents();
    updateSummary();
}
