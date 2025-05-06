import { memo, useReducer, useState } from "react"
import useDebounce from "../../hooks/useDebounse";
import Todos from "./Todos";

export type State = { id: number, text: string, status: 'none' | 'completed' };
export type Action = { type: 'add', text: string } | { type: 'delete' | 'toggle', id: number };

function reduser(state: State[], action: Action): State[] {
  switch (action.type) {
    case 'add':
      return [...state, {id: state.length, text: action.text, status: 'none'}]
    case 'delete':
      return state.filter(e => e.id != action.id)
    case 'toggle': {
      const todo = state.find(e => e.id === action.id)!
      const updatedTodo: State = {...todo, status: todo.status == 'none' ? 'completed' : 'none'}
      // console.log(updatedTodo)
      return state.map(e => e.id == updatedTodo.id ? updatedTodo : e)
    }
    default:
      throw new Error()
  }
}

const Todo = memo(() => {
  const [text, setText] = useState('')
  const [find, setFind] = useState('')
  const [state, dispatch] = useReducer(reduser, [])
  const debounce = useDebounce(find)

  const inputFind = (e: React.ChangeEvent<HTMLInputElement>) => setFind(e.target.value)

  return (
    <>
      <input onChange={inputFind} type="text" placeholder="Поиск по названию" />
      <input onChange={e => setText(e.target.value)} type="text" placeholder="add todo"/>
      <button onClick={() => dispatch({type: 'add', text: text})}>Создать</button>
      <Todos debValue={debounce} state={state} dispatch={dispatch} />
    </>
  )
})

export default Todo