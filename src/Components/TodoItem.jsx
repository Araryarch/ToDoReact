import { useContext } from 'react'
import { TodoContext } from '../App'

const TodoItem = ({ todo }) => {
  const { toggleCompleted, deleteTodo } = useContext(TodoContext)
  const getTodoTitleStyle = () => {
    return todo.completed ? 'line-through' : 'no-underline'
  }

  return (
    <div className="flex items-center justify-between p-5 text-xl border-2 border-primary">
      <input
        type="checkbox"
        className="rounded-full checkbox checkbox-info"
        onChange={() => toggleCompleted(todo.id)}
      />
      <p className={getTodoTitleStyle()}>{todo.title}</p>
      <button
        className="rounded-full shadow-md btn btn-error shadow-primary"
        onClick={() => deleteTodo(todo.id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  )
}

export default TodoItem
