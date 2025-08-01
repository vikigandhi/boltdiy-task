import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const categories = {
  Morning: 'yellow',
  Study: 'blue',
  Play: 'green',
  Classes: 'purple',
  Evening: 'red',
};

export default function TaskListView() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data, error } = await supabase
        .from('tasks')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) console.error('Error fetching tasks:', error);
      else setTasks(data);
    };

    fetchTasks();
  }, []);

  const toggleTaskCompletion = async (index) => {
    const task = tasks[index];
    const { data, error } = await supabase
      .from('tasks')
      .update({ completed: !task.completed })
      .eq('id', task.id);

    if (error) console.error('Error updating task:', error);
    else setTasks((prevTasks) =>
      prevTasks.map((t, i) => (i === index ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <View style={[styles.taskCard, { backgroundColor: categories[item.category] }]}>
            <Text>{item.title}</Text>
            <TouchableOpacity onPress={() => toggleTaskCompletion(index)}>
              <Text>{item.completed ? '✅' : '⬜️'}</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  taskCard: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
});
