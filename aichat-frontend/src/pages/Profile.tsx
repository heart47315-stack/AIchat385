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