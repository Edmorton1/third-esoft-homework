import { memo, useCallback, useState } from "react"

const First = memo(({viewCallback}: {viewCallback: () => void}) => {
  console.log('ПЕРВЫЙ РЕБЁНОК РЕНДЕР')

  return <p>Первый ребёнок</p>
})

const Second = ({viewCallback}: {viewCallback: () => void}) => {
  console.log('ВТОРОЙ РЕБЁНОК РЕНДЕР')

  return <p>Второй ребёнок</p>
} 

const Memo = () => {
  console.log('memo render')
  const [child, setChild] = useState(false)
  const [parent, setParent] = useState(false)

  // ПЕРВЫЙ РЕБЁНОК С memo ВТОРОЙ БЕЗ

  // Если без useCallback сделать рендер, который не влияеет на детей,
  // то даже несмотря на memo компонент будет всегда перерендериваться.
  //
  // Как я понял это происходит из-за того, что при рендере ссылка на
  // функцию меняется и в пропс попадает "типа" другая функция

  // const viewCallback = () => setChild(!child)

  const viewCallback = useCallback(() => setChild(!child), [child])

  return (
    <>
      <div>Компонент для чека рендера</div>
      <button onClick={() => setParent(!parent)}>Сделать рендер</button>
      <button onClick={() => setChild(!child)}>Сделать рендер влияющий на детей</button>
      <First viewCallback={viewCallback} />
      <Second viewCallback={viewCallback}/>
    </>
  )
}

export default Memo