import LoginForm from '@/components/auth.user/LoginUser'
import React from 'react'

export const metadata = {
  title: "Вхід",
  description: "Вхід в особистий кабінет Ersag / Ерсаг",
  robots: {
    index: false,
    follow: false,
  },
};

const LoginPage = () => {
  return (
    <LoginForm/>
  )
}

export default LoginPage
