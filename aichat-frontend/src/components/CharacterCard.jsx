import { useNavigate } from "react-router-dom"

export default function CharacterCard({character}){

  const nav = useNavigate()

  return(
    <div onClick={()=>nav("/character/"+character.id)}
         style={{border:"1px solid #ccc",padding:10,cursor:"pointer"}}>

      <img src={character.avatar} width="100%"/>

      <h3>{character.name}</h3>

    </div>
  )
}