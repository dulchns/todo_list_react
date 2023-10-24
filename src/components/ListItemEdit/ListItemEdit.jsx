import { useEffect, useState } from "react"
import styles from "./ListItemEdit.module.css"

const ListItemEdit = ({ value, parentRef, update, cancel}) => {
  const [input, setInput] = useState(value)

  useEffect(() => {
    const outerClick = (e) => {
      if(document.body.contains(e.target) && !parentRef.current.contains(e.target)) cancel()
    }
    document.body.addEventListener('click', outerClick, true)
    return () => document.body.removeEventListener('click', outerClick, true)
  }, [])

  const editComplete = () => update(input)
  const editCancel = () => cancel()

  return (
    <form className={styles.edit__form} onSubmit={(e) => {
      e.preventDefault()
      editComplete()
      }}>
      <input
        className={styles.edit__field}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        autoFocus
      />
      <div className={styles.edit__button} onClick={editComplete}>
        <img src="/images/finish_edit.svg" alt="" />
      </div>
      <div className={styles.edit__button} onClick={editCancel}>
        <img src="/images/cancel_edit.svg" alt="" />
      </div>
    </form>
  )
}
export default ListItemEdit
