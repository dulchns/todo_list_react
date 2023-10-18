import { useState } from "react"
import styles from "./ListItem.module.css"

const ListItem = ({ todo }) => {
  const [check, setCheck] = useState(todo.completed)
  let rootClass = [styles.item]
  if(check) rootClass.push(styles.item__complited)
  return (
    <div className={rootClass.join(' ')}>
      <input
        type="checkbox"
        checked={check}
        onChange={() => setCheck(!check)}
      />
      <p className={styles.item__title}>{todo.title}</p>
    </div>
  )
}
export default ListItem
