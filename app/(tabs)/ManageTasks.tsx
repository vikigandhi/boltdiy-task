import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function ManageTasks() {
  const [taskTitle, setTaskTitle] = useState('');
  const [startTime, setStartTime] = useState('');
  const [category, setCategory] = useState('');
  const [repeat, setRepeat] = useState('One-time');

  const createTask = () => {
    // Save task to Supabase
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Task Title"
        value={taskTitle}
        onChangeText={setTaskTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Start Time"
        value={startTime}
        onChangeText={setStartTime}
        style={styles.input}
      />
      <TextInput
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
        style={styles.input}
      />
      <Button title="Create Task" onPress={createTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 8,
    borderRadius: 4,
  },
});
