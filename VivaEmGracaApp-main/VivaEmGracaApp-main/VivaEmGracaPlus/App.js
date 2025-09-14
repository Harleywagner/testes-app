import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import EventsScreen from './src/screens/EventsScreen';
import VideosScreen from './src/screens/VideosScreen';
import CoursesScreen from './src/screens/CoursesScreen';
import ContactScreen from './src/screens/ContactScreen';
import CourseContentScreen from './src/screens/CourseContentScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Início') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Sobre') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          } else if (route.name === 'Eventos') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Vídeos') {
            iconName = focused ? 'play-circle' : 'play-circle-outline';
          } else if (route.name === 'Cursos') {
            iconName = focused ? 'school' : 'school-outline';
          } else if (route.name === 'Contato') {
            iconName = focused ? 'call' : 'call-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4a7c59',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#e0e0e0',
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
        },
        headerStyle: {
          backgroundColor: '#4a7c59',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}
    >
      <Tab.Screen 
        name="Início" 
        component={HomeScreen}
        options={{
          title: 'Igreja Viva em Graça'
        }}
      />
      <Tab.Screen 
        name="Sobre" 
        component={AboutScreen}
        options={{
          title: 'Sobre Nós'
        }}
      />
      <Tab.Screen 
        name="Eventos" 
        component={EventsScreen}
        options={{
          title: 'Eventos'
        }}
      />
      <Tab.Screen 
        name="Vídeos" 
        component={VideosScreen}
        options={{
          title: 'Vídeos'
        }}
      />
      <Tab.Screen 
        name="Cursos" 
        component={CoursesScreen}
        options={{
          title: 'Cursos Bíblicos'
        }}
      />
      <Tab.Screen 
        name="Contato" 
        component={ContactScreen}
        options={{
          title: 'Contato'
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#4a7c59" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="CourseContent" component={CourseContentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

