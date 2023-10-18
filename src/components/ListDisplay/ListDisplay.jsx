import ListItem from "../ListItem/ListItem"
import Loader from "../UI/Loader/Loader"
import styles from "./ListDisplay.module.css"

const ListDisplay = ({ data, isLoading, error }) => {
  
  return (
    <div className={styles.display}>
      {isLoading && <Loader />}
      {error && <div>Error: {error}! Try reload page!</div>}
      {data.length ? data.map((todo) => (
        <ListItem key={todo.id} todo={todo} />
      )) : null}
    </div>
  )
}
export default ListDisplay
