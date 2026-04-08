import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Chat from "./pages/Chat"
import Profile from "./pages/Profile"
import CreateCharacter from "./pages/CreateCharacter"

import BottomNav from "./components/BottomNav"

export default function App() {
  return (
    <BrowserRouter>

      <div className="pb-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<CreateCharacter />} />
        </Routes>
      </div>

      <BottomNav />

    </BrowserRouter>
  )
}