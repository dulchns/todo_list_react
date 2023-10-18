import { useContext } from 'react'
import styles from './ListHeader.module.css'
import { AuthContext } from '../../contexts/AuthContext'

const ListHeader = () => {
  const {isAuth: user, setAuth} = useContext(AuthContext)
  const date = new Date()
  return (
    <div className={styles.header}>
      <div>
        <div>{`Welcome back, ${user.name}!`}</div>
        <div className={styles.header__date}>{`Today is ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`}</div>
      </div>
      <button className={styles.header__logout} onClick={() => setAuth(false)}>Log out</button>
    </div>
  )
}
export default ListHeader