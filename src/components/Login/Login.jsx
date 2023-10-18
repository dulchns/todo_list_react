import { useContext, useState } from "react"
import styles from "./Login.module.css"
import { AuthContext } from "../../contexts/AuthContext"
import axios from "axios"
import useFetch from "../../hooks/useFetch"
import LoginForm from "../LoginForm/LoginForm"
import Loader from "../UI/Loader/Loader"

const Login = () => {
  const { setAuth } = useContext(AuthContext)
  const clearData = { username: "", password: "" }
  const [loginData, setLoginData] = useState(clearData)
  const [serveFetch, isLoading, error] = useFetch(async (data) => {
    const response = await axios.get(
      `http://localhost:3000/users?username=${data.username}`
    )
    const [fetchedUser] = response.data 
    if (fetchedUser.password == data.password) {
        setAuth(fetchedUser)
    }
    setLoginData(clearData)
  })

  const submit = (e) => {
    e.preventDefault()
    serveFetch(loginData)
  }

  return (
    <div className={styles.login__page}>
      {isLoading && <Loader/>}
      <div className={styles.login__img}></div>
      <LoginForm loginData={loginData} setLoginData={setLoginData} submit={submit}/>
    </div>
  )
}
export default Login
