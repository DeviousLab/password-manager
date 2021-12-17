import './App.css';
import { useState } from 'react';

function App() {
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');


  return (
    <div className="App">
      <div className="add-password">
        <input type="text" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
        <input type="text" placeholder="Google" onChange={(e) => {setTitle(e.target.value)}}/>
        <button>Add</button>
      </div>
    </div>
  );
}

export default App;
