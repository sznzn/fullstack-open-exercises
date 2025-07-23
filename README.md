# Full Stack Open Exercises

This repository contains all exercises from the Full Stack Open course.

## Project Structure

```
fullstack-open-exercises/
├── README.md
├── .gitignore
└── part1/                  # Part 1 - React Basics
    ├── package.json
    ├── src/
    │   ├── App.jsx         # Main app with routing
    │   ├── main.jsx
    │   ├── pages/          # Page components
    │   │   ├── CourseInfo.jsx
    │   │   ├── Unicafe.jsx
    │   │   └── Anecdotes.jsx
    │   └── components/     # Shared components
    ├── public/
    ├── index.html
    ├── vite.config.js
    └── eslint.config.js
└── part2/                  # Part 2 - Communicating with Server
    ├── package.json
    ├── src/
    │   ├── App.jsx         # Main app with routing
    │   ├── main.jsx
    │   ├── components/     # Components
    │   │   ├── Home.jsx
    │   │   ├── Course.jsx
    │   │   ├── Phonebook.jsx
    │   │   └── Countries.jsx
    │   └── assets/
    ├── public/
    ├── index.html
    ├── vite.config.js
    ├── eslint.config.js
    └── db.json            # JSON Server database
```

## Completed Exercises

- ✅ **part1** - React Basics (Unified Application)
  - **CourseInfo** - Course information display app
    - Displays course title and exercise counts for each part
    - Uses React components and props
  - **Unicafe** - Feedback collection app (coming soon)
  - **Anecdotes** - Anecdotes voting app (coming soon)

- ✅ **part2** - Communicating with Server
  - **Course** - Course information with server communication
    - Displays course parts and exercise counts
    - Demonstrates React state management
  - **Phonebook** - Full CRUD phonebook application
    - Add, delete, and update contacts
    - Search functionality
    - Server communication with JSON Server
    - REST API operations (GET, POST, PUT, DELETE)
  - **Countries** - Country information app (coming soon)

## How to Run

### Part 1 - React Basics
```bash
cd part1
npm install
npm run dev
```

Then open your browser and navigate to:
- `http://localhost:5173/` - Home page with exercise selection
- `http://localhost:5173/courseinfo` - CourseInfo exercise
- `http://localhost:5173/unicafe` - Unicafe exercise (coming soon)
- `http://localhost:5173/anecdotes` - Anecdotes exercise (coming soon)

### Part 2 - Communicating with Server
```bash
cd part2
npm install
npm run dev          # Start frontend (port 5173)
npm run server       # Start JSON Server (port 3001)
```

Then open your browser and navigate to:
- `http://localhost:5173/` - Home page with exercise selection
- `http://localhost:5173/course` - Course exercise
- `http://localhost:5173/phonebook` - Phonebook application
- `http://localhost:5173/countries` - Countries exercise (coming soon)

## Technology Stack

### Part 1
- React 19.1.0
- React Router DOM (for navigation)
- Vite 6.3.5
- ESLint

### Part 2
- React 19.1.0
- React Router DOM (for navigation)
- Axios (for HTTP requests)
- JSON Server (mock backend)
- Vite 6.3.5
- ESLint

## Course Progress

- [x] Part 1: React Basics
  - [x] CourseInfo (completed)
  - [x] Unicafe (completed)
  - [x] Anecdotes (completed)
- [x] Part 2: Communicating with Server
  - [x] Course (completed)
  - [x] Phonebook (completed)
  - [x] Countries (completed)
- [ ] Part 3: Programming a server with NodeJS and Express (to be added)

## About

This repository follows the Full Stack Open course structure. Each part is implemented as a unified React application with multiple pages, making it easier to navigate between exercises and share common components.

### Part 2 Features
- **Server Communication**: Using Axios for HTTP requests
- **CRUD Operations**: Full Create, Read, Update, Delete functionality
- **JSON Server**: Mock backend for development
- **Error Handling**: Proper error handling for API calls
- **State Management**: React state management with hooks