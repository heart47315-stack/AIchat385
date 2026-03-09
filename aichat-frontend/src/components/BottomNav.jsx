import { useNavigate } from "react-router-dom"

export default function BottomNav(){

  const navigate = useNavigate()

  return(

    <div className="bottomNav">

      <button onClick={()=>navigate("/")}>🏠</button>

      <button onClick={()=>navigate("/favorites")}>❤️</button>

      <button onClick={()=>navigate("/chat")}>💬</button>

      <button onClick={()=>navigate("/profile")}>👤</button>

    </div>

  )
}