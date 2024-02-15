// Get elements
const complaintType = document.getElementById('complaintType');
const category = document.getElementById('category');
const submitComplaint = document.getElementById('submitComplaint');
const cancelComplaint = document.getElementById('cancelComplaint');
const complaintForm = document.getElementById('complaintForm');
const successScreen = document.getElementById('successScreen');
const complaintIdDisplay = document.getElementById('complaintId');

// Complaint types and their respective categories
const complaintCategories = {
    billing: ['Category A', 'Category B', 'Category C'],
    voltage: ['Category X', 'Category Y', 'Category Z'],
    disruption: ['Category I', 'Category II', 'Category III'],
    streetLight: ['Category Alpha', 'Category Beta', 'Category Gamma'],
    pole: ['Category One', 'Category Two', 'Category Three']
};

// Function to populate category dropdown based on selected complaint type
function populateCategories() {
    const selectedType = complaintType.value;
    category.innerHTML = ''; // Clear previous options

    const categories = complaintCategories[selectedType];
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        category.appendChild(option);
    });
}

// Event listener for complaint type change
complaintType.addEventListener('change', populateCategories);

// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent default form submission behavior
    // Simulate successful submission
    const complaintId = generateUniqueId(); // Generate unique complaint ID
    complaintForm.style.display = 'none'; // Hide the form
    successScreen.style.display = 'block'; // Show the success screen
    complaintIdDisplay.textContent = complaintId; // Display complaint ID
}

// Event listener for form submission
submitComplaint.addEventListener('click', submitForm);

// Function to handle cancellation
function cancelForm() {
    // Reset form fields
    complaintForm.reset();
}

// Event listener for cancellation
cancelComplaint.addEventListener('click', cancelForm);

// Function to generate a unique complaint ID
function generateUniqueId() {
    return 'CMP' + Math.random().toString(36).substr(2, 9); // Generate a random alphanumeric string
}
