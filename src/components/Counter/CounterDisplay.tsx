import { memo } from "react"

function CounterDisplay({count}: {count: number}) {
  console.log("COUNT DISPLAY")
  return <p>Count: {count}</p>
}

export default memo(CounterDisplay)