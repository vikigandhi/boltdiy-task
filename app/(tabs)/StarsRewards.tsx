import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StarsRewards() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stars & Rewards</Text>
      {/* Display stars and streaks */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
