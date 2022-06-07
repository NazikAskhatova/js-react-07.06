import { useState } from 'react'
import TheList from './TheList'
import ListForm from './ListForm'

function App() {
  const [todos, setTodos] = useState([])

  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2,9),
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem])
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) => 
        todo.id === id ? { ...todo, complete: !todo.complete } : {...todo }
      )
    ])
  }

  return (
    <div className="App">

      <header>
        <h1>The List {todos.length}</h1>
      </header>
      <ListForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <TheList
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
            />
        )
      })}
    </div>
  );
}
export default App;