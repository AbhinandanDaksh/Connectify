const { Server } = require("socket.io");
const http = require("http");
const express = require("express");

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ['https://connectify-xi-plum.vercel.app'],
        methods: ['GET', 'POST'],
    },
});

const userSocketMap = {}; // {userId -> socketId}

// Function to get the receiver's socket ID
const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

// Event listener for new socket connections
io.on('connection', (socket) => {
    const userId = socket.handshake.query.userId;
    
    if (userId !== undefined) {
        userSocketMap[userId] = socket.id;
    }

    io.emit('getOnlineUsers', Object.keys(userSocketMap)); // Emit list of online users

    // Event listener for disconnection
    socket.on('disconnect', () => {
        delete userSocketMap[userId];
        io.emit('getOnlineUsers', Object.keys(userSocketMap)); // Update online users after disconnection
    });
});

// Correct export using CommonJS syntax
module.exports = { app, io, server, getReceiverSocketId };
