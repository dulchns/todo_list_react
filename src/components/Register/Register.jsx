import { useState } from "react"
import useFetch from "../../hooks/useFetch"
import PostService from "../PostService/PostService"
import styles from "./Register.module.css"
const Register = ({ logIn }) => {
  const clearRegData = { username: "", name: "", password: "" }
  const [regData, setRegData] = useState(clearRegData)
  const [fetchUser] = useFetch(async (data) => await PostService.setUser(data))

  const signUp = (e) => {
    e.preventDefault()
    const newUser = { ...regData, id: Date.now() }
    fetchUser(newUser)
    logIn(newUser)
    setRegData(clearRegData)
  }
  const changeField = (e, type) =>
    setRegData((prev) => ({ ...prev, [type]: e.target.value }))

  return (
    <form className={styles.register__form} onSubmit={signUp}>
      <input
        required
        type="text"
        value={regData.username}
        onChange={(e) => changeField(e, "username")}
        placeholder="Username"
      />
      <input
        required
        type="text"
        value={regData.name}
        onChange={(e) => changeField(e, "name")}
        placeholder="Name"
      />
      <input
        required
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
