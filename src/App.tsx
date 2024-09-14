import { ThemeProvider } from '@/components/theme-provider'
import './App.css'
import MainLayout from '@/layouts/MainLayout/MainLayout'

function App() {
  return (
    <>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <MainLayout />
      </ThemeProvider>
    </>
  )
}

export default App
