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

## 🔐 Authentication

- User registration
- User login/logout
- Firebase Authentication integration
- Form validation
- Authentication state tracking
- Error handling for invalid credentials

## 🛡️ Authorization & Protected Routes

- Role-based dashboard access
- Protected routes using authentication checks
- Automatic user redirection
- Admin and user permission separation

## 💻 User Experience

- Responsive design
- Clean authentication flow
- Reusable React components
- Organized project structure
- Global authentication state management using Context API

---

# 🛠️ Technologies Used

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

# 🔄 Application Flow

```
              User Visits Website
                       |
                       |
              Register / Login
                       |
                       |
          Firebase Authentication
                       |
                       |
              Check User Role
                 /          \
                /            \
          Admin User      Regular User
              |                |
              |                |
              ▼                ▼
      Admin Dashboard    User Dashboard
```

---

# 📂 Project Structure

```
src/
│
├── components/
│   └── Reusable UI components
│
├── context/
│   └── Authentication Context
│
├── pages/
│   ├── Login
│   ├── Register
│   ├── Admin Dashboard
│   └── User Dashboard
│
├── routes/
│   └── Protected route configuration
│
├── firebase/
│   └── Firebase configuration
│
└── App.js
```

---

# ⚙️ Installation & Setup

## 1. Clone the repository

```bash
git clone https://github.com/Hassan-Alzouri/login-Page.git
```

## 2. Navigate to the project folder

```bash
cd login-Page
```

## 3. Install dependencies

```bash
npm install
```

## 4. Configure Firebase

Create a Firebase project and add your Firebase configuration.

Create a `.env` file:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
```

## 5. Start the application

```bash
npm start
```

The application will run at:

```
http://localhost:3000
```

---

# 📸 Screenshots

(Add screenshots here)

Example:

```
screenshots/
│
├── <img width="1898" height="938" alt="Screenshot 2026-07-13 010125" src="https://github.com/user-attachments/assets/2520406d-57cb-4c6f-8461-54267507a8f2" />

├──<img width="1900" height="940" alt="Screenshot 2026-07-13 010141" src="https://github.com/user-attachments/assets/64472046-8796-47ab-9811-61eb63ebf4ba" />

├── <img width="1904" height="944" alt="Screenshot 2026-07-13 012634" src="https://github.com/user-attachments/assets/b010e98f-5940-417e-bb0f-06bd35731b46" />

└── <img width="1902" height="947" alt="Screenshot 2026-07-13 012822" src="https://github.com/user-attachments/assets/04123332-b44c-4069-b00c-974dbcd705d0" />

```

---

# 📚 What I Learned

Through this project, I practiced:

- Building React applications with reusable components
- Implementing Firebase Authentication
- Managing global state using Context API
- Creating protected routes
- Handling user roles and permissions
- Designing responsive user interfaces
- Structuring frontend projects professionally

---

# 📌 Project Background

This project was developed as a technical assessment task to demonstrate frontend development skills, React architecture, authentication implementation, and problem-solving ability.

---

# 📄 License

This project is for educational and portfolio purposes.
