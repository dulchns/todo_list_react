import { memo } from "react"
import ListItem from "../ListItem/ListItem"
import Loader from "../UI/Loader/Loader"
import styles from "./ListDisplay.module.css"

const ListDisplay = ({ data, setData, isLoading, error }) => {
  if (isLoading) return <Loader />
  if (error) return <div>Error: {error}! Try reload page!</div>
  return (
    <div className={styles.display}>
      {data.length ? (
        data.map((todo) => (
          <ListItem key={todo.id} todoData={todo} setData={setData} />
        ))
      ) : (
        <div>No todos</div>
      )}
    </div>
  )
}
export default memo(ListDisplay)
