
const Todo = (props) => {
    return(
        <div>
            <h2>Id: {props.todoInfo.id} </h2>
            <h3>{props.todoInfo.description}</h3>
            <p>Status: {props.todoInfo.status}</p>
        </div>
    );
}

export default Todo;