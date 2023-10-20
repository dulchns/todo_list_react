import { useCallback, useContext, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import useFetch from "../../hooks/useFetch"
import LoginForm from "../LoginForm/LoginForm"
import PostService from "../PostService/PostService"
import Register from "../Register/Register"
import Loader from "../UI/Loader/Loader"
import Modal from "../UI//Modal/Modal"
import styles from "./Login.module.css"

const Login = () => {
  const { setAuth } = useContext(AuthContext)
  const clearLoginData = { username: "", password: "" }
  const [loginData, setLoginData] = useState(clearLoginData)
  const [showModal, setShowModal] = useState(false)
  const [serveLoginFetch, isLoading] = useFetch(async (data) => {
    await new Promise((resolve) => setTimeout(() => resolve(), 500)) //imitating request delay
    const response = await PostService.getUser(data.username)
    const [fetchedUser] = response.data
    if (fetchedUser.password == data.password) setAuth(fetchedUser)
    setLoginData(clearLoginData)
  })

  const submit = useCallback((e) => {
    e.preventDefault()
    serveLoginFetch(loginData)
  }, [loginData])

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
          <Register logIn={serveLoginFetch} />
        </Modal>
      )}
    </div>
  )
}
export default Login
