import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');

  const addPassword = () => {
    Axios.post('http://localhost:8000/addpasswords', {
      password,
      title
    });
  };

  return (
    <div className="App">
      <div className="add-password">
        <input type="text" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
        <input type="text" placeholder="Google" onChange={(e) => {setTitle(e.target.value)}}/>
        <button onClick={addPassword}>Add</button>
      </div>
    </div>
  );
}

export default App;
