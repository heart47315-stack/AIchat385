import { useNavigate } from "react-router-dom"

type Character = {
  id: string
  name: string
  image: string
  tag: string
}

type Props = {
  character: Character
}

export default function CharacterCard({ character }: Props){

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