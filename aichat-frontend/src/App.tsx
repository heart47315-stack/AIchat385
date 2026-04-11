import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import Chat from "./pages/Chat"
import CreateCharacter from "./pages/CreateCharacter"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Main */}
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<CreateCharacter />} />
      </Routes>
    </BrowserRouter>
  )
}