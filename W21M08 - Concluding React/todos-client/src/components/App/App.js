import { useState } from 'react';
import Login from '../Login/Login';
import TodoForm from '../TodoForm/TodoForm';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from '../Home/Home';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  return (
    <div className="container">
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUserInfo={setUserInfo}/>} />
        <Route path="/home" Component={() => {
            if(isLoggedIn){
              return <Home userInfo={userInfo} 
                          setUserInfo={setUserInfo}
                          setIsLoggedIn={setIsLoggedIn}/>
            }
            return <Login setIsLoggedIn={setIsLoggedIn} setUserInfo={setUserInfo}/>
          }}>
          <Route path="/home/new/todo" element={<TodoForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
