export default function Profile() {
  return (
    <div className="min-h-screen bg-[#6b5c5c] text-white p-4">
      <h1 className="text-xl font-bold mb-6">โปรไฟล์ผู้ใช้</h1>

      <div className="bg-[#5a4d4d] rounded-2xl p-4 mb-6">
        <h2 className="text-lg font-semibold">Username</h2>
        <p className="text-sm text-gray-300">แก้ไขข้อมูลผู้ใช้</p>
      </div>

      <button
        onClick={() => {
          localStorage.removeItem("token")
          localStorage.removeItem("user")
          window.location.href = "/login"
        }}
        className="w-full bg-red-500 p-3 rounded-xl"
      >
        ออกจากระบบ
      </button>
    </div>
  )
}