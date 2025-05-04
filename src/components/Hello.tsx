import { memo } from "react"
import ThemeButton from "./ThemeButton"

const Hello = memo(({clickHello}: {clickHello: () => void}) => {

  console.log("hello render")
  return (
    <>
      <button onClick={clickHello}>Hello</button>
      <ThemeButton />
    </>
)
})

export default Hello