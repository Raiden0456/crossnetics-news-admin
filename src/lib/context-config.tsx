// library
import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
} from 'react'

interface MyContextType {
  data: string
  updateData: (newData: string) => void
}

const MyContext = createContext<MyContextType>({
  data: '',
  updateData: () => {},
})

interface MyProviderProps {
  children: ReactNode
}

export const ContextProvider = ({ children }: MyProviderProps) => {
  const [data, setData] = useState<string>('')

  const updateData = (newData: string) => {
    setData(newData)
  }

  return (
    <MyContext.Provider value={{ data, updateData }}>
      {children}
    </MyContext.Provider>
  )
}

export const useMyContext = () => useContext(MyContext)
