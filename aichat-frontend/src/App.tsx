import { BrowserRouter, Routes, Route } from "react-router-dom"

// 📄 Pages
import Home from "./pages/Home"
import Character from "./pages/Character"
import Chat from "./pages/Chat"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🏠 Home */}
        <Route path="/" element={<Home />} />

        {/* 🎭 Character Detail */}
        <Route path="/character/:id" element={<Character />} />

        {/* 💬 Chat */}
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat/:id" element={<Chat />} />

        {/* 🔐 Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ❌ 404 Page */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}

// 📌 แยก component 404 (ดีกว่าเขียน inline)
function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl mb-4">404 Not Found</h1>
      <p className="mb-4">ไม่พบหน้าที่คุณต้องการ</p>

      <a
        href="/"
        className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
      >
        กลับหน้าแรก
      </a>
    </div>
  )
}

export default App
