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
  }, []);

  const addPassword = () => {
    Axios.post('http://localhost:8000/addpasswords', {
      password,
      title
    });
  };

  const showPassword = (encryption) => {
    Axios.post('http://localhost:8000/decryptpasswords', {
      password: encryption.password,
      iv: encryption.iv
    })
      .then(res => {
        setPasswordsArray(passwordsArray.map(index => {
          return index.id === encryption.id ? {
            id: index.id,
            password: index.password,
            title: res.data,
            iv: index.iv
          } : index
        }))
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <div className="add-password">
        <input type="text" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
        <input type="text" placeholder="Google" onChange={(e) => { setTitle(e.target.value) }} />
        <button onClick={addPassword}>Add</button>
      </div>
      <div className="passwords-array">
        {passwordsArray.map((index, key) => {
          return (
            <div className="password-element" onClick={() => { showPassword({ password: index.password, iv: index.iv, id: index.id }) }} key={key}>
              <p>{index.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
