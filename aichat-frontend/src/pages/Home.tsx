import { useEffect, useState } from "react"
import api from "../api/api"
import type { Character } from "../types"

import CharacterCard from "../components/CharacterCard"
import SearchBar from "../components/SearchBar"
import BottomNav from "../components/BottomNav"

export default function Home(){

  const [characters, setCharacters] = useState<Character[]>([])
  const [search, setSearch] = useState("")
  const [tag, setTag] = useState("All")

  useEffect(()=>{

    api.get("/characters").then((res)=>{
      setCharacters(res.data)
    })

  },[])

  const filtered = characters.filter(c=>{

    const matchSearch =
      c.name.toLowerCase().includes(search.toLowerCase())

    const matchTag =
      tag === "All" || c.tag === tag

    return matchSearch && matchTag

  })

  return(

    <div className="page">

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <div className="tags">

        {["All","Love","Cute"].map(t=>(
          <button key={t} onClick={()=>setTag(t)}>
            {t}
          </button>
        ))}

      </div>

      <div className="grid">

        {filtered.map(c=>(
          <CharacterCard
            key={c.id}
            character={c}
          />
        ))}

      </div>

      <BottomNav/>

    </div>

  )
}