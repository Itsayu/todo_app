import React, { useState } from 'react';
// import React, { useEffect } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel, listItemSecondaryActionClasses } from '@mui/material';
import Todo from './Todo';
// import db from './firebase';


function App() {

  const[todos, setTodos] = useState(["Iti", "Ayu"]);

  const[input, setInput] = useState("");

  // // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  // use Effect(() => {
  //   // this code here... fires when the app.js loads
  //   db.collection('todos').onSnapshot(snapshot => {

  //     console.log(snapshot.docs.map(doc => doc.data().todo))

  //     setTodos(snapshot.docs.map(doc =>( {id: doc.id, todo: doc.data().todo})))
  //   })

  // }, []); 

  console.log("Hello", input);

  const addTodo = (event) => {

    // this will fire off when we click the button

    event.preventDefault();   //Will stop the refer

    console.log('✨', "I Love You");

    setTodos([...todos, input]);

    setInput(" "); //clear up the input after clicking add todo buttom
  }

  return (

    <div className="App">

      <h1>Hello Iti!</h1>

      <form>
        <FormControl>

          <InputLabel>✔️ Write a Todo</InputLabel>

          <Input value={input} onChange = {event => setInput (event.target.value)}/>

        </FormControl>

      {/* <input value={input} onChange = {event => setInput (event.target.value)}/> */}

      <Button disabled = {!input} type= "submit" onClick={addTodo} variant="contained" color="primary">Add Todo</Button>
      
      {/* <button type="submit" onClick={addTodo}>Add Todo</button> */}


      </form>


      <ul>

        {todos.map(todo => (

          <Todo text = {todo}/>
          // <Todo todo = {todo}/>    //Go to the file named Todo.js line number 16
          // <li>{todo}</li>

        ))}

      </ul>

    </div>

  );

}

export default App;
