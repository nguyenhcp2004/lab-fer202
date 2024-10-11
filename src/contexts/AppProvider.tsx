/* eslint-disable react-refresh/only-export-components */
import { createContext, SetStateAction, useContext, useState } from 'react'

interface AppContextInterface {
  isAuth: boolean
  setAuth: React.Dispatch<SetStateAction<boolean>>
}

export const getInitialAppContext: () => AppContextInterface = () => ({
  isAuth: false,
  setAuth: () => null
})

const initialAppContext = getInitialAppContext()

export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const useAppContext = () => {
  return useContext(AppContext)
}

export default function AppProvider({
  children,
  defaultValue = initialAppContext
}: {
  children: React.ReactNode
  defaultValue?: AppContextInterface
}) {
  const [isAuth, setAuth] = useState<boolean>(defaultValue.isAuth)

  return (
    <AppContext.Provider value={{ isAuth, setAuth }}>
      {children}
    </AppContext.Provider>
  )
}
