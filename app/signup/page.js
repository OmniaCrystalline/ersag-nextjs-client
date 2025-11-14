import SignupForm from '@/components/auth.user/SignupUser'
import React from 'react'

export const metadata = {
  title: "Реєстрація",
  description: "Реєстрація нового користувача Ersag / Ерсаг",
  robots: {
    index: false,
    follow: false,
  },
};

const SignupPage = () => {
  return (
    <SignupForm/>
  )
}

export default SignupPage
