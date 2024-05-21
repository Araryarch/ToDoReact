import { useState, createContext } from 'react'
import Todos from './Components/Todos'
import TodoForm from './Components/TodoForm'
import Navbar from './Components/Navbar'

export const TodoContext = createContext()

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ])

  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId)
    setTodos(updatedTodos)
  }

  const addTodo = (todoTitle) => {
    if (!todoTitle.trim()) {
      return
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    }

    const updatedTodos = todos.concat(newTodo)
    setTodos(updatedTodos)
  }

  return (
    <TodoContext.Provider
      value={{
        toggleCompleted,
        deleteTodo,
      }}
    >
      <div className="p-3 text-center">
        <Navbar />
        <TodoForm addTodo={addTodo} />
        <Todos todos={todos} />
      </div>
    </TodoContext.Provider>
  )
}

export default App
