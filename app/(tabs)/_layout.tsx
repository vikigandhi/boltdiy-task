import { Tabs } from 'expo-router';
import { Home, Calendar, List, PlusCircle, Star } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="CalendarView"
        options={{
          title: 'Calendar',
          tabBarIcon: ({ color, size }) => <Calendar color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="TaskListView"
        options={{
          title: "Today's Tasks",
          tabBarIcon: ({ color, size }) => <List color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="ManageTasks"
        options={{
          title: 'Manage Tasks',
          tabBarIcon: ({ color, size }) => <PlusCircle color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="StarsRewards"
        options={{
          title: 'Stars & Rewards',
          tabBarIcon: ({ color, size }) => <Star color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
