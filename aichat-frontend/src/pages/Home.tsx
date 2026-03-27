import { useEffect, useState } from "react";
import api from "../api/api";
import type { Character } from "../types";

import CharacterCard from "../components/CharacterCard";
import SearchBar from "../components/SearchBar";
import BottomNav from "../components/BottomNav";

export default function Home() {

  const [characters, setCharacters] = useState<Character[]>([]);
  const [search, setSearch] = useState("");
  const [selectedClass, setSelectedClass] = useState("All");

  useEffect(() => {
    console.log("🔵 Home mounted");

    const fetchCharacters = async () => {
      try {
        const res = await api.get("/characters");
        console.log("✅ API RESPONSE:", res.data);

        setCharacters(res.data);
      } catch (err) {
        console.error("❌ API ERROR:", err);
      }
    };

    fetchCharacters();

  }, []);

  const filtered = characters.filter((c) => {
    const matchSearch =
      c.name.toLowerCase().includes(search.toLowerCase());

    const matchClass =
      selectedClass === "All" || c.class === selectedClass;

    return matchSearch && matchClass;
  });

  return (
    <div className="page">

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <div className="tasks">
        {["All", "Warrior", "Mage", "Love", "Cute"].map((t) => (
          <button
            key={t}
            onClick={() => setSelectedClass(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid">
        {filtered.map((c) => (
          <CharacterCard
            key={c.id}
            character={c}
          />
        ))}
      </div>

      <BottomNav />

    </div>
  );
}