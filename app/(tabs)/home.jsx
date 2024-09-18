import { StatusBar } from 'expo-status-bar'
import { Text, View, ScrollView } from 'react-native'
import { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BtnWhite from '../../components/BtnWhite'

const Home = () => {
  const [timer, setTimer] = useState(0.1 * 60) // 25 minutes in seconds
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
              setTimer(0.1 * 60) // 5 minute break
              setIsBreak(true)
              setIsRunning(false) // Stop after session ends
            } else {
              setTimer(0.1 * 60) // Reset to 25 min session
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

  if (isBreak && !isRunning) {
    // Colors for paused break
    purple = '#446642';
    orange1 = '#446642';
    orange2 = '#446642';
  } else if (isBreak) {
    // Colors for active break
    purple = '#446642';
    orange1 = '#629460';
    orange2 = '#629460';
  } else if (!isBreak && !isRunning) {
    // Colors for paused session
    purple = '#1E0654';
    orange1 = '#AD4D31';
    orange2 = '#AD4D31';
  } else {
    // Colors for active session
    purple = '#3A0CA3';
    orange1 = '#F96E46';
    orange2 = '#AD4D31';
  }

  return (
    <SafeAreaView className="bg-[#131217] h-full w-full justify-center items-center">
      <View className="w-[92%] h-[94%] items-center" style={{ justifyContent: 'space-between' }}>
        <View className="w-full h-[12%%] items-center" style={{ justifyContent: 'space-between' }}>
          <View className="w-full h-[33%%] items-center">
            <Text className="text-[#FDFCED] font-zdots text-3xl" style={{ position: 'absolute' }}>
              se:sh
            </Text>
          </View>
        </View>
        <View className=" bg-transparent w-[354.66px] h-[354.66px] items-center justify-center" style={{ position: 'relative' }}>
          <View className=" bg-transparent w-[354.66px] h-[354.66px] items-center justify-center" style={{ borderRadius: 44.1, shadowColor: orange1, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.8, shadowRadius: 5, borderWidth: 5, borderColor: orange1, position: 'absolute' }}></View>
          <View className=" bg-transparent w-[328.39px] h-[328.29px] items-center justify-center" style={{ borderRadius: 34.2, shadowColor: orange2, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.8, shadowRadius: 5, borderWidth: 5, borderColor: orange2, position: 'absolute' }}></View>
          <View className=" bg-transparent w-[300.1px] h-[300.1px] items-center justify-center" style={{ borderRadius: 25.2, shadowColor: purple, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.8, shadowRadius: 5, borderWidth: 5, borderColor: purple, position: 'absolute' }}></View>
          <View className=" bg-transparent w-[271.8px] h-[271.8px] items-center justify-center" style={{ borderRadius: 15.3, shadowColor: purple, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.8, shadowRadius: 5, borderWidth: 5, borderColor: purple, position: 'absolute' }}></View>
          <View className="h-[200px] w-[200px] justify-evenly items-center">
            <View className="w-full h-[36%] items-center justify-evenly">
              <Text className="text-[#FDFCED] font-zdots text-8xl items-center justify-evenly">
                {formatMinutes(timer)}
              </Text>
            </View>
            <View className="w-full h-[36%]">
              <Text className="text-[#FDFCED] font-zdots text-8xl items-center justify-evenly">
                {formatSeconds(timer)}
              </Text>
            </View>
          </View>
        </View>
        <View className="w-full h-[20%] justify-end" style={{ marginBottom: -7 }}>
          <BtnWhite
            title={buttonLabel}
            handlePress={handleStartPause}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home