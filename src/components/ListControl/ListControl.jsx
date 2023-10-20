import { memo, useContext, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import useFetch from "../../hooks/useFetch"
import PostService from "../PostService/PostService"
import styles from "./ListControl.module.css"

const ListControl = ({ setData }) => {
  const { isAuth: user } = useContext(AuthContext)
  const [input, setInput] = useState("")
  const [serveFetch] = useFetch(async (data) =>
    await PostService.setUserTodo(data)
  )
  const addTask = async (e) => {
    e.preventDefault()
    const newTask = {
      userId: user.id,
      id: Date.now(),
      title: input,
      completed: false,
    }
    setInput("")
    await serveFetch(newTask)
    setData(prev => [newTask, ...prev])
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
export default memo(ListControl)
