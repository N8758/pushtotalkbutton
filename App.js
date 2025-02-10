import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PushToTalkButton from './components/PushToTalkButton';
import WebSocketHandler from './components/WebSocketHandler';

export default function App() {
  const [status, setStatus] = useState('Disconnected');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Push-to-Talk Interface</Text>
      <Text style={styles.status}>{status}</Text>
      <WebSocketHandler setStatus={setStatus} />
      <PushToTalkButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  status: {
    fontSize: 18,
    marginVertical: 20,
  },
});
