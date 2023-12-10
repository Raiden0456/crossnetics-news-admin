'use client'
// library
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
export const useAuthCheck = () => {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token')
      const authStatus = !!token
      setIsAuthenticated(authStatus)
      if (!authStatus) {
        router.push('/')
      }
    }

    checkAuth()

    const intervalId = setInterval(checkAuth, 10000)
    return () => clearInterval(intervalId)
  }, [router])

  return isAuthenticated
}
