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
```

## Completed Exercises

- ✅ **part1** - React Basics (Unified Application)
  - **CourseInfo** - Course information display app
    - Displays course title and exercise counts for each part
    - Uses React components and props
  - **Unicafe** - Feedback collection app (coming soon)
  - **Anecdotes** - Anecdotes voting app (coming soon)

## How to Run

The part1 application is a unified React app with multiple pages:

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

## Technology Stack

- React 19.1.0
- React Router DOM (for navigation)
- Vite 6.3.5
- ESLint

## Course Progress

- [x] Part 1: React Basics
  - [x] CourseInfo (completed)
  - [ ] Unicafe (in progress)
  - [ ] Anecdotes (to be added)
- [ ] Part 2: Communicating with Server (to be added)
- [ ] Part 3: Programming a server with NodeJS and Express (to be added)

## About

This repository follows the Full Stack Open course structure. Part 1 is implemented as a unified React application with multiple pages, making it easier to navigate between exercises and share common components.