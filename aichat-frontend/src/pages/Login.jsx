import { useState } from "react"
import api from "../api/api"
import { useNavigate } from "react-router-dom"

export default function Login(){

  const navigate = useNavigate()

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const login = async ()=>{

    const res = await api.post("/auth/login",{
      email,
      password
    })

    localStorage.setItem("token",res.data.token)

    navigate("/")
  }

  return(

    <div className="formPage">

      <h2>Login</h2>

      <input
        placeholder="email"
        onChange={e=>setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="password"
        onChange={e=>setPassword(e.target.value)}
      />

      <button onClick={login}>
        Login
      </button>

    </div>

  )
}