import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Send } from 'lucide-react-native';
import { useState } from 'react';

export default function CoachScreen() {
  const [message, setMessage] = useState('');

  const messages = [
    { id: 1, text: "Hi! I'm your AI fitness coach. How can I help you today?", isAI: true },
    { id: 2, text: "I'd like to improve my squat form", isAI: false },
    {
      id: 3,
      text: "Great! Here are some key points for proper squat form:\n\n1. Keep your feet shoulder-width apart\n2. Point toes slightly outward\n3. Keep your chest up\n4. Push your hips back\n5. Keep your knees in line with your toes",
      isAI: true,
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.messagesContainer}>
        {messages.map((msg) => (
          <View
            key={msg.id}
            style={[
              styles.messageBox,
              msg.isAI ? styles.aiMessage : styles.userMessage,
            ]}>
            <Text style={[styles.messageText, msg.isAI ? styles.aiText : styles.userText]}>
              {msg.text}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ask your AI coach..."
          placeholderTextColor="#666"
          value={message}
          onChangeText={setMessage}
          multiline
        />
        <TouchableOpacity style={styles.sendButton}>
          <Send size={24} color="#22c55e" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  messagesContainer: {
    flex: 1,
    padding: 16,
  },
  messageBox: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
    marginBottom: 12,
  },
  aiMessage: {
    backgroundColor: '#2a2a2a',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 4,
  },
  userMessage: {
    backgroundColor: '#22c55e',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 4,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 24,
  },
  aiText: {
    color: '#fff',
  },
  userText: {
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#2a2a2a',
    alignItems: 'flex-end',
  },
  input: {
    flex: 1,
    backgroundColor: '#333',
    borderRadius: 20,
    padding: 12,
    color: '#fff',
    fontSize: 16,
    maxHeight: 100,
    marginRight: 12,
  },
  sendButton: {
    width: 48,
    height: 48,
    backgroundColor: '#333',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});