import { useEffect } from "react"
import ListItem from "../ListItem/ListItem"
import styles from "./ListDisplay.module.css"
import axios from "axios"
import useFetch from "../../hooks/useFetch"
import Loader from "../UI/Loader/Loader"

const ListDisplay = ({ data, setData, user }) => {
  const [serveFetch, isLoading, error] = useFetch(async () => {
    const response = await axios.get(
      `http://localhost:3000/todos?userId=${user.id}`
    )
    setData(response.data)
  })

  useEffect(() => {
    serveFetch()
  }, [])
  return (
    <div className={styles.display}>
      {isLoading && <Loader/>}
      {data.map((todo) => (
        <ListItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}
export default ListDisplay
