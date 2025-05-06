import { memo } from "react"

const Counter = memo(({increment, decrement, count}: {increment: () => void, decrement: () => void, count: number}) => {
  // console.log('COUNTER render')

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  )
})

export default Counter