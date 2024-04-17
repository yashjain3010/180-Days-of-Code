import './App.css'

function App() {
  
  return (
    <>
      <div>
        <Todo />
      </div>
    </>
  );
}

interface TodoApp{
  title : string,
  description : string,
  done : boolean
}

function Todo(props : TodoApp){
  return <div>
    <h1>
      {props.title}
    </h1>
    <h2>
      {props.description}
    </h2>
  </div>
}

export default App
