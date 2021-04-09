import React, { useState, useEffect } from 'react'
import './App.css';
import List from './components/List/List';


function App() {
  const [users, setUsers] = useState([])
  const [val, setVal] = useState('')
  
  useEffect(() => {
    (async function (url) {
      const data = await fetch(url).then(r => r.json())
      setUsers(data)
    })('https://jsonplaceholder.typicode.com/users')
  }, [])


  return (
    <div className="container">
      <input type="text" onChange={e => setVal(e.target.value)}/>
      <input type="text" value={val} onChange={e => setVal(e.target.value)}/>
      <p>{val}</p>
      <List items={users}/>
    </div>
  );
}

export default App;
