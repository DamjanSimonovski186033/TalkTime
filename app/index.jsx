import { StatusBar } from 'expo-status-bar'
import { Text, View, Image, ScrollView } from 'react-native'
import { Link, Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGlobalContext } from '../context/GlobalProvider'
import { images } from '../constants'
import BtnBlack from '../components/BtnBlack'

export default function App() {
  const { isLoading, isLoggedIn } = useGlobalContext()

  if (!isLoading && isLoggedIn) return <Redirect href="/home" />

  return (
    <SafeAreaView className="bg-[#C7E2E7] h-full w-full">
        <ScrollView contentContainerStyle={{ height: '100%' }}>
            <View className="w-full justify-evenly items-center h-full">
                <View className="w-[90%] justify-center items-center h-[60%]">
                    <Image
                        source={images.logo}
                    />
                </View>
                <View className="w-[90%] justify-evenly items-center h-[20%]">
                    <BtnBlack
                        title="Sign In"
                        handlePress={() => router.push('/sign-in')}
                        containerStyles='w-full'
                    />
                    <BtnBlack
                        title="Sign Up"
                        handlePress={() => router.push('/sign-up')}
                        containerStyles='w-full'
                    />
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
);
}