import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

export default function CalendarView() {
  const [selectedDay, setSelectedDay] = useState('');
  const [tasks, setTasks] = useState([]);
  const [daysOfWeek, setDaysOfWeek] = useState([]);

  useEffect(() => {
    const today = new Date();
    const firstDayOfWeek = today.getDate() - today.getDay() + 1; // Monday as the first day
    const weekDays = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(today.setDate(firstDayOfWeek + i));
      return {
        day: date.toLocaleString('en-US', { weekday: 'short' }),
        date: date.getDate(),
      };
    });
    setDaysOfWeek(weekDays);
    setSelectedDay(`${weekDays[3].day} ${weekDays[3].date}`); // Default to Thursday
  }, []);

  useEffect(() => {
    // Fetch tasks from Supabase for the selected day
    // Example: setTasks([]);
  }, [selectedDay]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Viaan's Daily Tasks</Text>
      <View style={styles.weekContainer}>
        {daysOfWeek.map(({ day, date }) => {
          const dayString = `${day} ${date}`;
          return (
            <TouchableOpacity
              key={dayString}
              style={[styles.dayCard, selectedDay === dayString && styles.selectedDay]}
              onPress={() => setSelectedDay(dayString)}
            >
              <Text style={styles.dayText}>{day}</Text>
              <Text style={styles.dateText}>{date}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <Text style={styles.tasksTitle}>Tasks for {selectedDay}</Text>
      {tasks.length === 0 ? (
        <View style={styles.noTasksContainer}>
          <Text style={styles.noTasksText}>🎉 No tasks scheduled for this day!</Text>
        </View>
      ) : (
        // Render tasks here
        <View></View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#6a11cb',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  dayCard: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    width: '13%', // Responsive width for 7 days
    alignItems: 'center',
  },
  selectedDay: {
    backgroundColor: '#8e2de2',
  },
  dayText: {
    fontSize: 16,
    color: '#333',
  },
  dateText: {
    fontSize: 14,
    color: '#333',
  },
  tasksTitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 8,
  },
  noTasksContainer: {
    backgroundColor: '#8e2de2',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  noTasksText: {
    color: '#fff',
    fontSize: 16,
  },
});
