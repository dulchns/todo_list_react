import { useContext, useState } from "react"
import styles from "./ListControl.module.css"
import { AuthContext } from "../../contexts/AuthContext"

const ListControl = ({ adder }) => {
  const { isAuth: user } = useContext(AuthContext)
  const [input, setInput] = useState("")
  const addTask = (e) => {
    e.preventDefault()
    const newTask = {
      userId: user.id,
      id: Date.now(),
      title: input,
      completed: false,
    }
    adder((prev) => [newTask, ...prev])
    setInput("")
  }

  return (
    <form className={styles.controls} onSubmit={addTask}>
      <input
        className={styles.controls__input}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className={styles.controls__btn}>Add</button>
    </form>
  )
}
export default ListControl