import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
  const [username, setUsername] = useState('')
  const [pasword, setPasword] = useState('')

  const {setUser} = useContext(UserContext)

  const handleSubmit = (e) =>{
    e.preventDefault()
    setUser({username, pasword})

  }
  return (
    <div>
        <h2>Login</h2>
        <input type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username' />
        <input type="password"
        value={pasword}
        onChange={(e) => setPasword(e.target.value)}
        placeholder='password'/>
        <button onClick={handleSubmit}>submit</button>
    
    
    </div>
  )
}

export default Login