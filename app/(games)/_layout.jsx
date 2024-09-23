import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const GamesLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="match"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="say"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="count"
          options={{
            headerShown: false,
          }}
        />
      </Stack>

      <StatusBar backgroundColor="#161622"
      style="light"/>
    </>
  )
}

export default GamesLayout