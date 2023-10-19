import { useState } from "react"
import styles from "./ListItem.module.css"
import useFetch from "../../hooks/useFetch"
import axios from "axios"

const ListItem = ({ todo, requestData }) => {
  const [deleteFetch] = useFetch(async () => {
    await axios.delete(`http://localhost:3000/todos/${todo.id}`)
  })
  const [check, setCheck] = useState(todo.completed)
  let rootClass = [styles.item]
  if (check) rootClass.push(styles.item__complited)
  const deleteItem = async () => {
    await deleteFetch()
    await requestData()
  }
  return (
    <div className={rootClass.join(" ")}>
      <input
        type="checkbox"
        checked={check}
        onChange={() => setCheck(!check)}
      />
      <p className={styles.item__title}>{todo.title}</p>
      <div className={styles.item__controls}>
        <img src="/images/edit.svg" />
      </div>
      <div className={styles.item__controls} onClick={deleteItem}>
        <img src="/images/remove.svg" />
      </div>
    </div>
  )
}
export default ListItem
