// This file handles the functionality for the admin side, including creating driver accounts and logging actions.

document.addEventListener('DOMContentLoaded', function() {
    const createAccountForm = document.getElementById('create-account-form');
    const driverEmailInput = document.getElementById('driver-email');
    const driverPasswordInput = document.getElementById('driver-password');
    const driverNameInput = document.getElementById('driver-name');
    const logContainer = document.getElementById('log-container');

    createAccountForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = driverEmailInput.value;
        const password = driverPasswordInput.value;
        const name = driverNameInput.value;

        createDriverAccount(email, password, name);
    });

    function createDriverAccount(email, password, name) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                logAction(`Driver account created for ${name} (${email})`);
                // Optionally, save additional driver details to the database
                saveDriverDetails(user.uid, name, email);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                logAction(`Error creating account: ${errorMessage}`);
            });
    }

    function saveDriverDetails(uid, name, email) {
        const db = firebase.firestore();
        db.collection('drivers').doc(uid).set({
            name: name,
            email: email,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(() => {
            logAction(`Driver details saved for ${name}`);
        })
        .catch((error) => {
            logAction(`Error saving driver details: ${error.message}`);
        });
    }

    function logAction(message) {
        const logEntry = document.createElement('div');
        logEntry.textContent = message;
        logContainer.appendChild(logEntry);
    }
});