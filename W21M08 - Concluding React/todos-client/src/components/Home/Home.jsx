import { useEffect, useState } from "react";
import Todo from "../Todo/Todo";
import { useNavigate, Link, Outlet } from "react-router-dom";

const Home = (props) => {
    const navigate = useNavigate();
    const [todos, setTodos] = useState([]);
    const updateListOfTodos = (newTodo) => {
        setTodos(prevTodos => [...prevTodos, newTodo]);
    }

    useEffect(() => {
        const fetchTodos = async () => {
            const URL = `http://localhost:8080/api/todos/getByUserId/${props.userInfo.userName}`;
            const settings = {
                method: 'GET',
                headers: {
                    'api-token': props.userInfo.token
                }
            }
            const response = await fetch(URL, settings);
            const data = await response.json();
            setTodos(data.todos);
        }

        fetchTodos();
        
    }, []);

    const handleLogout = (event) => {
        console.log("You are about to logout");
        setTodos([]);
        props.setUserInfo({});
        props.setIsLoggedIn(false);
        navigate('/login');
    }

    return (
        <div>
            <h1> Welcome back {props.userInfo.firstName} {props.userInfo.lastName} </h1>
            <button className="btn btn-secondary" onClick={(e) => handleLogout(e)}>
                Logout
            </button>
            {todos.map((todoInfo, index) => {
                return ( <Todo todoInfo={todoInfo} key={index}/> );
            })}

            <div>
                <Link to="/home/new/todo">
                    Add todo
                </Link>
                <Outlet context={[updateListOfTodos]}/>
            </div>
        </div>

    );
}

export default Home;