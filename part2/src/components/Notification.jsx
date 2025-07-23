const Notification = ({ message, type = 'success'}) => {
    if (message === null) {
        return null
    }
    const alertClass = type === 'success' ? 'alert alert-success' : 'alert alert-danger'
    return (
        <div className={alertClass} role="alert">
            {message}
        </div>
    )
}

export default Notification;