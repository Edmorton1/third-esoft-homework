import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'
import Counter from './components/Counter';
import Numbers from './components/Numbers';
import Input from './components/Input';
import Todo from './components/Todo/Todo';
import Memo from './components/Memo';

export type ThemeContextType = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

export const ThemeContext = createContext<ThemeContextType>([false, () => {}])

function App() {
  const [theme, setTheme] = useState(false)
  // dark - true
  // light - false
  const [count, setCount] = useState(0)
  const themeValue = useMemo(() => [theme, setTheme] as ThemeContextType, [theme])

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    setTheme(theme === "dark")

    const body = document.getElementsByTagName('body')[0]
    body.classList.remove("dark")
    if (theme === 'dark') {
      body.classList.add("dark")
    } else {
      body.classList.remove("dark")
    }
  }, [theme])

  const increment = useCallback(() => setCount(prev => ++prev), [])
  const decrement = useCallback(() => setCount(prev => --prev), [])

  return (
    <ThemeContext.Provider value={themeValue}>
      <main>
        <Counter count={count} increment={increment} decrement={decrement}/>
        <br />
        <Numbers />
        <br />
        <Input/>
        <br />
        <Todo />
        <br />
        <Memo />
      </main>
    </ThemeContext.Provider>
  )
}

export default App
