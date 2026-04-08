import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Profile from "./pages/Profile"
import CreateCharacter from "./pages/CreateCharacter"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/profile" />} />  {/* 👈 redirect */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<CreateCharacter />} />
      </Routes>
    </BrowserRouter>
  )
}