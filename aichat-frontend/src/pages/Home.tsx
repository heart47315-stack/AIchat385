import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Character from "./pages/Character"
import Chat from "./pages/Chat"
import Login from "./pages/Login"
import Register from "./pages/Register"

// (ถ้ามีหน้าเพิ่มในอนาคตค่อย import)
// import Favorites from "./pages/Favorites"
// import Profile from "./pages/Profile"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* หน้าแรก */}
        <Route path="/" element={<Home />} />

        {/* Character */}
        <Route path="/character/:id" element={<Character />} />

        {/* Chat รองรับทั้งมี id และไม่มี id */}
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat/:id" element={<Chat />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* กันหลง route */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App