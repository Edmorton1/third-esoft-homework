import { memo } from "react"

function IncrementButton({increment}: {increment: () => void}) {
    console.log("INCREMENT BUTTON")
  return <button onClick={increment}>increment</button>
}

export default memo(IncrementButton)