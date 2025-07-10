import CourseList from './components/Course'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Phonebook from './components/Phonebook'
import './App.css'

function App() {
  const courses = [
    {
    id: 1,
    name: 'Half Stack application development',
    parts: [  
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  },
  
  {
    id: 2,
    name: 'Node.js',
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
    ]
  }
  ]


  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <div className="container">
            <h1 className="navbar-brand mb-0">Full Stack Open - Part 2</h1>
            <div className="navbar-nav">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/courses">Courses</Link>
              <Link className="nav-link" to="/phonebook">Phonebook</Link>
              <Link className="nav-link" to="/exercise3">Exercises</Link>
            </div>
          </div>
        </nav>
        
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<CourseList courses={courses} />} />
            <Route path="/phonebook" element={<Phonebook />} />
            <Route path="/exercise3" element={<Exercise3 />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}








// Exercise 3 component
function Exercise3() {
  return (
    <div>
      <h3>Exercise 3 - To-do list</h3>
      <p>This exercise is not completed yet...</p>
    </div>
  )
}

export default App;
