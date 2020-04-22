import React, {useState} from 'react';
import './App.css';
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [state, setState] = useState([]);
  return (
    <div className="App">
      <Form tasks={state} setTasks={setState} />
      <hr/>
      <List tasks={state} setTasks={setState} />
    </div>
  );
}

export default App;
