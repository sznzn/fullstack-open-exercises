import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Menu from './components/Menu'
import CourseInfo from './pages/CourseInfo'
import Unicafe from './pages/Unicafe'
import Anecdotes from './pages/Anecdotes'
 

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courseinfo" element={<CourseInfo />} />
            <Route path="/unicafe" element={<Unicafe />} />
            <Route path="/anecdotes" element={<Anecdotes />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

const Home = () => {
  return (
    <div>
      <h2>Welcome to Full Stack Open Exercises</h2>
      <p>Select an exercise from the menu above:</p>
      
      <div className="row mt-4">
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">CourseInfo</h5>
              <p className="card-text">Course information display app</p>
              <Link to="/courseinfo" className="btn btn-primary">View →</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Unicafe</h5>
              <p className="card-text">Feedback collection app</p>
              <Link to="/unicafe" className="btn btn-primary">View →</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Anecdotes</h5>
              <p className="card-text">Anecdotes voting app</p>
              <Link to="/anecdotes" className="btn btn-primary">View →</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App