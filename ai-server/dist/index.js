"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const openai_1 = __importDefault(require("openai"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = require("@prisma/client");
const dotenv_1 = __importDefault(require("dotenv"));
const bcrypt_1 = __importDefault(require("bcrypt"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || "defaultsecret";
const openai = new openai_1.default({
    apiKey: process.env.OPENAI_API_KEY,
});
// ✅ Chat API
app.post("/api/chat", async (req, res) => {
    const { message } = req.body;
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: "คุณคือ AI ที่ตอบแบบเป็นกันเอง เข้าใจบริบท",
                },
                { role: "user", content: message },
            ],
        });
        res.json({
            reply: response.choices[0].message?.content,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "เกิดข้อผิดพลาด" });
    }
});
// ✅ Register
app.post("/api/register", async (req, res) => {
    const { username, password } = req.body;
    try {
        // 🔒 hash password
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                username,
                password: hashedPassword,
            },
        });
        const token = jsonwebtoken_1.default.sign({ id: user.id }, JWT_SECRET, {
            expiresIn: "1d",
        });
        res.json({ user, token });
    }
    catch (error) {
        res.status(400).json({ error: "สมัครสมาชิกไม่สำเร็จ" });
    }
});
// ✅ Login
app.post("/api/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await prisma.user.findUnique({
            where: { username },
        });
        if (!user) {
            return res.status(401).json({ error: "ไม่พบผู้ใช้" });
        }
        // 🔒 compare password
        const isMatch = await bcrypt_1.default.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: "รหัสผ่านไม่ถูกต้อง" });
        }
        const token = jsonwebtoken_1.default.sign({ id: user.id }, JWT_SECRET, {
            expiresIn: "1d",
        });
        res.json({ user, token });
    }
    catch (error) {
        res.status(500).json({ error: "เกิดข้อผิดพลาด" });
    }
});
// ✅ test
app.get("/", (req, res) => {
    res.send("API ทำงานแล้ว 🚀");
});
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
