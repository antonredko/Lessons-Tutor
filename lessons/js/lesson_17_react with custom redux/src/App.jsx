import React, { useState, useEffect } from 'react'
import './App.css';
import List from './components/List/List';
import { useCounter } from './hooks/useCounter';



function App() {
  const [users, setUsers] = useState([])
  const {counterAction} = useCounter()
  function changeUsers(newUsers) {
    setUsers(newUsers)
  }

  
  useEffect(() => {
    (async function (url) {
      const data = await fetch(url).then(r => r.json())
      setUsers(data)
    })('https://jsonplaceholder.typicode.com/users')
  }, [])


  return (
    <div className="container">
      <button onClick={() => counterAction({type: 'increment'})}>Increment counter + 1</button>
      <button onClick={() => counterAction({type: 'decrement'})}>Decrement counter - 1</button>
      <button onClick={() => counterAction({type: 'addAmount111', payload: 100})}>Add + 100</button>
      <List items={users} changeItems={changeUsers}/>
    </div>
  );
}

export default App;
