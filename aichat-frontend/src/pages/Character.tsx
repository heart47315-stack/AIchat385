import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/api";
import type { Character as CharacterType } from "../types";

export default function Character() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [character, setCharacter] = useState<CharacterType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if (!id) return;

    api.get(`/characters/${id}`)
      .then((res) => {
        setCharacter(res.data);
      })
      .catch((err) => {
        console.error("Error fetching character:", err);
      })
      .finally(() => {
        setLoading(false);
      });

  }, [id]);

  // 🔄 Loading state
  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  // ❌ ไม่เจอข้อมูล
  if (!character) {
    return <p style={{ textAlign: "center" }}>Character not found</p>;
  }

  return (
    <div className="page">

      <img
        className="characterImage"
        src={character.avatar || "https://via.placeholder.com/300"}
        alt={character.name}
      />

      <h2>{character.name}</h2>

      <p>{character.description || "No description"}</p>

      <p>
        <strong>Class:</strong> {character.class}
      </p>

      <button
        onClick={() => navigate(`/chat/${character.id}`)}
      >
        Chat
      </button>

    </div>
  );
}