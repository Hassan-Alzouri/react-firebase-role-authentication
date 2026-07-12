# React Firebase Role-Based Authentication System

A role-based authentication web application built with React.js and Firebase Authentication.

This project demonstrates a complete authentication flow including user registration, login validation, protected routes, and role-based access control. Users are redirected to different dashboards depending on their assigned role.

## Project Overview

The application allows users to:

- Create an account
- Log in securely using Firebase Authentication
- Access protected pages after authentication
- Navigate to dashboards based on user roles

The system supports two types of users:

- **Admin users** → Access the protected Admin Dashboard
- **Regular users** → Access the User Dashboard

## Features

### Authentication

- User registration
- User login
- Firebase Authentication integration
- Form validation
- Error handling
- Authentication state management

### Authorization

- Protected routes
- Role-based access control
- Admin dashboard protection
- User dashboard protection
- Automatic redirection based on user role

### User Interface

- Responsive design
- Clean navigation flow
- Separate dashboard experiences
- Reusable React components

## Technologies Used

- React.js
- Firebase Authentication
- React Router
- JavaScript (ES6+)
- HTML5
- CSS3

## Application Flow
User
|
|-- Register/Login
|
Firebase Authentication
|
|-- Check User Role
|
|------ Admin
| |
| ---> Admin Dashboard
|
|------ User
|
---> User Dashboard

## Project Structure
src/
│
├── components/
│ └── Reusable UI components
│
├── context/
│ └── Authentication state management
│
├── pages/
│ ├── Login
│ ├── Register
│ ├── Admin Dashboard
│ └── User Dashboard
│
├── routes/
│ └── Protected routes configuration
│
└── firebase/
└── Firebase configuration


## Setup and Installation

Clone the repository:

git clone https://github.com/Hassan-Alzouri/login-Page.git

Navigate to the project folder:

cd login-Page

Install dependencies:

npm install

Create a Firebase project and configure your Firebase credentials.

Create a .env file:

REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id

Start the application:

npm start

The application will run on:

http://localhost:3000

##Security Notes
Firebase handles authentication securely.
Protected routes prevent unauthorized page access.
User permissions are controlled through role-based logic.

##What This Project Demonstrates
This project demonstrates practical experience with:

React component architecture
Authentication workflows
Firebase integration
Client-side routing
State management
Access control implementation
Building real-world frontend applications

##License
This project is for educational and portfolio purposes.

