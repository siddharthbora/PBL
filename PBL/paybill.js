document.addEventListener('DOMContentLoaded', function() {
    const billCheckboxes = document.querySelectorAll('.billCheckbox');
    const totalAmountElement = document.getElementById('totalAmount');
    const paymentButton = document.getElementById('paymentButton');

    // Update total amount when checkboxes are clicked
    billCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            calculateTotalAmount();
        });
    });
    document.getElementById("logoutButton").addEventListener("click", function() {
        // Redirect to login.html
        window.location.href = "login.html";
    });
    // Calculate total bill amount
    function calculateTotalAmount() {
        let totalAmount = 0;
        billCheckboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                const row = checkbox.closest('tr');
                const payableAmount = parseFloat(row.children[3].textContent.replace('$', ''));
                totalAmount += payableAmount;
            }
        });
        totalAmountElement.textContent = 'Total Amount: $' + totalAmount;
    }

    // Proceed to pay
    paymentButton.addEventListener('click', function() {
        // Redirect to payment screen
        window.location.href = 'payment.html';
    });
});
