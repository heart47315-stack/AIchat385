const handleRegister = async () => {
  try {
    await api.post("/auth/register", {
      username,
      email,
      password
    })

    alert("สมัครสำเร็จ")
    navigate("/login")
  } catch {
    alert("สมัครไม่สำเร็จ")
  }
}