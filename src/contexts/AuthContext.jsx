import { createContext, useState } from "react"

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem('auth')) || false)
  const setAuth = (value) => {
    localStorage.setItem('auth', JSON.stringify(value))
    setIsAuth(value)
  }

  return (
    <AuthContext.Provider value={{ isAuth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
