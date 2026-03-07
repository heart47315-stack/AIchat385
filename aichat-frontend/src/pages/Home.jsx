import { useEffect, useState } from "react"
import api from "../api/api"
import CharacterCard from "../components/CharacterCard"

export default function Home(){

  const [characters,setCharacters] = useState([])

  useEffect(()=>{
    api.get("/characters").then(res=>{
      setCharacters(res.data)
    })
  },[])

  return(
    <div>

      <h2>Characters</h2>

      <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:20}}>
        {characters.map(c=>(
          <CharacterCard key={c.id} character={c}/>
        ))}
      </div>

    </div>
  )
}