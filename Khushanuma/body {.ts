body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    color: #333;
    padding: 20px;
    margin: 0;
}

.container {
    max-width: 600px;
    margin: auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    color: #333;
}

label {
    display: block;
    margin: 10px 0 5px;
}

input[type="number"],
input[type="date"],
input[type="text"] {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    background-color: #007BFF;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
}

button:hover {
    background-color: #0056b3;
}

.hidden {
    display: none;
}

h2 {
    color: #333;
}

#resultMessage {
    background-color: #fffbe6;
    padding: 20px;
    border: 1px solid #f0e68c;
    border-radius: 10px;
}

#message {
    color: #d9534f;
}

#message.success {
    color: #5bc0de;
}




let medicines = [];
let courseDuration = 0;

function getMedicineDetails() {
    let numMedicinesInStock = document.getElementById('numMedicinesInStock').value;
    courseDuration = document.getElementById('courseDuration').value;

    if (numMedicinesInStock > 0 && courseDuration > 0) {
        document.getElementById('medicineForm').classList.add('hidden');
        let medicineDetailsDiv = document.getElementById('medicineDetails');
        medicineDetailsDiv.classList.remove('hidden');
        generateMedicineInputFields(numMedicinesInStock);
    }
}

function generateMedicineInputFields(numMedicinesInStock) {
    let medicinesDiv = document.getElementById('medicines');
    medicinesDiv.innerHTML = '';

    for (let i = 0; i < numMedicinesInStock; i++) {
        let medicineDiv = document.createElement('div');
        medicineDiv.innerHTML = `
            <h3>Medicine ${i + 1}</h3>
            <label for="name${i}">Name of Medicine:</label>
            <input type="text" id="name${i}" required>

            <label for="productionDate${i}">Production Date (YYYY-MM-DD):</label>
            <input type="date" id="productionDate${i}" required>

            <label for="expiryDate${i}">Expiry Date (YYYY-MM-DD):</label>
            <input type="date" id="expiryDate${i}" required>

            <label for="courseStartDate${i}">Course Start Date (YYYY-MM-DD):</label>
            <input type="date" id="courseStartDate${i}" required>

            <label for="stockQuantity${i}">Stock Quantity Available (days):</label>
            <input type="number" id="stockQuantity${i}" required min="1">
        `;
        medicinesDiv.appendChild(medicineDiv);
    }
}

function checkStock() {
    medicines = [];
    let numMedicinesInStock = document.getElementById('numMedicinesInStock').value;
    let today = new Date(); // Get today's system date

    for (let i = 0; i < numMedicinesInStock; i++) {
        let name = document.getElementById(`name${i}`).value;
        let productionDate = new Date(document.getElementById(`productionDate${i}`).value);
        let expiryDate = new Date(document.getElementById(`expiryDate${i}`).value);
        let courseStartDate = new Date(document.getElementById(`courseStartDate${i}`).value);
        let stockQuantity = parseInt(document.getElementById(`stockQuantity${i}`).value);

        medicines.push({
            name,
            productionDate,
            expiryDate,
            courseStartDate,
            stockQuantity
        });
    }

    let reminderMessage = '';
    let allMedicinesSafe = true;

    medicines.forEach(medicine => {
        let totalMedicineRequired = courseDuration;  // Assuming 1 medicine per day
        let totalMedicineStock = medicine.stockQuantity;

        // Calculate medicine depletion date
        let stockEndDate = new Date(medicine.courseStartDate);
        stockEndDate.setDate(stockEndDate.getDate() + totalMedicineStock);

        // Calculate alert date (5 days before stock runs out)
        let reminderDate = new Date(stockEndDate);
        reminderDate.setDate(reminderDate.getDate() - 5);

        // Days remaining for stock to end
        let daysLeftForStock = Math.ceil((stockEndDate - today) / (1000 * 60 * 60 * 24));

        // Days remaining for expiry
        let daysLeftForExpiry = Math.ceil((medicine.expiryDate - today) / (1000 * 60 * 60 * 24));

        // Stock depletion warnings
        if (daysLeftForStock > 5) {
            reminderMessage += `Stock for ${medicine.name} is sufficient.<br>`;
        } else if (daysLeftForStock > 0) {
            reminderMessage += `Stock for ${medicine.name} will end in ${daysLeftForStock} days. Please reorder.<br>`;
            allMedicinesSafe = false;
        } else {
            reminderMessage += `Stock for ${medicine.name} has finished. Please refill immediately!<br>`;
            allMedicinesSafe = false;
        }

        // Expiry warnings
        if (daysLeftForExpiry <= 5 && daysLeftForExpiry > 0) {
            reminderMessage += `The expiry date for ${medicine.name} is in ${daysLeftForExpiry} days. Use with caution.<br>`;
            allMedicinesSafe = false;
        } else if (daysLeftForExpiry <= 0) {
            reminderMessage += `The expiry date for ${medicine.name} has passed. DO NOT USE expired medicine!<br>`;
            allMedicinesSafe = false;
        }
    });

    // Display messages
    let resultDiv = document.getElementById('resultMessage');
    let messageDiv = document.getElementById('message');

    if (reminderMessage) {
        resultDiv.classList.remove('hidden');
        messageDiv.innerHTML = reminderMessage;
        document.getElementById('medicineDetails').classList.add('hidden');
    } else {
        resultDiv.classList.remove('hidden');
        messageDiv.innerHTML = "All medicines have sufficient stock and are safe to use!";
        messageDiv.classList.add('success');
        document.getElementById('medicineDetails').classList.add('hidden');
    }
}

function endCourse() {
    // Save the course details and reset for a new course
    alert("Your course has been saved.");
    document.getElementById('resultMessage').classList.add('hidden');
    document.getElementById('medicineForm').classList.remove('hidden');
    document.getElementById('numMedicinesInStock').value = '';
    document.getElementById('courseDuration').value = '';
}



#new courseDurationlet medicines = [];
let courseDuration = 0;

function getMedicineDetails() {
    let numMedicinesInStock = document.getElementById('numMedicinesInStock').value;
    courseDuration = document.getElementById('courseDuration').value;

    if (numMedicinesInStock > 0 && courseDuration > 0) {
        document.getElementById('medicineForm').classList.add('hidden');
        let medicineDetailsDiv = document.getElementById('medicineDetails');
        medicineDetailsDiv.classList.remove('hidden');
        generateMedicineInputFields(numMedicinesInStock);
    } else {
        alert("Please enter valid values for medicines in stock and course duration.");
    }
}

function generateMedicineInputFields(numMedicinesInStock) {
    let medicinesDiv = document.getElementById('medicines');
    medicinesDiv.innerHTML = '';

    for (let i = 0; i < numMedicinesInStock; i++) {
        let medicineDiv = document.createElement('div');
        medicineDiv.classList.add('medicine-item');
        medicineDiv.innerHTML = `
            <h3>Medicine ${i + 1}</h3>
            <label for="name${i}">Name of Medicine:</label>
            <input type="text" id="name${i}" required>

            <label for="productionDate${i}">Production Date (YYYY-MM-DD):</label>
            <input type="date" id="productionDate${i}" required>

            <label for="expiryDate${i}">Expiry Date (YYYY-MM-DD):</label>
            <input type="date" id="expiryDate${i}" required>

            <label for="courseStartDate${i}">Course Start Date (YYYY-MM-DD):</label>
            <input type="date" id="courseStartDate${i}" required>

            <label for="stockQuantity${i}">Stock Quantity Available (days):</label>
            <input type="number" id="stockQuantity${i}" required min="1">
        `;
        medicinesDiv.appendChild(medicineDiv);
    }
}

function checkStock() {
    medicines = [];
    let numMedicinesInStock = document.getElementById('numMedicinesInStock').value;
    let today = new Date(); // Get today's system date

    for (let i = 0; i < numMedicinesInStock; i++) {
        let name = document.getElementById(`name${i}`).value;
        let productionDate = new Date(document.getElementById(`productionDate${i}`).value);
        let expiryDate = new Date(document.getElementById(`expiryDate${i}`).value);
        let courseStartDate = new Date(document.getElementById(`courseStartDate${i}`).value);
        let stockQuantity = parseInt(document.getElementById(`stockQuantity${i}`).value);

        if (!name || isNaN(productionDate) || isNaN(expiryDate) || isNaN(courseStartDate) || stockQuantity <= 0) {
            alert("Please fill all fields correctly.");
            return;
        }

        medicines.push({
            name,
            productionDate,
            expiryDate,
            courseStartDate,
            stockQuantity
        });
    }

    let reminderMessage = '';
    let allMedicinesSafe = true;

    medicines.forEach(medicine => {
        let totalMedicineRequired = courseDuration;  // Assuming 1 medicine per day
        let totalMedicineStock = medicine.stockQuantity;

        // Calculate medicine depletion date
        let stockEndDate = new Date(medicine.courseStartDate);
        stockEndDate.setDate(stockEndDate.getDate() + totalMedicineStock);

        // Calculate alert date (5 days before stock runs out)
        let reminderDate = new Date(stockEndDate);
        reminderDate.setDate(reminderDate.getDate() - 5);

        // Days remaining for stock to end
        let daysLeftForStock = Math.ceil((stockEndDate - today) / (1000 * 60 * 60 * 24));

        // Days remaining for expiry
        let daysLeftForExpiry = Math.ceil((medicine.expiryDate - today) / (1000 * 60 * 60 * 24));

        // Stock depletion warnings
        if (daysLeftForStock > 5) {
            reminderMessage += `Stock for ${medicine.name} is sufficient.<br>`;
        } else if (daysLeftForStock > 0) {
            reminderMessage += `Stock for ${medicine.name} will end in ${daysLeftForStock} days. Please reorder.<br>`;
            allMedicinesSafe = false;
        } else {
            reminderMessage += `Stock for ${medicine.name} has finished. Please refill immediately!<br>`;
            allMedicinesSafe = false;
        }

        // Expiry warnings
        if (daysLeftForExpiry <= 5 && daysLeftForExpiry > 0) {
            reminderMessage += `The expiry date for ${medicine.name} is in ${daysLeftForExpiry} days. Use with caution.<br>`;
            allMedicinesSafe = false;
        } else if (daysLeftForExpiry <= 0) {
            reminderMessage += `The expiry date for ${medicine.name} has passed. DO NOT USE expired medicine!<br>`;
            allMedicinesSafe = false;
        }
    });

    // Display messages
    let resultDiv = document.getElementById('resultMessage');
    let messageDiv = document.getElementById('message');

    if (reminderMessage) {
        resultDiv.classList.remove('hidden');
        messageDiv.innerHTML = reminderMessage;
        document.getElementById('medicineDetails').classList.add('hidden');
    } else {
        resultDiv.classList.remove('hidden');
        messageDiv.innerHTML = "All medicines have sufficient stock and are safe to use!";
        messageDiv.classList.add('success');
        document.getElementById('medicineDetails').classList.add('hidden');
    }
}

function endCourse() {
    // Save the course details and reset for a new course
    alert("Your course has been saved.");
    document.getElementById('resultMessage').classList.add('hidden');
    document.getElementById('medicineForm').classList.remove('hidden');
    document.getElementById('numMedicinesInStock').value = '';
    document.getElementById('courseDuration').value = '';
}
