import { memo } from "react"
import { State } from "./Todo"
import TodoComponent from "./TodoComponent"

const Todos = ({debValue, state}: {state: State[], debValue: string}) => {
  console.log('Todos render')
  return state.filter(e => e.text.includes(debValue)).map(e => 
    <TodoComponent key={e.id} todo={e} />
  )
}

export default memo(Todos)