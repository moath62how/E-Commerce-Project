const resultsContainer = document.getElementById('resultsContainer');
const testResults = JSON.parse(localStorage.getItem('testResults')) || [];

if (testResults.length === 0) {
    resultsContainer.innerHTML = '<p class="text-center">No test results found.</p>';
} else {
    testResults.forEach((result, index) => {
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('mb-4', 'border', 'p-3', 'rounded');
        resultDiv.innerHTML = `
            <h5>${index + 1}. ${result.TestName} (Test ID: ${result.testId || 'N/A'})</h5>
            <p><strong>Score:</strong> ${result.Score}/${result.TotalQuestions}</p>
            <p><strong>Date:</strong> ${new Date(result.Date).toLocaleString()}</p>
            <h6>Wrong Questions:</h6>
            <ul>
                ${result.WrongQuestions.map(wrong => `
                    <li>
                        <strong>Question:</strong> ${wrong.QuestionHeader}<br>
                        <strong>Correct Answer:</strong> ${wrong.CorrectAnswer}
                    </li>
                `).join('')}
            </ul>
        `;
        resultsContainer.appendChild(resultDiv);
    });
}