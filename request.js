document.addEventListener('DOMContentLoaded', () => {
    loadRequests();

    const requestForm = document.getElementById('requestForm');
    requestForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const bookTitle = document.getElementById('bookTitle').value.trim();
        const bookAuthor = document.getElementById('bookAuthor').value.trim();

        if (bookTitle && bookAuthor) {
            const requests = JSON.parse(localStorage.getItem('bookRequests')) || [];
            requests.push({ title: bookTitle, author: bookAuthor, status: 'Pending' });
            localStorage.setItem('bookRequests', JSON.stringify(requests));

            document.getElementById('bookTitle').value = '';
            document.getElementById('bookAuthor').value = '';

            loadRequests();
        }
    });
});

// Load all book requests
function loadRequests() {
    const requests = JSON.parse(localStorage.getItem('bookRequests')) || [];
    const requestList = document.getElementById('requestList');
    requestList.innerHTML = '';

    if (requests.length === 0) {
        requestList.innerHTML = "<p>No pending requests.</p>";
    } else {
        requests.forEach((request, index) => {
            const requestDiv = document.createElement('div');
            requestDiv.className = 'request';
            requestDiv.innerHTML = `
                <p><strong>Title:</strong> ${request.title}</p>
                <p><strong>Author:</strong> ${request.author}</p>
                <p><strong>Status:</strong> ${request.status}</p>
                <button class="approve" onclick="approveRequest(${index})">Approve</button>
                <button class="reject" onclick="rejectRequest(${index})">Reject</button>
                <hr>
            `;
            requestList.appendChild(requestDiv);
        });
    }
}

// Approve request
function approveRequest(index) {
    const requests = JSON.parse(localStorage.getItem('bookRequests')) || [];
    requests[index].status = 'Approved';
    localStorage.setItem('bookRequests', JSON.stringify(requests));
    loadRequests();
}

// Reject request
function rejectRequest(index) {
    const requests = JSON.parse(localStorage.getItem('bookRequests')) || [];
    requests[index].status = 'Rejected';
    localStorage.setItem('bookRequests', JSON.stringify(requests));
    loadRequests();
}

// Back button
function goBack() {
    window.history.back();
}
