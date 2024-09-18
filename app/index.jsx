import { StatusBar } from 'expo-status-bar'
import { Text, View, Image, ScrollView } from 'react-native'
import { Link, Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import BtnWhite from '../components/BtnWhite'
import BtnBorder from '../components/BtnBorder'
import { useGlobalContext } from '../context/GlobalProvider'

export default function App() {
  const { isLoading, isLoggedIn } = useGlobalContext()

  if (!isLoading && isLoggedIn) return <Redirect href="/home" />

  return (
    <SafeAreaView className="bg-[#131217] h-full w-full justify-center items-center">
      <View className="w-[92%] h-[80%] justify-center items-center">
        <View className="w-full h-[25%%]" style={{ justifyContent: 'space-between', position: 'relative' }}>
          {/* LinesLogo */}
          <View
            className={`bg-[#3A0CA3] rounded-2xl h-[4%] w-full`}
            style={{ shadowColor: '#3A0CA3', shadowOpacity: 1, shadowRadius: "3%", shadowOffset: { width: 0, height: 0 } }}
          ></View>
          <View
            className={`bg-[#3A0CA3] rounded-2xl h-[4%] w-full`}
            style={{ shadowColor: '#3A0CA3', shadowOpacity: 1, shadowRadius: "3%", shadowOffset: { width: 0, height: 0 } }}
          ></View>
          <View
            className={`bg-[#F96E46] rounded-2xl h-[4%] w-full`}
            style={{ shadowColor: '#F96E46', shadowOpacity: 1, shadowRadius: "3%", shadowOffset: { width: 0, height: 0 } }}
          ></View>
          <View
            className={`bg-[#F96E46] rounded-2xl h-[4%] w-full`}
            style={{ shadowColor: '#F96E46', shadowOpacity: 1, shadowRadius: "3%", shadowOffset: { width: 0, height: 0 } }}
          ></View>
          <View
            className={`bg-[#AD4D31] rounded-2xl h-[4%] w-full`}
            style={{ shadowColor: '#AD4D31', shadowOpacity: 1, shadowRadius: "3%", shadowOffset: { width: 0, height: 0 } }}
          ></View>
          <View
            className={`bg-[#F96E46] rounded-2xl h-[4%] w-full`}
            style={{ shadowColor: '#F96E46', shadowOpacity: 1, shadowRadius: "3%", shadowOffset: { width: 0, height: 0 } }}
          ></View>
          <View
            className={`bg-[#F96E46] rounded-2xl h-[4%] w-full`}
            style={{ shadowColor: '#F96E46', shadowOpacity: 1, shadowRadius: "3%", shadowOffset: { width: 0, height: 0 } }}
          ></View>
          <View
            className={`bg-[#3A0CA3] rounded-2xl h-[4%] w-full`}
            style={{ shadowColor: '#3A0CA3', shadowOpacity: 1, shadowRadius: "3%", shadowOffset: { width: 0, height: 0 } }}
          ></View>
          <View
            className={`bg-[#3A0CA3] rounded-2xl h-[4%] w-full`}
            style={{ shadowColor: '#3A0CA3', shadowOpacity: 1, shadowRadius: "3%", shadowOffset: { width: 0, height: 0 } }}
          ></View>
          
          {/* BlackBoxLogo */}
          <View
            className={`h-[100%] w-[100%] justify-center items-center`}
            style={{
              position: 'absolute',
            }}
          >
            <View
              className={`bg-[#131217] h-[38%] w-[36%] justify-center items-center`}
              style={{
                borderRadius: 12
              }}>
              <Text className="text-[#FDFCED] font-zdots text-3xl">
                se:sh
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View className="w-[92%] h-[15%] items-center"
        style={{
          justifyContent: 'space-between'
        }}>
        <BtnWhite
          title="Log In"
          handlePress={() => router.push('sign-in')}
          containerStyles="w-full"
        />
        <BtnBorder
          title="Sign Up"
          handlePress={() => router.push('sign-up')}
          containerStyles="w-full"
        />
      </View>
      <StatusBar backgroundColor='#131217' style='light'>
      </StatusBar>
    </SafeAreaView >
  )
}