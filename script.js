async function infoitStud() {
  let id = document.getElementById("studentId").value.trim();
  let resultDiv = document.getElementById("result");

  if (!id) {
    resultDiv.innerHTML = "<p>Please enter a Student ID.</p>";
    return;
  }


  
    let students = await fetch("student.json").then(res => res.json());
    let student = students.find(s => s.id == id);
    let gradesData = await fetch("grades.json").then(res => res.json());
    let grade = gradesData.find(g => g.id == id);

    if (student && grade) {
      resultDiv.innerHTML = `
        <h3>Student Information</h3>
        <p><b>Name:</b> ${student.name}</p>
        <p><b>Course:</b> ${student.course}</p>
        <p><b>Year Level:</b> ${student.year}</p>
        <h3>Grades</h3>
        <ul>
          ${Object.entries(grade.Grades)
            .map(([subj, mark]) => `<li>${subj}: ${mark}</li>`)
            .join("")}
        </ul>
      `;
    } else 
      resultDiv.innerHTML = "<p>No student found with that ID.</p>";
     }
