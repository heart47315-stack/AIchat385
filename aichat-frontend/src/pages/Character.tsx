import { useParams,useNavigate } from "react-router-dom"
import { useEffect,useState } from "react"
import api from "../api/api.ts"
import type { Character as CharacterType } from "../types"

export default function Character(){

  const {id} = useParams()
  const navigate = useNavigate()

  const [character,setCharacter] = useState<CharacterType | null>(null)

  useEffect(()=>{

    api.get(`/characters/${id}`).then((res)=>{
      setCharacter(res.data)
    })

  },[id])

  if(!character) return <p>Loading...</p>

  return(

    <div className="page">

      <img
        className="characterImage"
        src={character.image}
      />

      <h2>{character.name}</h2>

      <p>{character.description}</p>

      <button
        onClick={()=>navigate(`/chat/${character.id}`)}
      >
        Chat
      </button>

    </div>

  )
}