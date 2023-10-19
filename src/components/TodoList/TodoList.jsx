import { useContext, useEffect, useMemo, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import ListControl from "../ListControl/ListControl"
import ListDisplay from "../ListDisplay/ListDisplay"
import ListHeader from "../ListHeader/ListHeader"
import styles from "./TodoList.module.css"
import useFetch from "../../hooks/useFetch"
import axios from "axios"

const TodoList = () => {
  const { isAuth: user } = useContext(AuthContext)
  const [todos, setTodos] = useState([])
  const [serveFetch, isLoading, error] = useFetch(async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 500)) //imitating request delay
    const response = await axios.get(`http://localhost:3000/todos`, {
      params: { userId: user.id },
    })
    setTodos(response.data)
  })

  useEffect(() => {
    serveFetch()
  }, [])

  const sortedTodos = useMemo(() => todos.sort((a, b) => b.id - a.id), [todos])

  return (
    <div className={styles.todolist}>
      <ListHeader />
      <ListDisplay
        data={sortedTodos}
        isLoading={isLoading}
        error={error}
        requestData={serveFetch}
      />
      <ListControl requestData={serveFetch} />
    </div>
  )
}
export default TodoList
