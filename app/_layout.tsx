import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return <>
      <StatusBar hidden={true} />

      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />

         <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />

         <Stack.Screen
          name="link/Details"
          options={{
            headerShown: false,
          }}
        />
        
      </Stack>
  
    </>
}
