// import React, {
//   useState,
//   createContext,
//   useContext,
//   ReactNode,
// } from 'react'
//
// interface Description {
//   title: string
//   author: string
//   date: string
//   likes: number
//   views: number
//   tags: string[]
// }
//
// interface Post {
//   id: string
//   postType: string
//   description: Description
// }
//
// interface MyContextType {
//   // Данные авторизации
//   isAuthenticated: boolean
//   user: string | null
//   login: (user: string) => void
//   logout: () => void
//
//   // Данные постов
//   posts: Post[]
//   addPost: (newPost: Post) => void
//   deletePost: (postId: string) => void
// }
//
// const MyContext = createContext<MyContextType>({
//   isAuthenticated: false,
//   user: null,
//   login: () => {},
//   logout: () => {},
//   posts: [],
//   addPost: () => {},
//   deletePost: postId => {},
// })
//
// interface MyProviderProps {
//   children: ReactNode
// }
//
// export const MyProvider = ({ children }: MyProviderProps) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false)
//   const [user, setUser] = useState<string | null>(null)
//   const [posts, setPosts] = useState<Post[]>([])
//
//   const login = (newUser: string) => {
//     setIsAuthenticated(true)
//     setUser(newUser)
//   }
//
//   const logout = () => {
//     setIsAuthenticated(false)
//     setUser(null)
//   }
//
//   const addPost = (newPost: Post) => {
//     setPosts([...posts, newPost])
//   }
//   const deletePost = (postId: string) => {
//     setPosts(posts.filter(post => post.id !== postId))
//   }
//   return (
//     <MyContext.Provider
//       value={{
//         isAuthenticated,
//         user,
//         login,
//         logout,
//         posts,
//         addPost,
//         deletePost,
//       }}
//     >
//       {children}
//     </MyContext.Provider>
//   )
// }
//
// export const useMyContext = () => useContext(MyContext)
