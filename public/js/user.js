// user.js - User side functionality for Ebus Management System

// Initialize Firebase
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, get, query, orderByChild, equalTo } from "firebase/database";

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

// User Registration
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('User registered:', user);
            // Additional user data can be stored in the database
        })
        .catch((error) => {
            console.error('Error registering user:', error);
        });
});

// User Login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('User logged in:', user);
            // Redirect to bus search page or show bus details
        })
        .catch((error) => {
            console.error('Error logging in:', error);
        });
});

// Search for buses by location
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const location = document.getElementById('searchLocation').value;

    const busesRef = ref(database, 'buses');
    const busesQuery = query(busesRef, orderByChild('location'), equalTo(location));

    get(busesQuery).then((snapshot) => {
        if (snapshot.exists()) {
            const buses = snapshot.val();
            console.log('Buses found:', buses);
            // Display buses and arrival times to the user
        } else {
            console.log('No buses found for this location.');
        }
    }).catch((error) => {
        console.error('Error fetching buses:', error);
    });
});