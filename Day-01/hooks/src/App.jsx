import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {

  const [request,setRequest] = useState(1);

  return (
    <div>
      <button onClick={function() {
        setRequest(1);
      }}>1</button>
      <button onClick={function() {
        setRequest(2)
      }}>2</button>
      <button onClick={function() {
        setRequest(3)
      }}>3</button>
      <button onClick={function(){
        setRequest(4)
      }}>4</button>
      <Todo id={request} />
    </div>
  );
}

function Todo({id}){
   const [todo, setTodo] = useState({})
   useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
    .then(function(response){
      setTodo(response.data.todo);
    })
  },[id]);

  return (
    <div>
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
    </div>
  );
}

export default App;
