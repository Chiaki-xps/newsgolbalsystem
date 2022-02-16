import React, { useEffect, useState } from 'react'
import IndexRouter from './router/IndexRouter';
import Test from './Test';


import './App.css';

function App() {

  const [state, setState] = useState({name: 'sen',age: 18})

  useEffect(() => {
    setTimeout(clo, 1000)
  })

  const clo = () => {
    console.log('state', state)
  }

  return (
      // <IndexRouter />
      <Test state={state} />
  );
}

export default App;
