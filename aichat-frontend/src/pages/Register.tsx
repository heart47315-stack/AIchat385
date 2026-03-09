import { useState } from "react"
import api from "../api/api.ts"

export default function Register(){

  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const register = async ()=>{

    await api.post("/auth/register",{
      username,
      email,
      password
    })

    alert("register success")
  }

  return(

    <div className="formPage">

      <h2>Register</h2>

      <input
        placeholder="username"
        onChange={e=>setUsername(e.target.value)}
      />

      <input
        placeholder="email"
        onChange={e=>setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="password"
        onChange={e=>setPassword(e.target.value)}
      />

      <button onClick={register}>
        Register
      </button>

    </div>

  )
}