"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initChatSocket = initChatSocket;
function initChatSocket(io) {
    io.on("connection", (socket) => {
        console.log("User connected:", socket.id);
        socket.on("chat message", (msg) => {
            console.log("message:", msg);
            io.emit("chat message", msg);
        });
        socket.on("disconnect", () => {
            console.log("User disconnected:", socket.id);
        });
    });
}
