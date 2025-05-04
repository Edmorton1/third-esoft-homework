import { memo, useMemo, useState } from "react"

const Numbers = memo(() => {
  console.log('numbers render')
  
  function getnerateArr() {
    console.log("Новое вычисление")
    const len = Math.floor(Math.random() * 100)
    const arr = (Array.from({length: len}, (_, i) => i)).reduce((acc, value) => {
      return acc + value
    }, 0)
    return arr
  }

  const [state, setState] = useState<number | null>(getnerateArr)

  const sumMemo = useMemo(getnerateArr, [state])

  const handleArr = () => setState(sumMemo)

  return (
    <>
      <p>Сумма: {state}</p>
      <button onClick={handleArr}>Сгенерировать новый массив</button>
    </>
  )
})

export default Numbers