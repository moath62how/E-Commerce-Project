document.addEventListener("DOMContentLoaded", () => {
    const usersTableBody = document.getElementById("usersTableBody");
    const testsTableBody = document.getElementById("testsTableBody");
    const editTestForm = document.getElementById("editTestForm");
    const quizNameInput = document.getElementById("quizName");
    const timeInput = document.getElementById("time");
    const questionsInput = document.getElementById("questions");

    let tests = JSON.parse(localStorage.getItem("tests")) || [];
    let editingTestIndex = null;

    // Load users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.forEach((user, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${index + 1}</td>
      <td>${user.email}</td>
      <td>${user.phone}</td>
      <td>${user.role}</td>
    `;
        usersTableBody.appendChild(row);
    });

    // Load tests from localStorage
    function loadTests() {
        testsTableBody.innerHTML = "";
        tests.forEach((test, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${index + 1}</td>
        <td>${test.QuizName}</td>
        <td>${test.Time}</td>
        <td>
          <button class="btn btn-sm btn-primary" onclick="editTest(${index})">Edit</button>
          <button class="btn btn-sm btn-danger" onclick="deleteTest(${index})">Delete</button>
        </td>
      `;
            testsTableBody.appendChild(row);
        });
    }

    // Edit test
    window.editTest = (index) => {
        editingTestIndex = index;
        const test = tests[index];
        quizNameInput.value = test.QuizName;
        timeInput.value = test.Time;
        questionsInput.value = JSON.stringify(test.Questions, null, 2);
        const editTestModal = new bootstrap.Modal(document.getElementById("editTestModal"));
        editTestModal.show();
    };

    // Delete test
    window.deleteTest = (index) => {
        if (confirm("Are you sure you want to delete this test?")) {
            tests.splice(index, 1);
            localStorage.setItem("tests", JSON.stringify(tests));
            loadTests();
        }
    };

    // Save edited test
    editTestForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const updatedTest = {
            QuizName: quizNameInput.value,
            Time: parseInt(timeInput.value, 10),
            Questions: JSON.parse(questionsInput.value),
        };
        if (editingTestIndex !== null) {
            tests[editingTestIndex] = updatedTest;
        } else {
            tests.push(updatedTest);
        }
        localStorage.setItem("tests", JSON.stringify(tests));
        loadTests();
        const editTestModal = bootstrap.Modal.getInstance(document.getElementById("editTestModal"));
        editTestModal.hide();
    });

    loadTests();
});

function navigateToResults() {
    window.location.href = './test-results.html';
}