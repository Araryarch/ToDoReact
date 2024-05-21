import TodoItem from './TodoItem'

const Todos = ({ todos }) => {
  return (
    <div className="w-[40%] mx-auto">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />
      })}
    </div>
  )
}

export default Todos
