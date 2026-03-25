import { useNavigate } from "react-router-dom";
import type { Character } from "../types";

type Props = {
  character: Character;
};

export default function CharacterCard({ character }: Props) {

  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => navigate(`/character/${character.id}`)}
    >

      <img
        src={character.avatar || "https://via.placeholder.com/150"}
        alt={character.name}
      />

      <div className="card-name">
        {character.name}
      </div>

      <div className="card-class">
        {character.class}
      </div>

    </div>
  );
}