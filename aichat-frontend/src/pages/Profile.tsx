export default function Profile() {
  return (
    <div className="min-h-screen bg-[#6b5c5c] text-white p-4">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold">โปรไฟล์ผู้ใช้</h1>
      </div>

      {/* Profile Card */}
      <div className="bg-[#5a4d4d] rounded-2xl p-4 flex items-center gap-4 shadow-lg">
        <div className="w-16 h-16 bg-gray-300 rounded-full"></div>

        <div>
          <h2 className="font-semibold text-lg">Username</h2>
          <p className="text-sm text-gray-300">แก้ไขข้อมูลผู้ใช้</p>
        </div>
      </div>

      {/* Menu */}
      <div className="mt-6 space-y-3">
        <button className="w-full bg-[#5a4d4d] p-3 rounded-xl text-left">
          แก้ไขโปรไฟล์
        </button>

        <button className="w-full bg-[#5a4d4d] p-3 rounded-xl text-left">
          ตัวละครของฉัน
        </button>

        <button className="w-full bg-red-500 p-3 rounded-xl">
          ออกจากระบบ
        </button>
      </div>

    </div>
  );
}