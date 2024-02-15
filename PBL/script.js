document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('TCSregistrationForm');
    const acknowledgmentContainer = document.getElementById('TCSacknowledgmentContainer');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const randomCustomerId = Math.floor(Math.random() * 1000000000000);
        const customerName = document.getElementById('TCScustomerName').value;
        const email = document.getElementById('TCSe-mail').value;

        acknowledgmentContainer.innerHTML = `
            <h2>Consumer Registration Successful</h2>
            <div><strong>Customer ID:</strong> ${randomCustomerId}</div>
            <div><strong>Customer Name:</strong> ${customerName}</div>
            <div><strong>Email:</strong> ${email}</div>
        `;
        acknowledgmentContainer.style.display = 'block';
        registrationForm.style.display = 'none';
        registrationForm.reset();
    });
});
