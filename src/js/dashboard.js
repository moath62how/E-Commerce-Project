// Utility function to toggle popup visibility
function togglePopup(popupId, show) {
    const popup = document.getElementById(popupId);
    const overlay = document.getElementById('overlay');

    if (show) {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    } else {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    }
}

// Logout functionality
const logoutButton = document.getElementById('logoutButton');
logoutButton.addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('sessionExpiry');
    window.location.href = 'login.html';
});

// Show popup for past results
const viewResultsButton = document.getElementById('viewResultsButton');
const resultsPopup = document.getElementById('resultsPopup');
const resultsList = document.getElementById('resultsList');
const closeResultsPopup = document.getElementById('closeResultsPopup');

viewResultsButton.addEventListener('click', () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (!currentUser || !currentUser.results || currentUser.results.length === 0) {
    resultsList.innerHTML = '<li>No past results available</li>';
    togglePopup('resultsPopup', true);
    return;
  }

  resultsList.innerHTML = '';
  currentUser.results.forEach((result) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>Test:</strong> ${result.testName}<br>
      <strong>Score:</strong> ${result.score}/${result.totalQuestions}<br>
      <strong>Date:</strong> ${new Date(result.date).toLocaleString()}
    `;
    resultsList.appendChild(li);
  });

  togglePopup('resultsPopup', true);
});

closeResultsPopup.addEventListener('click', () => {
  togglePopup('resultsPopup', false);
});

// Show popup for selecting tests
const startQuizButton = document.getElementById('startQuizButton');
const testPopup = document.getElementById('testPopup');
const testList = document.getElementById('testList');
const closePopup = document.getElementById('closePopup');

startQuizButton.addEventListener('click', () => {
    const tests = JSON.parse(localStorage.getItem('tests')) || [];
    testList.innerHTML = '';

    if (tests.length === 0) {
        testList.innerHTML = '<li>No tests available</li>';
    } else {
        tests.forEach((test, index) => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.textContent = test.QuizName;
            button.addEventListener('click', () => {
                window.location.href = `homeTest.html?testId=${index}`;
            });
            li.appendChild(button);
            testList.appendChild(li);
        });
    }

    togglePopup('testPopup', true);
});

closePopup.addEventListener('click', () => {
    togglePopup('testPopup', false);
});

// Close popups when clicking on the overlay
const overlay = document.getElementById('overlay');
overlay.addEventListener('click', () => {
    togglePopup('testPopup', false);
    togglePopup('resultsPopup', false);
});