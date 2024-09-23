import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getCurrentUser, signOut } from '../../lib/appwrite'
import { Ionicons } from '@expo/vector-icons'
import { useGlobalContext } from '../../context/GlobalProvider'
import { router } from 'expo-router'
import { images } from '../../constants'

const Profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext()

  const logout = async () => {
    try {
      await signOut()
      setUser(null)
      setIsLoggedIn(false)
      router.replace("/")
    } catch (error) {
      console.log("Logout error:", error)
    }
  }

  return (
    <SafeAreaView className="bg-[#C7E2E7] h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="w-full items-center h-[85vh]" style={{ justifyContent: 'space-between' }}>
          <View className="w-full h-[20%] justify-center items-center pb-7">
            <Image source={images.logo}
              resizeMode='contain'
              className='w-[190px] h-[130px]' />
          </View>

          <View className="w-full h-[30%] justify-center items-center pb-7">
            <View className="justify-center items-center">
              <View className="w-40 h-40">
                <Image
                  source={require('../../assets/images/profile.png')}
                  style={{ width: '100%', height: '100%' }}
                  resizeMode='contain'
                />
              </View>
            </View>
            <View className="items-center mb-8">
              <Text className="text-[#23474E] font-tone text-3xl">
                {user?.username || 'Damjan'}
              </Text>
              <Text className="text-[#23474E] font-tone text-lg">
                {user?.email || 'damjan.simonovski.99@gmail.com'}
              </Text>
            </View>
          </View>

          <View className='h-[40%] w-[90%]' style={{ justifyContent: 'space-between' }}>
            <TouchableOpacity className="flex-row items-center">
              <Ionicons name="person" size={30} color="#23474E" />
              <Text className="text-[#23474E] font-tone text-xl ml-6">Edit profile</Text>
            </TouchableOpacity>

            <View className="flex-row items-center py-7">
              <TouchableOpacity onPress={logout} className="flex-row items-center">
                <Ionicons name="log-out" size={30} color="#23474E" />
                <Text className="text-[#23474E] font-tone text-xl ml-6">Log out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile
