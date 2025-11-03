import dotenv from 'dotenv';
dotenv.config();
import express, { static as static_ } from 'express';
import http from 'http';
import path from 'path';
import { Server } from 'socket.io';
import { engine } from 'express-handlebars';
const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

app.use('/static', static_(path.join(__dirname, '..', 'public')));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	// res.sendFile(path.join(__dirname, 'views', 'index.html'));
	res.render('index');
});
app.get('/chat', (req, res) => {
    res.render('chat');
});
const server: http.Server = app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});
const io = new Server(server, {
	cors: {
		origin: ['http://localhost:3000'],
	},
});

const connectedUsers = [];

io.on('connection', (socket) => {
	socket.emit('confirmacion');
	const username = socket.handshake.auth.username;
	console.log(`Nuevo cliente conectado: ${username}, ${socket.id}`);

	socket.on('disconnect', () => {
		console.log('Cliente desconectado:', socket.id);
	});

	socket.on('joinSala', (data) => {
		socket.join(data.sala);
	});
	socket.on('sendMessage', (data) => {
		const timestamp = new Date().toISOString();
		io.to(data.sala).emit('receiveMessage', {
			message: data.message,
			username: username,
			timestamp: timestamp,
		});
	});
});
