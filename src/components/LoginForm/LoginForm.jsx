import { memo } from 'react'
import styles from './LoginForm.module.css'

const LoginForm = ({loginData, setLoginData, submit}) => {
  return (
    <form className={styles.login__form} onSubmit={submit}>
        <input
          required
          type="text"
          placeholder="Username"
          value={loginData.username}
          onChange={(e) =>
            setLoginData({ ...loginData, username: e.target.value })
          }
        />
        <input
          required
          type="text"
          placeholder="Password"
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />
        <button>Log in</button>
      </form>
  )
}
export default memo(LoginForm)