import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
} from 'react'

interface Post {
  id: string
  title: string
  content: string
}

interface MyContextType {
  // Данные авторизации
  isAuthenticated: boolean
  user: string | null
  login: (user: string) => void
  logout: () => void

  // Данные постов
  posts: Post[]
  addPost: (newPost: Post) => void
}

const MyContext = createContext<MyContextType>({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
  posts: [],
  addPost: () => {},
})

interface MyProviderProps {
  children: ReactNode
}

export const MyProvider = ({ children }: MyProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<string | null>(null)
  const [posts, setPosts] = useState<Post[]>([])

  const login = (newUser: string) => {
    setIsAuthenticated(true)
    setUser(newUser)
  }

  const logout = () => {
    setIsAuthenticated(false)
    setUser(null)
  }

  const addPost = (newPost: Post) => {
    setPosts([...posts, newPost])
  }

  return (
    <MyContext.Provider
      value={{ isAuthenticated, user, login, logout, posts, addPost }}
    >
      {children}
    </MyContext.Provider>
  )
}

export const useMyContext = () => useContext(MyContext)
