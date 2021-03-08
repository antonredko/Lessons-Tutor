import './App.css';
import List from './components/List/List'
import React, { useState, useEffect } from "react";


function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    (async function () {
      const data = await fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json())
      setUsers(data)
    })()
  }, [])
  return (
    <>
    <List list={users}/>
    </>
  );
}

export default App;
