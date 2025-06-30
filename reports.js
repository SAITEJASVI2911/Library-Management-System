document.addEventListener('DOMContentLoaded', () => {
    generateChart();
    loadStudentActivity();
});

// Generate Book Chart
function generateChart() {
    const ctx = document.getElementById('bookChart').getContext('2d');
    const bookChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Issued Books', 'Returned Books', 'Requested Books'],
            datasets: [{
                label: 'Books Count',
                data: [120, 95, 30], // Dummy Data
                backgroundColor: ['#4CAF50', '#2196F3', '#FFC107'],
                borderColor: ['#388E3C', '#1976D2', '#FFA000'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Load Student Activity Table
function loadStudentActivity() {
    const students = [
        { name: 'Alice', issued: 5, returned: 5 },
        { name: 'Bob', issued: 7, returned: 6 },
        { name: 'Charlie', issued: 4, returned: 4 },
    ];

    const tbody = document.querySelector('#studentTable tbody');

    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.issued}</td>
            <td>${student.returned}</td>
        `;
        tbody.appendChild(row);
    });
}

// Back button
function goBack() {
    window.history.back();
}
