import { memo, useContext } from "react"
import { State, TodoContext } from "./Todo"

function TodoComponent({todo}: {todo: State}) {
  console.log("TODO COMPONENT RENDER")
  const dispatch = useContext(TodoContext)

  return <>
      <div key={todo.id}>
      <p>Задача: {todo.text}</p>
      <p>Статус: {todo.status == 'completed' ? 'выполнено' : 'не выполнено'}</p>
      <button onClick={() => dispatch({type: "toggle", id: todo.id})}>Изменить статус</button>
      <button onClick={() => dispatch({type: "delete", id: todo.id})}>Удалить</button>
    </div>
  </>
}

export default memo(TodoComponent)