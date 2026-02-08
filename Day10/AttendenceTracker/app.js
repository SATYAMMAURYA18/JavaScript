const studentList=document.getElementById("studentList");
const currentDate=document.getElementById("currentDate");
const today=new Date().toLocaleDateString();
currentDate.textContent=today;
//for localy storaging data
let students=JSON.parse(localStorage.getItem("students"))||[];
function createStudents()
{
  studentList.innerHTML="";
  students.forEach((student,index)=>{
    const row=document.createElement("tr");
    row.innerHTML=`
     <td>${student.name}</td>
      <td>
        <select onchange="updateStatus(${index}, this.value)">
          <option value="Present" ${student.status === "Present" ? "selected" : ""}>Present</option>
          <option value="Absent" ${student.status === "Absent" ? "selected" : ""}>Absent</option>
        </select>
      </td>
    `;
    studentList.appendChild(row);
  });
}

function addStudent() {
  const name = document.getElementById("studentName").value.trim();

  if (name === "") return alert("Enter student name");

  students.push({ name, status: "Present" });
  localStorage.setItem("students", JSON.stringify(students));

  document.getElementById("studentName").value = "";
  renderStudents();
}

function updateStatus(index, status) {
  students[index].status = status;
}

function saveAttendance() {
  const attendance = JSON.parse(localStorage.getItem("attendance")) || {};
  attendance[today] = students;

  localStorage.setItem("attendance", JSON.stringify(attendance));
  alert("Attendance saved successfully ✅");
}
createStudents();