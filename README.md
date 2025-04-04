# Ebus Management System

## Overview
The Ebus Management System is a web application designed to facilitate the management of bus services. It allows admins to create accounts for drivers, enables drivers to post their bus details, and provides users with the ability to search for buses by location and view arrival times.

## Project Structure
```
ebus-management-system
├── public
│   ├── index.html
│   ├── admin.html
│   ├── driver.html
│   ├── user.html
│   ├── css
│   │   ├── styles.css
│   └── js
│       ├── admin.js
│       ├── driver.js
│       ├── user.js
│       ├── new-user.js
│       └── firebase-config.js
├── README.md
├── .gitignore
└── firebase.json
```

## Technologies Used
- HTML
- CSS
- JavaScript
- Firebase

## Features
- **Admin Side**: Admins can create login accounts for drivers.
- **Driver Side**: Drivers can log in and post their bus details, including bus number, type, and contact information.
- **User Side**: Users can register, log in, and search for buses by location to see arrival times.

## Setup Instructions

### Prerequisites
- A Firebase account
- Node.js and npm installed (optional for local development)

### Steps to Set Up

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/ebus-management-system.git
   cd ebus-management-system
   ```

2. **Configure Firebase**
   - Create a new Firebase project in the Firebase console.
   - Enable Authentication and Firestore Database.
   - Copy the Firebase configuration from your project settings and paste it into `public/js/firebase-config.js`.

3. **Install Dependencies**
   If you are using any package manager, install the necessary dependencies. (This project may not require any additional packages, but if you add any, include them here.)

4. **Run the Application**
   - Open `public/index.html` in your web browser to view the application.
   - For local development, consider using a local server (like Live Server in VS Code).

5. **Deploying to Firebase Hosting**
   - Install Firebase CLI if you haven't already:
     ```bash
     npm install -g firebase-tools
     ```
   - Log in to Firebase:
     ```bash
     firebase login
     ```
   - Initialize Firebase in your project:
     ```bash
     firebase init
     ```
   - Choose Hosting and follow the prompts.
   - Deploy your application:
     ```bash
     firebase deploy
     ```

## Logging
The application includes logging for important actions, such as user logins and data submissions, to help track usage and identify issues.

## Contribution
Feel free to fork the repository and submit pull requests for any improvements or features you would like to add.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
