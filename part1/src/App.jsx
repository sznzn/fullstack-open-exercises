import Menu from './components/Menu'
// import './App.css'

const App = () => {
  return (
    <div>
      <Menu />
      <div className="container">
        <h2>Welcome to Full Stack Open Exercises</h2>
        <p>Select an exercise from the menu above:</p>
        
        <div className="exercises-grid">
          <div className="exercise-card">
            <h3>CourseInfo</h3>
            <p>Course information display app</p>
            <a href="/courseinfo">View →</a>
          </div>
          <div className="exercise-card">
            <h3>Unicafe</h3>
            <p>Feedback collection app</p>
            <a href="/unicafe">View →</a>
          </div>
          <div className="exercise-card">
            <h3>Anecdotes</h3>
            <p>Anecdotes voting app</p>
            <a href="/anecdotes">View →</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App