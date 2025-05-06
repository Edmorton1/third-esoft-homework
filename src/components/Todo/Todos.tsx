import { memo } from "react"
import { Action, State } from "./Todo"

const Todos = ({debValue, state, dispatch}: {state: State[], debValue: string, dispatch: React.Dispatch<Action>}) => {
  // console.log('Todos render')
  return state.filter(e => e.text.includes(debValue)).map(e => 
    <div key={e.id}>
      <p>Задача: {e.text}</p>
      <p>Статус: {e.status == 'completed' ? 'выполнено' : 'не выполнено'}</p>
      <button onClick={() => dispatch({type: "toggle", id: e.id})}>Изменить статус</button>
      <button onClick={() => dispatch({type: "delete", id: e.id})}>Удалить</button>
    </div>
  )
}

export default memo(Todos)