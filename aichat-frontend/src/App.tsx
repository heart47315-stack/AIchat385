import { BrowserRouter, Routes, Route } from "react-router-dom"

// ✅ แก้ path ตรงนี้
import Home from "./pages/Home"
import Character from "./pages/Character"
import Chat from "./pages/Chat"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* หน้าแรก */}
        <Route path="/" element={<Home />} />

        {/* Character */}
        <Route path="/character/:id" element={<Character />} />

        {/* Chat */}
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat/:id" element={<Chat />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 404 */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App