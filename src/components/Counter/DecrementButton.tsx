import { memo } from "react"

function DecrementButton({decrement}: {decrement: () => void}) {
  console.log("DECREMENT BUTTON")
  return <button onClick={decrement}>decrement</button>
}

export default memo(DecrementButton)