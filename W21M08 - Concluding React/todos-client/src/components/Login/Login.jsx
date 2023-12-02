import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {

    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const updateUserName = (event) => {
        setUserName(event.target.value);
    }
    const updatePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleLogin = async (event) => {
        event.preventDefault();

        const URL = "http://localhost:8080/api/users/login";
        const settings = {
            method: 'POST',
            body: JSON.stringify({
                userName: userName,
                password: password
            }),
            headers: {
                'Content-type': 'application/json'
            }
        }

        const response = await fetch(URL, settings);
        const data = await response.json();
        console.log(data);
        props.setIsLoggedIn(true);
        props.setUserInfo(data);
        localStorage.setItem("userName", data.userName);
        localStorage.setItem("token", data.token);
        navigate('/home');

    }

    return (
        <div>
            <h1 className="text-primary"> Login </h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="userName">
                        Username:
                    </label>
                    <input 
                        type="text"
                        id="userName"
                        value={userName}
                        className="form-control" 
                        onChange={updateUserName}/> 
                </div>
                <div>
                    <label htmlFor="password">
                        Password:
                    </label>
                    <input 
                        type="password"
                        id="password"
                        value={password}
                        className="form-control"
                        onChange={updatePassword} /> 
                </div>
                <button className="btn btn-primary">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;