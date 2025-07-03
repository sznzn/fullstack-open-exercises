const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
            <div className="container">
                <h1 className="navbar-brand mb-0">Part 1 - React Basics</h1>
                <div className="navbar-nav">
                    <a className="nav-link" href="/">Home</a>
                    <a className="nav-link" href="/courseinfo">CourseInfo</a>
                    <a className="nav-link" href="/unicafe">Unicafe</a>
                    <a className="nav-link" href="/anecdotes">Anecdotes</a>
                </div>
            </div>
        </nav>
    )
}

export default Menu;