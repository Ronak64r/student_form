const form = document.getElementById('registrationForm');
const dobField = document.getElementById('dob');
const ageField = document.getElementById('age');

dobField.addEventListener('change', function() {
    const dobValue = new Date(dobField.value);
    const today = new Date();

    let age = today.getFullYear() - dobValue.getFullYear();
    const monthDiff = today.getMonth() - dobValue.getMonth();
    const dayDiff = today.getDate() - dobValue.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }
    
    if (isNaN(age)) {
        ageField.value = '';
    } else {
        console.log(ageField)
        ageField.value = age;
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Form submit nahi karne dena agar galti hai

    const fullName = document.getElementById('fullName').value.trim();
    const dobValue = dobField.value;
    const address = document.getElementById('address').value.trim();
    const branch = document.getElementById('branch').value;

    const nameRegex = /^[A-Za-z ]+$/;
    if (fullName === '' || !nameRegex.test(fullName)) {
        alert('Please enter a valid Full Name (only alphabets).');
        return;
    }

    if (dobValue === '' || new Date(dobValue) >= new Date()) {
        alert('Please select a valid Date of Birth.');
        return;
    }

    if (address.length < 10) {
        alert('Address must be at least 10 characters long.');
        return;
    }

    if (branch === '') {
        alert('Please select a Branch.');
        return;
    }
    
    alert('Form Submitted Successfully!');
});
