import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#0F766E',
        tabBarInactiveTintColor: '#8A9996',
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: styles.label,
        tabBarItemStyle: styles.item,
        tabBarStyle: styles.bar,
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = route.name === 'index'
            ? focused ? 'home' : 'home-outline'
            : focused ? 'map' : 'map-outline';

          return (
            <View style={[styles.icon, focused && styles.activeIcon]}>
              <Ionicons name={iconName} size={size - 1} color={color} />
            </View>
          );
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
        }}
      />
      <Tabs.Screen
        name="routes"
        options={{
          title: 'Mapa y rutas',
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E2EBE7',
    borderRadius: 22,
    borderTopWidth: 1,
    bottom: 16,
    elevation: 8,
    height: 76,
    left: 18,
    paddingBottom: 8,
    paddingTop: 8,
    position: 'absolute',
    right: 18,
    shadowColor: '#183B36',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.14,
    shadowRadius: 14,
  },
  item: { paddingTop: 2 },
  label: { fontSize: 11, fontWeight: '700' },
  icon: { alignItems: 'center', borderRadius: 14, height: 30, justifyContent: 'center', width: 54 },
  activeIcon: { backgroundColor: '#DDF2EC' },
});
