import { memo, useState } from "react"
import useFetch from "../../hooks/useFetch"
import PostService from "../PostService/PostService"
import styles from "./ListItem.module.css"

const ListItem = ({ todoData, setData }) => {
  const [todo, setTodo] = useState(todoData)
  const [deleteFetch] = useFetch(async () => {
    await PostService.deleteUserTodo(todo.id)
  })
  const [updateFetch] = useFetch(async (data) => {
    await PostService.updateUserTodo(todo.id, data)
  })
  const rootClass = [styles.item]
  if (todo.completed) rootClass.push(styles.item__complited)

  const deleteItem = async () => {
    await deleteFetch()
    setData((prev) => prev.filter((el) => el.id !== todo.id))
  }

  const changeCheckBox = async () => {
    const modifiedTodo = { ...todo, completed: !todo.completed }
    await updateFetch(modifiedTodo)
    setTodo(modifiedTodo)
  }

  return (
    <div className={rootClass.join(" ")}>
      <input type="checkbox" checked={todo.completed} onChange={changeCheckBox} />
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
export default memo(ListItem)
