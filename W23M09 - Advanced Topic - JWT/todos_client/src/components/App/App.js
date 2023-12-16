import {Routes, Route} from 'react-router-dom';
import Login from './../Login/Login';
import Dashboard from './../Dashboard/Dashboard';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <h1> Welcome to the todos App </h1>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
