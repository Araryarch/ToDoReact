import { useState } from 'react'
const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    addTodo(title)
    setTitle('')
  }

  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  return (
    <div className="mb-8">
      <form className="join" onSubmit={(e) => handleSubmit(e)}>
        <input
          className="input input-bordered join-item"
          placeholder="Add Your ToDo"
          onChange={(e) => handleChangeTitle(e)}
          value={title}
        />
        <button className="btn join-item">Add Todo</button>
      </form>
    </div>
  )
}

export default TodoForm
