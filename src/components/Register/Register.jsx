import { useState } from "react"
import styles from "./Register.module.css"
import useFetch from "../../hooks/useFetch"
import axios from "axios"
const Register = ({logIn}) => {
  const clearRegData = { username: "", name: "", password: "" }
  const [regData, setRegData] = useState(clearRegData)
  const [fetchUser] = useFetch(async (data) => await axios.post('http://localhost:3000/users', data))

  const signUp = (e) => {
    e.preventDefault()
    const newUser = {...regData, id: Date.now()}
    fetchUser(newUser)
    logIn(newUser)
    setRegData(clearRegData)
  }
  const changeField = (e, type) => setRegData((prev) => ({ ...prev, [type]: e.target.value }))
  
  return (
    <form className={styles.register__form} onSubmit={signUp}>
      <input
        type="text"
        value={regData.username}
        onChange={(e) => changeField(e, "username")}
        placeholder="Username"
      />
      <input
        type="text"
        value={regData.name}
        onChange={(e) => changeField(e, "name")}
        placeholder="Name"
      />
      <input
        type="text"
        value={regData.password}
        onChange={(e) => changeField(e, "password")}
        placeholder="Password"
      />
      <button>Sign up</button>
    </form>
  )
}
export default Register
