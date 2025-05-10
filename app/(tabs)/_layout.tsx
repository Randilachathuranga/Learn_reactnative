import { Text, View } from 'react-native';

import React from 'react';
import { Tabs } from 'expo-router';

/**
 * Tab icon component with label
 * @param {boolean} focused - Whether the tab is currently focused
 * @param {string} label - Text label for the tab
 */
const TabIcon = ({ focused, label }) => {
  return (
    <View className={`flex flex-row flex-1 min-w-[112px] min-h-14 justify-center items-center rounded-full ${focused ? 'bg-blue-600' : 'bg-transparent'}`}>
      <Text className={`text-base font-semibold ${focused ? 'text-white' : 'text-gray-400'}`}>
        {label}
      </Text>
    </View>
  );
};

/**
 * Main tab layout component for navigation
 */
export default function TabLayout() {
  // Tab configuration data
  const tabs = [
    { name: "index", title: "Home", label: "Home" },
    { name: "one", title: "one", label: "one" },
    { name: "two", title: "two", label: "two" },
  ];
  
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: 'absolute',
          overflow: 'hidden',
          borderWidth: 1,
          borderColor: '#0f0D23',
        },
        tabBarShowLabel: false,
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                label={tab.label}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}