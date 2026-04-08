import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.aichat.app',        // 📌 รหัสแอป (ใช้สำหรับ build บนมือถือ)
  appName: 'aichat',              // 📌 ชื่อแอป
  webDir: 'aichat-frontend/dist'  // 📌 โฟลเดอร์ที่เก็บไฟล์ build ของ frontend
};

export default config;
