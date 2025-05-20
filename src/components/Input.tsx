import { memo, useRef, useState } from "react"
{/* <React.MutableRefObject<HTMLInputElement> | null> */}

const Input = memo(() => {
  const [state, setState] = useState<string | null>(null)
  const ref = useRef<HTMLInputElement | null>(null)
  // console.log(ref.current)

  const handleClick = () => {setState(ref.current!.value); ref.current?.focus()}
  // const showPrev = () => console.log(ref.current)

  return (
    <>
      <input ref={ref} type="text" />
      <p>{state}</p>
      <button onClick={handleClick}>Изменить</button>
      {/* <p>Предыдущ: </p> */}
    </>
  )
})

export default Input