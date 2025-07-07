import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
            <div className="container">
                <h1 className="navbar-brand mb-0">Part 1 - React Basics</h1>
                <div className="navbar-nav">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/courseinfo">CourseInfo</Link>
                    <Link className="nav-link" to="/unicafe">Unicafe</Link>
                    <Link className="nav-link" to="/anecdotes">Anecdotes</Link>
                </div>
            </div>
        </nav>
    )
}

export default Menu;