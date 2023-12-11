getdata()
// Update the getdata() function to include the saving functionality
async function getdata() {
  const localtoken = localStorage.getItem("token");
  if (localtoken == null) {
    window.location.replace('/login.html')
  }

  const res = await fetch('/attendance');
  const attendances = await res.json();
  const studentres = await fetch('/user/student', {
    headers: {
      Authorization: `Bearer ${localtoken}`,
    },
  });
  const students = await studentres.json();
  const lectureres = await fetch('/lecture', {
    headers: {
      Authorization: `Bearer ${localtoken}`,
    },
  });
  const lectures = await lectureres.json();

  let table = '<tr><th>Student ID</th>';
  for (let i = 0; i < lectures.length; i++) {
    table += `<th>${lectures[i].lecture_id}</th>`;
  }
  table += '</tr>';
  for (let i = 0; i < students.length; i++) {
    table += `<tr><th>${students[i].student_id}</th>`;
    for (let x = 0; x < lectures.length; x++) {
      const isChecked = attendances.some(e => e.student_id === students[i].student_id && e.lecture_id === lectures[x].lecture_id);
      table += `<th><input type="checkbox" ${isChecked ? 'checked' : ''} onchange="saveAttendance('${students[i].student_id}', '${lectures[x].lecture_id}', this.checked)"/></th>`;
    }
    table += '</tr>';
  }
  document.getElementById('getdata').innerHTML = table;
}

// Add the saveAttendance() function to handle checkbox state changes and save attendance
async function saveAttendance(studentId, lectureId, isChecked) {
  const localToken = localStorage.getItem("token");
  if (localToken == null) {
    window.location.replace('/login.html');
  }

  const url = `/attendance/${studentId}/${lectureId}`;
  const method = isChecked ? 'POST' : 'DELETE';
  
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        Authorization: `Bearer ${localToken}`,
      },
    });

    if (response.ok) {
      console.log(`Attendance saved for student ID ${studentId} and lecture ID ${lectureId}`);
    } else {
      console.error(`Failed to save attendance for student ID ${studentId} and lecture ID ${lectureId}`);
    }
  } catch (error) {
    console.error(`An error occurred while saving attendance for student ID ${studentId} and lecture ID ${lectureId}`);
  }
}
/*
async function getdata() {

  const localtoken = localStorage.getItem("token");
  if (localtoken == null) {
      window.location.replace('/login.html')
  }

  const res = await fetch('/attendance')
  const attendances = await res.json()
  const studentres = await fetch('/user/student', {
    headers: {
      Authorization: `Bearer ${localtoken}`,
    },
  })
  const students = await studentres.json()
  const lectureres = await fetch('/lecture', {
    headers: {
      Authorization: `Bearer ${localtoken}`,
    },
  })
  const lectures = await lectureres.json()
  
  let table = '<tr><th>Student ID</th>'
  for (let i = 0; i < lectures.length; i++) {
    table += `<th>${lectures[i].lecture_id}</th>`
  }
  table += '</tr>'
  for (let i = 0; i < students.length; i++) {
    table += `<tr>
                <th>${students[i].student_id}</th>`
    if (attendances.some(e => e.student_id === students[i].student_id)) {
      for (let x = 0; x < lectures.length; x++) {
        if (attendances.some(e => e.lecture_id === lectures[x].lecture_id) && attendances.some(e => e.student_id === students[x].student_id)) {
          table += `<th><input type="checkbox" checked /></th>`
        } else {
          table += `<th><input type="checkbox" /></th>`
        }
      }
    } else {
      for (let y = 0; y < lectures.length; y++) {
        table += `<th><input type="checkbox" /></th>`
      }
    }
    table += '</tr>'
  }
  document.getElementById('getdata').innerHTML = table
}
*/