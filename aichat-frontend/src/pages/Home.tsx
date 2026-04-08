import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="bg-[#5b4f4f] min-h-screen text-white p-4 pb-24">

      {/* Header */}
      <h1 className="text-xl font-bold mb-4">AI Chat</h1>

      {/* Search */}
      <input
        placeholder="ค้นหา..."
        className="w-full p-2 rounded-lg bg-[#2f2a2a] mb-4"
      />

      {/* Category */}
      <div className="flex gap-2 mb-4">
        <span className="bg-white text-black px-3 py-1 rounded-full text-sm">All</span>
        <span className="bg-[#2f2a2a] px-3 py-1 rounded-full text-sm">Fantasy</span>
        <span className="bg-[#2f2a2a] px-3 py-1 rounded-full text-sm">Romance</span>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 gap-4">
        {[1,2,3,4].map((i) => (
          <Link key={i} to={`/chat`}>
            <div className="bg-[#2f2a2a] rounded-xl overflow-hidden">
              <img src={`https://picsum.photos/300?${i}`} />
              <div className="p-2">
                <p>Character {i}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  )
}