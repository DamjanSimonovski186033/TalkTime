import { StatusBar } from 'expo-status-bar'
import { Text, View, ScrollView } from 'react-native'
import { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../../components/CustomButton'

const Home = () => {
  const [timer, setTimer] = useState(25 * 60) // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false)
  const [isBreak, setIsBreak] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimer((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(intervalRef.current)
            // Switch between session and break
            if (!isBreak) {
              setTimer(5 * 60) // 5 minute break
              setIsBreak(true)
              setIsRunning(false) // Stop after session ends
            } else {
              setTimer(25 * 60) // Reset to 25 min session
              setIsBreak(false)
              setIsRunning(false) // Stop after break ends
            }
            return 0
          }
          return prevTime - 1
        })
      }, 1000)
    } else {
      clearInterval(intervalRef.current)
    }
    return () => clearInterval(intervalRef.current)
  }, [isRunning, isBreak])

  const formatMinutes = (time) => {
    const minutes = Math.floor(time / 60)
    return `${minutes < 10 ? '0' : ''}${minutes}`
  }

  const formatSeconds = (time) => {
    const seconds = time % 60
    return `${seconds < 10 ? '0' : ''}${seconds}`
  }

  const handleStartPause = () => {
    setIsRunning((prev) => !prev)
  }

  const buttonLabel = isRunning
    ? isBreak
      ? "Pause break"
      : "Pause sesh"
    : isBreak
    ? "Start break"
    : "Start sesh"

  return (
    <SafeAreaView className="bg-[#131217] h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 justify-start items-center">
          <Text className="text-white font-psemibold text-3xl mt-8">
            {isBreak ? 'break' : 'se:sh'}
          </Text>
        </View>

        <View className="flex-1 justify-center items-center">
          {/* Outer Border */}
          <View className="border-4 border-[#B8621B] p-2 rounded-[30px]">
            {/* Inner Border 3 */}
            <View className="border-4 border-[#B8621B] p-2 rounded-[30px]">
              {/* Inner Border 2 */}
              <View className="border-4 border-[#751dc3] p-2 rounded-[30px]">
                {/* Inner Border 1 */}
                <View className="border-4 border-[#751dc3] p-5 rounded-[30px]">
                  {/* Timer Display */}
                  <View className="bg-transparent w-56 h-56 justify-center 
                  items-center rounded-[30px]">
                    {/* Minutes at the top */}
                    <Text className="text-white font-psemibold text-8xl mb-0 pt-10">
                      {formatMinutes(timer)}
                    </Text>
                    {/* Seconds at the bottom */}
                    <Text className="text-white font-psemibold text-8xl mt-0 pt-4">
                      {formatSeconds(timer)}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className="flex-1 justify-end items-center mb-10">
          <CustomButton 
            title={buttonLabel} 
            handlePress={handleStartPause}
            containerStyles="w-full mt-7 bg-[#B8621B]"
            textStyles="text-[#1B1212]"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#131217' style='light' />
    </SafeAreaView>
  )
}

export default Home