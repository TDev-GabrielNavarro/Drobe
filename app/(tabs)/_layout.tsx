import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import React from 'react';

import { View } from '@/components/Themed';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarInactiveTintColor: Colors[colorScheme].tabIconDefault,
        tabBarStyle: { backgroundColor: Colors[colorScheme].background },
        headerStyle: { backgroundColor: Colors[colorScheme].background,
          elevation: 0,
          shadowOpacity: 0,
         },
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="wardrobe"
        options={{
          title: 'Drobe',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons 
            name="wardrobe-outline" 
            size={30} 
            color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: 'Add',
          tabBarIcon: ({ color }) => (
            <View style={{
              width: 75,
              height: 75,
              borderRadius: 50,
              backgroundColor: Colors[colorScheme].tint,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
            }}>
              <Ionicons 
              name="add" 
              size={40} 
              color={Colors[colorScheme].background} 
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
      name="outfits"
      options={{
        title: 'Outfits',
        tabBarIcon: ({ color }) => (
          <SymbolView
            name={{
              ios: 'chevron.left.forwardslash.chevron.right',
              android: 'code',
              web: 'code',
            }}
            tintColor={color}
            size={30}
          />
        ),
      }}
    />
    </Tabs>
  );
}
