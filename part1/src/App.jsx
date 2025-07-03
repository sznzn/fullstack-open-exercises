import Menu from './components/Menu'

const App = () => {
  return (
    <div>
      <Menu />
      <div className="container">
        <h2>Welcome to Full Stack Open Exercises</h2>
        <p>Select an exercise from the menu above:</p>
        
        <div className="row mt-4">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">CourseInfo</h5>
                <p className="card-text">Course information display app</p>
                <a href="/courseinfo" className="btn btn-primary">View →</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Unicafe</h5>
                <p className="card-text">Feedback collection app</p>
                <a href="/unicafe" className="btn btn-primary">View →</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Anecdotes</h5>
                <p className="card-text">Anecdotes voting app</p>
                <a href="/anecdotes" className="btn btn-primary">View →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App