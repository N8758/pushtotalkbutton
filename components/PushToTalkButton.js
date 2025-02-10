import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { playStartSound, playStopSound } from './AudioHandler';
import { sendMessage } from './WebSocketHandler';

export default function PushToTalkButton() {
  const [talking, setTalking] = useState(false);

  const handlePressIn = () => {
    setTalking(true);
    playStartSound();
    sendMessage('start talking');
  };

  const handlePressOut = () => {
    setTalking(false);
    playStopSound();
    sendMessage('stop talking');
  };

  return (
    <TouchableOpacity
      style={[styles.button, talking ? styles.active : styles.inactive]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Text style={styles.buttonText}>{talking ? 'Talking...' : 'Press to Talk'}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  active: {
    backgroundColor: '#FF5733',
  },
  inactive: {
    backgroundColor: '#3498DB',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
