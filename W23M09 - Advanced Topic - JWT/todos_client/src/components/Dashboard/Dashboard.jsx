import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Todo from './../Todo/Todo';

const Dashboard = () => {

    const [todos, setTodos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTodosOfCurrentUser = async () => {
            const URL = "http://localhost:8080/todosByUser";
            const settings = {
                method: 'GET',
                headers: {
                    'usertoken': localStorage.getItem('token')
                }
            }

            const response = await fetch(URL, settings);
            const responseJSON = await response.json();
            if(response.status === 406){
                navigate('/login');
            }
            else{
                setTodos(responseJSON.todos);
            }
        }
        fetchTodosOfCurrentUser();
    }, []);
    return (
        <div>
            <h1> Your list of todos </h1>
            {todos.map((todo, index) => {
                return(<Todo key={index} todo={todo}/>)
            })}
        </div>
    );
}

export default Dashboard;