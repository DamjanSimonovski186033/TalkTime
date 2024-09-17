import { StatusBar } from 'expo-status-bar'
import { Text, View, Image, ScrollView } from 'react-native'
import { Link, Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/CustomButton'
import { useGlobalContext } from '../context/GlobalProvider'

export default function App() {
  const {isLoading, isLoggedIn } = useGlobalContext()

  if(!isLoading && isLoggedIn) return <Redirect href="/home"/>

  return (
    <SafeAreaView className="bg-[#131217] h-full">
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className="w-full justify-evenly items-center min-h-[85vh] px-4">
          <Image
            source={require('../assets/images/sesh.png')}
            className="w-[260px] h-[168px] justify-start position-absolute top-[-40]"
            resizeMode='contain'
          />

          <Image
            source={require('../assets/images/lines.png')}
            className="justify-start position-absolute top-[-120]"
            resizeMode='contain'
          />

          <CustomButton 
            title="Sign In" 
            handlePress={() => router.push('sign-in')}
            containerStyles="w-full mt-7"
          />

          <Text className='text-[#FDFCED] text-lg'>
            Don't have an account? <Link href='/sign-up' className='text-[#F96E46]'>Sign up!</Link>
          </Text>
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#131217' style='light'>
      </StatusBar>
    </SafeAreaView>
  )
}