import axios from "axios"

export default class PostService {
  static getUserTodos(id) {
    return axios.get(`http://localhost:3000/todos`, {
      params: { userId: id },
    })
  }

  static setUserTodo(todo) {
    return axios.post("http://localhost:3000/todos/", todo)
  }

  static deleteUserTodo(id) {
    return axios.delete(`http://localhost:3000/todos/${id}`)
  }

  static updateUserTodo(id, data) {
    return axios.put(`http://localhost:3000/todos/${id}`, data)
  }

  static getUser(username) {
    return axios.get(`http://localhost:3000/users`, {
      params: { username: username },
    })
  }

  static setUser(data) {
    return axios.post("http://localhost:3000/users", data)
  }
}
