// driver.js

// Initialize Firebase
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Function to log in driver
document.getElementById('driverLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('driverEmail').value;
    const password = document.getElementById('driverPassword').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Driver logged in:", userCredential.user);
            // Redirect to bus details posting section
            window.location.href = "post-bus-details.html";
        })
        .catch((error) => {
            console.error("Error logging in:", error);
            alert("Login failed. Please check your credentials.");
        });
});

// Function to post bus details
document.getElementById('busDetailsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const busNumber = document.getElementById('busNumber').value;
    const busType = document.getElementById('busType').value;
    const contactInfo = document.getElementById('contactInfo').value;

    const busDetailsRef = ref(database, 'buses/' + busNumber);
    set(busDetailsRef, {
        type: busType,
        contact: contactInfo
    })
    .then(() => {
        console.log("Bus details posted successfully.");
        alert("Bus details posted successfully.");
    })
    .catch((error) => {
        console.error("Error posting bus details:", error);
        alert("Failed to post bus details.");
    });
});