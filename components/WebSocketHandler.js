import { useEffect } from 'react';

let socket;

const WebSocketHandler = ({ setStatus }) => {
  useEffect(() => {
    socket = new WebSocket('wss://echo.websocket.org'); // Echo WebSocket for testing

    socket.onopen = () => setStatus('Connected');
    socket.onmessage = (message) => console.log('Received:', message.data);
    socket.onclose = () => setStatus('Disconnected');
    socket.onerror = (error) => console.error('WebSocket Error:', error);

    return () => {
      socket.close();
    };
  }, []);

  return null;
};

export const sendMessage = (msg) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify({ message: msg }));
  }
};

export default WebSocketHandler;
