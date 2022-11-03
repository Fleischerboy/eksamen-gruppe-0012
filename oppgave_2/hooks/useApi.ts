import { useState } from 'react'
const useApi = () => {
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
}

export default useApi
