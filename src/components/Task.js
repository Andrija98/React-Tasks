const Task = (props) => {
    return (
        <div className="task" onClick={() => {props.onDelete(props.id)}}>
                <h3>{props.text}</h3>
                <p>{props.day}</p>
        </div>
    )
}

export default Task