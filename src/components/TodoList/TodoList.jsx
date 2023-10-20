import { useContext, useEffect, useMemo, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import useFetch from "../../hooks/useFetch"
import ListControl from "../ListControl/ListControl"
import ListDisplay from "../ListDisplay/ListDisplay"
import ListHeader from "../ListHeader/ListHeader"
import PostService from "../PostService/PostService"
import styles from "./TodoList.module.css"

const TodoList = () => {
  const { isAuth: user } = useContext(AuthContext)
  const [todos, setTodos] = useState([])
  const [serveFetch, isLoading, error] = useFetch(async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 500)) //imitating request delay
    const response = await PostService.getUserTodos(user.id)
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
        setData={setTodos}
      />
      <ListControl setData={setTodos} />
    </div>
  )
}
export default TodoList
