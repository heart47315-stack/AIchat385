import express from "express";
import cors from "cors";
import characterRoutes from "./routes/characterRoutes";

const app = express();

// ✅ แก้ปัญหา req.body ใช้งานไม่ได้
app.use(express.json());

// ✅ กัน CORS (frontend เรียกได้)
app.use(cors());

// ✅ route
app.use("/api/characters", characterRoutes);

// ✅ start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});