const Course = ({ course }) => {
    const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <div className="card mb-3">
            <h2>{course.name}</h2>
            <div>
                {course.parts.map(part => (
                    <p key={part.id}>
                        {part.name} {part.exercises}
                    </p>
                ))}
            </div>
            <h4>Total exercises: {total}</h4>
        </div>
    )
}

const CourseList = ({ courses }) => {
    return (
        <div>
            {courses.map(course => <Course key={course.id} course={course} />)}
        </div>
    )
}


export default CourseList;