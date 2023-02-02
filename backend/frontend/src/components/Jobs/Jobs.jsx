import React, { useEffect, useState } from "react"

export const Jobs = () => {
  const [users, setUsers] = useState([])

  const fetchData = async () => {
    const response = await fetch("http://localhost:8080/user/postjob")
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() => {
   fetch(`http:localhost:3000/user/jobs`, {method:'GET'})
  }, [])

  return (
    <>
    </>
  )
}


