# Classroom Project - Student Management System

A full-stack web application for managing student records with a React frontend and Express.js/MongoDB backend.

## 📋 Project Structure

```
Student Project/
├── StudentProject/          # Backend (Node.js/Express)
│   ├── server.js           # Main server file
│   ├── package.json        # Backend dependencies
│   ├── config/
│   │   └── db.js          # Database configuration
│   ├── models/
│   │   ├── Student.js     # Student schema
│   │   └── counter.js     # Counter schema
│   ├── controller/
│   │   └── studentController.js  # Business logic
│   └── routes/
│       └── studentRouter.js      # API endpoints
└── mainfrontend/            # Frontend (React)
    ├── package.json         # Frontend dependencies
    ├── public/
    │   └── index.html      # Main HTML file
    └── src/
        ├── App.js          # Main App component
        ├── api.js          # API calls
        └── components/
            ├── AddStudent.js      # Add student form
            ├── EditStudent.js     # Edit student form
            └── StudentList.js     # Display students
```

## 🚀 Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB

### Frontend
- **React** - UI library
- **JavaScript** - Client-side logic
- **CSS** - Styling

## 📦 Installation

### Backend Setup
```bash
cd Student\ Project/StudentProject
npm install
```

### Frontend Setup
```bash
cd Student\ Project/mainfrontend
npm install
```

## 🏃 Running the Application

### Start Backend Server
```bash
cd Student\ Project/StudentProject
npm start
# Server runs on http://localhost:5000
```

### Start Frontend Development Server
```bash
cd Student\ Project/mainfrontend
npm start
# App opens on http://localhost:3000
```

## 📚 API Endpoints

### Student Routes
- `GET /api/students` - Get all students
- `POST /api/students` - Create new student
- `PUT /api/students/:id` - Update student
- `DELETE /api/students/:id` - Delete student

## 🔧 Configuration

### Database Connection
Update `StudentProject/config/db.js` with your MongoDB connection string:
```javascript
const MONGODB_URI = "mongodb://localhost:27017/classroom";
```

## 📝 Features

✅ View all students
✅ Add new student records
✅ Edit existing student records
✅ Delete student records
✅ Persistent storage with MongoDB

## 👨‍💻 Developer

Created by: **ADHIL7373**

## 📄 License

This project is part of GitHub Classroom
