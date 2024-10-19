/* eslint-disable react-refresh/only-export-components */
import { getProfileFromLS } from '@/lib/auth'
import { User } from '@/schemaValidations/user.schema'
import { createContext, SetStateAction, useContext, useState } from 'react'

interface AppContextInterface {
  profile: User | null
  setProfile: React.Dispatch<SetStateAction<User | null>>
}

export const getInitialAppContext: () => AppContextInterface = () => ({
  profile: getProfileFromLS(),
  setProfile: () => null
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
  const [profile, setProfile] = useState<User | null>(defaultValue.profile)
  return (
    <AppContext.Provider value={{ profile, setProfile }}>
      {children}
    </AppContext.Provider>
  )
}
