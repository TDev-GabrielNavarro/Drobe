import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import React from 'react';

import { useClientOnlyValue } from '@/components/useClientOnlyValue';
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
        headerShown: useClientOnlyValue(false, true),
        tabBarShowLabel: false,
        headerShown: true,
      }}>
      <Tabs.Screen
        name="wardrobe"
        options={{
          title: 'Drobe',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons 
            name="wardrobe-outline" 
            size={28} 
            color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: '+',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{
                ios: 'chevron.left.forwardslash.chevron.right',
                android: 'code',
                web: 'code',
              }}
              tintColor={color}
              size={28}
            />
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
            size={28}
          />
        ),
      }}
    />
    </Tabs>
  );
}
