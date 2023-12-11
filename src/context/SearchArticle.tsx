import React, { createContext, useContext, useState, FC } from 'react'

interface Post {
  description: {
    id: string
    date?: string
    title: string
    tags?: string[]
    likes: number
    views: number
    author?: string
  }
}

interface SearchData {
  getPosts: Post[]
}

interface SearchDataContextType {
  searchData: SearchData | null
  setSearchData: React.Dispatch<
    React.SetStateAction<SearchData | null>
  >
}
interface SearchDataProviderProps {
  children: React.ReactNode
}

const SearchDataContext = createContext<
  SearchDataContextType | undefined
>(undefined)

export const useSearchData = () => {
  const context = useContext(SearchDataContext)
  if (context === undefined) {
    throw new Error(
      'useSearchData must be used within a SearchDataProvider'
    )
  }
  return context
}

export const SearchDataProvider: FC<SearchDataProviderProps> = ({
  children,
}) => {
  const [searchData, setSearchData] = useState<SearchData | null>(
    null
  )

  return (
    <SearchDataContext.Provider value={{ searchData, setSearchData }}>
      {children}
    </SearchDataContext.Provider>
  )
}
