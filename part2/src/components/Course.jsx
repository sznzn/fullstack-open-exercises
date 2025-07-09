const Course = ({ course }) => {
    const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <div>
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

export default Course;