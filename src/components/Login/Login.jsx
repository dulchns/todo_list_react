import { useContext, useState } from "react"
import styles from "./Login.module.css"
import { AuthContext } from "../../contexts/AuthContext"
import axios from "axios"
import useFetch from "../../hooks/useFetch"
import LoginForm from "../LoginForm/LoginForm"
import Loader from "../UI/Loader/Loader"
import Modal from "../UI/Loader/Modal/Modal"
import Register from "../Register/Register"

const Login = () => {
  const { setAuth } = useContext(AuthContext)
  const clearLoginData = { username: "", password: "" }
  const [loginData, setLoginData] = useState(clearLoginData)
  const [showModal, setShowModal] = useState(false)
  const [serveLoginFetch, isLoading] = useFetch(async (data) => {
    const response = await axios.get(`http://localhost:3000/users`, {
      params: { username: data.username },
    })
    const [fetchedUser] = response.data
    if (fetchedUser.password == data.password) {
      setAuth(fetchedUser)
    }
    setLoginData(clearLoginData)
  })

  const submit = (e) => {
    e.preventDefault()
    serveLoginFetch(loginData)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className={styles.login__page}>
      {isLoading && <Loader />}
      <div className={styles.login__img}></div>
      <LoginForm
        loginData={loginData}
        setLoginData={setLoginData}
        submit={submit}
      />
      <button
        className={styles.register__btn}
        onClick={() => setShowModal(true)}
      >
        Sign up
      </button>
      {showModal && (
        <Modal close={closeModal}>
          <Register logIn={serveLoginFetch}/>
        </Modal>
      )}
    </div>
  )
}
export default Login
