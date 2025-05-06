import { memo, useContext } from "react"
import { ThemeContext, ThemeContextType } from "../App"

const ThemeButton = memo(() => {
  // console.log('theme render')
  if (ThemeContext === null) {
    throw Error('sasaaass')
  }

  const [theme, setTheme] = useContext<ThemeContextType>(ThemeContext)

  const handleClick = () => {
    setTheme(!theme)
    
    localStorage.setItem('theme', !theme === true ? 'dark' : 'light')
    // console.log(!theme)
  }

  return <button onClick={handleClick}>{theme ? 'Светлую' : 'Тёмную'}</button>
})

export default ThemeButton