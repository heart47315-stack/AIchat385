import { useNavigate } from "react-router-dom"

export default function Register() {
  const navigate = useNavigate()

  return (
    <div className="bg-[#6b5b5b] min-h-screen flex flex-col justify-center items-center text-white">
      <h1 className="mb-4">Register</h1>

      <button
        className="bg-white text-black px-4 py-2 rounded"
        onClick={() => navigate("/login")}
      >
        Go to Login
      </button>
    </div>
  )
}