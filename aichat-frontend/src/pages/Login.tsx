const handleLogin = async () => {
  try {
    const res = await api.post("/auth/login", {
      email,
      password
    })

    localStorage.setItem("token", res.data.token)
    localStorage.setItem("user", JSON.stringify(res.data.user))

    navigate("/")
  } catch (err) {
    alert("เข้าสู่ระบบไม่สำเร็จ")
  }
}