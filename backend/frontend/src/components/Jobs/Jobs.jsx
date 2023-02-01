import React, { useEffect, useState } from "react"

export const Jobs = () => {
  const [users, setUsers] = useState([])

  const fetchData = async () => {
    const response = await fetch("http://localhost:8080/user/postjob")
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}


