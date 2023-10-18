import { useState } from "react"

const useFetch = (callback) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

    const serveFetch = async (...args) => {
      try {
        setIsLoading(true)
        await new Promise(resolve => setTimeout(()=> resolve(), 500)) //imitating request delay
        await callback(...args)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
  
  return [serveFetch, isLoading, error]
}

export default useFetch