
const Todo = (props) => {
    return(
        <div>
            <h2> {props.todo.description} </h2>
            <p> {props.todo.status} </p>
        </div>
    );
}

export default Todo;