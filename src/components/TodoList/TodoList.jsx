import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import ListControl from "../ListControl/ListControl"
import ListDisplay from "../ListDisplay/ListDisplay"
import ListHeader from "../ListHeader/ListHeader"
import styles from "./TodoList.module.css"

const TodoList = () => {
  const { isAuth: user } = useContext(AuthContext)
  const [todos, setTodos] = useState([])

  return (
    <div className={styles.todolist}>
      <ListHeader />
      <ListDisplay data={todos} setData={setTodos} user={user}/>
      <ListControl adder={setTodos} />
    </div>
  )
}
export default TodoList