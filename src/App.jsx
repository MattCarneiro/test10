import React, { useEffect, useState } from 'react'

    function App() {
      const [message, setMessage] = useState('')

      useEffect(() => {
        fetch('http://localhost:3001/api')
          .then(res => res.json())
          .then(data => setMessage(data.message))
      }, [])

      return (
        <div>
          <h1>Fastify + React App</h1>
          <p>Message from backend: {message}</p>
        </div>
      )
    }

    export default App
