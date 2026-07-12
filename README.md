# 🔐 React Firebase Role-Based Authentication System

A role-based authentication web application built with **React.js** and **Firebase Authentication**.

This project demonstrates a complete authentication workflow including user registration, login validation, protected routes, and role-based dashboard access. Users are automatically redirected to different areas of the application depending on their assigned role.

---

## 🚀 Project Overview

The application provides a complete user authentication experience with different access levels:

- 👑 **Admin Users** → Access the protected Admin Dashboard.
- 👤 **Regular Users** → Access the User Dashboard.
- 🔒 **Unauthenticated Users** → Cannot access protected pages and are redirected to the Login page.

The main goal of this project is to practice building real-world React applications with authentication, routing, and user access management.

---

## ✨ Features

### 🔐 Authentication
- User registration
- User login/logout
- Firebase Authentication integration
- Form validation
- Authentication state tracking
- Error handling for invalid credentials

### 🛡️ Authorization & Protected Routes
- Role-based dashboard access
- Protected routes using authentication checks
- Automatic user redirection
- Admin and user permission separation

### 💻 User Experience
- Responsive design
- Clean authentication flow
- Reusable React components
- Global authentication state management using Context API

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| React.js | Frontend UI development |
| Firebase Authentication | User authentication and session management |
| React Router | Page navigation and protected routes |
| Context API | Global authentication state management |
| JavaScript (ES6+) | Application logic |
| HTML5 | Page structure |
| CSS3 | Styling and responsive design |

---

## 🔄 Application Flow

```
              User Visits Website
                       |
              Register / Login
                       |
          Firebase Authentication
                       |
              Check User Role
                 /          \
          Admin User      Regular User
              |                |
              ▼                ▼
      Admin Dashboard    User Dashboard
```

---

## 📂 Project Structure

```
react-firebase-role-authentication/
└── src/
    ├── Components/
    │   ├── LoginRegister/     # Login and registration forms
    │   └── Assets/            # Images and static assets
    ├── context/
    │   └── AuthContext.jsx    # Global authentication state (Context API)
    ├── firebase.js             # Firebase app initialization and config
    ├── ProtectedRoute.jsx       # Route guard for authenticated/role-based access
    └── App.js                  # Routing and app entry
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Hassan-Alzouri/react-firebase-role-authentication.git
cd react-firebase-role-authentication
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Firebase

Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/), enable Authentication, then create a `.env` file in the project root:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

Update `src/firebase.js` to read these from `process.env` instead of hardcoded values.

### 4. Start the application

```bash
npm start
```

The application will run at `http://localhost:3000`.

---

## 📚 What I Learned

Through this project, I practiced:

- Building React applications with reusable components
- Implementing Firebase Authentication
- Managing global state using Context API
- Creating protected routes
- Handling user roles and permissions
- Designing responsive user interfaces

---

## 📌 Project Background

This project was developed as a technical assessment task to demonstrate frontend development skills, React architecture, authentication implementation, and problem-solving ability.

---

## 📄 License

This project is for educational and portfolio purposes.
