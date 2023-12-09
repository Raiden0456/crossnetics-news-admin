'use client'
// library
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
export const useAuthCheck = () => {
  const router = useRouter()

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token')
      if (!token) {
        router.push('/')
      }
    }
    checkAuth()

    const intervalId = setInterval(checkAuth, 10000)
    return () => clearInterval(intervalId)
  }, [router])
}
