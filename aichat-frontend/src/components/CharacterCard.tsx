import { useNavigate } from "react-router-dom"

export default function CharacterCard({character}){

  const navigate = useNavigate()

  return(

    <div
      className="card"
      onClick={()=>navigate(`/character/${character.id}`)}
    >

      <img src={character.image}/>

      <div className="card-name">
        {character.name}
      </div>

      <div className="card-tag">
        {character.tag}
      </div>

    </div>

  )
}