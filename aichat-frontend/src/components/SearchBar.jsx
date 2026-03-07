import { useState } from "react"
import api from "../api/api"

export default function SearchBar({setCharacters}){

  const [q,setQ] = useState("")

  const search = async ()=>{

    const res = await api.get("/characters/search?q="+q)

    setCharacters(res.data)

  }

  return(
    <div>

      <input
        placeholder="Search character"
        onChange={(e)=>setQ(e.target.value)}
      />

      <button onClick={search}>Search</button>

    </div>
  )
}