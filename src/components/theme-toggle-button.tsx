import { DarkModeSwitch } from 'react-toggle-dark-mode'

import { useThemeContext } from 'components/theme-state-provider'

export default function ToggleThemeButton(): JSX.Element {
  const { theme, setTheme } = useThemeContext()

  const handleChange = checked => {
    setTheme(checked ? 'dark' : 'light')
  }

  return (
    <DarkModeSwitch
      checked={
        // Default to light
        // theme === 'dark'

        // Default to dark
        !theme || theme === 'dark'
      }
      onChange={handleChange}
      sunColor="rgb(96 165 250)"
      moonColor="rgb(96 165 250)"
    />
  )
}
