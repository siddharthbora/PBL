document.addEventListener("DOMContentLoaded", function() {
    // Sample transaction data
    const transactionData = [
        {
            transactionNumber: "T123",
            receiptNumber: "R123",
            transactionDate: "2024-02-15",
            transactionType: "Online Payment",
            paymentType: "Credit Card",
            paymentGateway: "Stripe",
            customerNumber: "204786197",
            billNumber: "123456",
            paidAmount: "$100",
            transactionAmount: "$100",
            acknowledgementDate: "2024-02-15"
        },
        // Add more transaction objects as needed
    ];

    // Function to populate transaction details
    function populateTransactionDetails() {
        const transactionTable = document.getElementById("transactionDetails");
        transactionData.forEach(transaction => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${transaction.transactionNumber}</td>
                <td>${transaction.receiptNumber}</td>
                <td>${transaction.transactionDate}</td>
                <td>${transaction.transactionType}</td>
                <td>${transaction.paymentType}</td>
                <td>${transaction.paymentGateway}</td>
                <td>${transaction.customerNumber}</td>
                <td>${transaction.billNumber}</td>
                <td>${transaction.paidAmount}</td>
                <td>${transaction.transactionAmount}</td>
                <td>${transaction.acknowledgementDate}</td>
            `;
            transactionTable.appendChild(row);
        });
    }

    // Call function to populate transaction details
    populateTransactionDetails();

    // Get the username from localStorage
    const username = localStorage.getItem('username');

    // Check if the username exists
    if (username) {
        // Update the span element with the username
        document.getElementById('username').textContent = username;
    }

    // Logout functionality
    const logoutButton = document.getElementById('logoutButton');
    logoutButton.addEventListener('click', function() {
        // Clear the username from localStorage
        localStorage.removeItem('username');
        // Redirect to the login page
        window.location.href = 'login.html'; // Change 'login.html' to your actual login page URL
    });

    // Back to home functionality
    const backToHomeButton = document.getElementById('backToHome');
    backToHomeButton.addEventListener('click', function() {
        // Redirect to the home page
        window.location.href = 'home.html'; // Change 'home.html' to your actual home page URL
    });

    // Get other elements needed for payment functionality
    const payNowButton = document.getElementById("payNowButton");
    const makePaymentButton = document.getElementById("makePaymentButton");
    const paymentForm = document.getElementById("paymentForm");
    const content = document.getElementById("content");
    const customerDetails = document.getElementById("customerTable");
    const tranasaction_table=document.getElementById("tranasaction_table")

    payNowButton.addEventListener("click", function() {
        // Hide other content when displaying payment form
        content.style.display = 'none';
        customerDetails.style.display = 'none';
        // Display payment form
        paymentForm.style.display = "block";
    });
    makePaymentButton.addEventListener("click", function() {
        // Hide other content when displaying payment form
        event.preventDefault(); 
        content.style.display = 'none';
        customerDetails.style.display = 'none';
        // Display payment form
        paymentForm.style.display = "none";
        tranasaction_table.style.display="block"
    });
});