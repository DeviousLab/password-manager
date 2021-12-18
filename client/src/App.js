import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [passwordsArray, setPasswordsArray] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:8000/getpasswords')
      .then(res => {
        setPasswordsArray(res.data);
      })
      .catch(err => console.log(err));
  });

  const addPassword = () => {
    Axios.post('http://localhost:8000/addpasswords', {
      password,
      title
    });
  };

  const showPassword = (encryption) => {
    Axios.post('http://localhost:8000/decryptpasswords', {
      password: encryption.pw_passwords,
      iv: encryption.pw_iv
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <div className="add-password">
        <input type="text" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
        <input type="text" placeholder="Google" onChange={(e) => {setTitle(e.target.value)}}/>
        <button onClick={addPassword}>Add</button>
      </div>
      <div className="passwords-array">
        {passwordsArray.map((index, key) => {
          return (
            <div className="password-element" onClick={() => {showPassword({ password: index.password, iv: index.iv })}} key={key}>
              <p>{index.pw_title}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
