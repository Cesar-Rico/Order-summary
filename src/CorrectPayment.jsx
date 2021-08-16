import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'


export default function CorrectPayment() {
  // Declara una nueva variable de estado, que llamaremos "count".
  const [count, setCount] = useState(0);
  const  [nombre, setNombre] = useState('Cesar');
  const history = useHistory();
  const handleOnClick = () => history.push('/sample');

  const cambiarNombre = (event) => {
    setNombre(event.target.value)
    document.title = event.target.value;
  }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <div></div>
      <button onClick={handleOnClick}>
        Redirect
      </button>
      <h1>{nombre}</h1>
      <input onChange={cambiarNombre} value={nombre}/>

    </div>
  );
}
