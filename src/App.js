import { useContext } from "react"
import "./App.css"
import Login from "./components/Login/Login"
import TodoList from "./components/TodoList/TodoList"
import { AuthContext } from "./contexts/AuthContext"

function App() {
  const { isAuth } = useContext(AuthContext)
  return (
    <div className="App">
        {isAuth ? <TodoList/> : <Login/>}
    </div>
  )
}

export default App
