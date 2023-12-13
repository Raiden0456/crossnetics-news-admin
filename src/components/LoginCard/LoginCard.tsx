'use client'
// library
import React, { useState } from 'react'

// hooks
import { useLazyQuery } from '@apollo/client'
import { useRouter } from 'next/navigation'
import { useAuthCheck } from '@/hooks/useAuthCheck'

// query
import { LOGIN_QUERY } from '@/lib/apollo/auth'

// components
import { Input } from '@/components/Input/Input'
import { Oval } from 'react-loader-spinner'

interface LoginResponse {
  login: {
    token: string
  }
}
const LoginCard: React.FC = props => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const [executeLogin, { loading, error }] =
    useLazyQuery<LoginResponse>(LOGIN_QUERY, {
      onCompleted: data => handleLoginSuccess(data),
      onError: error => console.error('Login Error:', error),
    })

  const handleLoginSuccess = (data: LoginResponse) => {
    console.log('Login Successful:', data)
    localStorage.setItem('token', data.login.token)
    router.push('/admin')
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLButtonElement>
  ) => {
    e.preventDefault()
    await executeLogin({ variables: { login, password } })
  }

  return (
    <React.Fragment>
      {loading ? (
        <Oval
          ariaLabel='loading-indicator'
          height={100}
          width={100}
          strokeWidth={2000}
          strokeWidthSecondary={2030}
          color='#c5acf8'
          secondaryColor='#565693'
        />
      ) : (
        <div className='rounded-2xl p-8 outline-ctp-pink outline outline-2 w-[500px] shadow-lg bg-ctp-mantle'>
          <h1 className='text-4xl font-extrabold capitalize mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-ctp-lavender to-ctp-mauve'>
            Crossnetics Blog <br /> Admin Panel
          </h1>
          <div className='mb-4'>
            <Input
              label={'Login'}
              placeholder={'Enter your login'}
              className={
                'w-full bg-ctp-mantle border border-ctp-pink rounded-xl py-2 px-3 focus:outline-none focus:border-ctp-lavender text-ctp-text'
              }
              htmlFor={'login'}
              labelClassName={
                'block text-ctp-lavender font-bold text-xl mb-2'
              }
              id={'login'}
              value={login}
              onChange={e => setLogin(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <div className='relative'>
              <Input
                label={'Password'}
                placeholder={'Enter your password'}
                className={
                  'w-full bg-ctp-mantle border border-ctp-pink rounded-xl py-2 px-3 focus:outline-none focus:border-ctp-lavender text-ctp-text'
                }
                htmlFor={'password'}
                labelClassName={
                  'block text-ctp-lavender font-bold text-xl mb-2'
                }
                id={'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                type={'password'}
              />
            </div>
          </div>
          <div className='flex justify-center'>
            <button
              type='button'
              className='bg-ctp-lavender transition-transform hover:scale-105 active:scale-100 uppercase text-mantle font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline m-auto'
              onClick={handleSubmit}
            >
              Log in
            </button>
          </div>

          <span className='block mt-5'>
            {error ? (
              <p className='text-center text-ctp-red font-bold text-xl '>
                Error: {error.message}
              </p>
            ) : (
              ''
            )}
          </span>
        </div>
      )}
    </React.Fragment>
  )
}

export default LoginCard
