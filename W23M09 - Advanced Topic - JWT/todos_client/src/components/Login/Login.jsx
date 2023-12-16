import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const updateEmail = (event) => {
        setEmail(event.target.value);
    }

    const updatePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        const data = {
            email,
            password
        };

        const settings = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        }

        const URL = "http://localhost:8080/login";

        const response = await fetch(URL, settings);
        const responseJSON = await response.json();
        if(response.status === 404 || response.status === 400){
            console.log(responseJSON.message);
        }
        else{
            localStorage.setItem('token', responseJSON.token);
            navigate('/dashboard');
        }
    }

    return (
        <div>
             <h1 className="text-primary"> Login </h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label className="form-label" htmlFor="email">
                        Email: 
                    </label>
                    <input 
                        className="form-control" 
                        type="text" 
                        id="email" 
                        name="email" 
                        value={email}
                        onChange={updateEmail}/>
                </div>
                <div>
                    <label className="form-label" htmlFor="password">
                        Password:
                    </label>
                    <input 
                        className="form-control" 
                        type="password" 
                        name="password" 
                        id="password" 
                        value={password}
                        onChange={updatePassword}/>
                </div>
                <button className="btn btn-primary">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;