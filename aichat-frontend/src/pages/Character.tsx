import { useParams, useNavigate } from "react-router-dom"

export default function Character() {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div className="bg-[#6b5b5b] min-h-screen text-white p-4">
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <div className="mt-4 text-center">
        <img
          src={`https://picsum.photos/300?${id}`}
          className="mx-auto rounded-xl"
        />
        <h1 className="text-xl mt-2">Character {id}</h1>

        <button
          className="bg-white text-black px-4 py-2 rounded mt-3"
          onClick={() => navigate(`/chat/${id}`)}
        >
          💬 Start Chat
        </button>
      </div>
    </div>
  )
}