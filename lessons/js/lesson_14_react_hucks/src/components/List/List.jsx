import "./List.css";
import React, { useState, useEffect } from "react";

function ListItem(props) {
  return <li>{props.text}</li>;
}

function Test(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect mount and change");
  });
  useEffect(() => {
    console.log("Effect did mount");
  }, []);
  useEffect(() => {
    console.log("Effect with change 'count' dependency");
  }, [count]);
  useEffect(() => {
    return () => {console.log("Effect will unmount")}
  });

  return (
    <>
      <h5>Change visibility and count {props.count}</h5>
      <button onClick={() => setCount(count + 1)}>Click {count}</button>
    </>
  );
}

function List(props) {
  const [count, setCount] = useState(0);
  const [vis, setVis] = useState(false);
  return (
    <>
      <h4>Users list</h4>
      <button onClick={() => setCount(count + 1)}>Click {count}</button>
      <button onClick={() => setVis(!vis)}>Click to change visibility</button>
      {vis && <Test count={count} />}
      <ul>
        {props.list.map((user) => (
          <ListItem key={user.id} text={user.name} />
        ))}
      </ul>
    </>
  );
}

export default List;
