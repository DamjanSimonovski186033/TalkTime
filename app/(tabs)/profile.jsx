import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { signOut } from '../../lib/appwrite'
import { Ionicons, FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons'
import { useGlobalContext } from '../../context/GlobalProvider'
import { router } from 'expo-router'

const Profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext()

  const logout = async () => {
    try {
      await signOut()
      setUser(null)
      setIsLoggedIn(false)
      router.replace("/sign-in")
    } catch (error) {
      console.log("Logout error:", error)
    }
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 justify-start items-center">
          <Text className="text-white font-psemibold text-3xl mt-8">
            se:sh
          </Text>
        </View>

        <View className="flex-1 justify-center items-center mb-4">
          <View className="bg-gray-200 w-32 h-32 rounded-[30px] overflow-hidden border-4 border-[#B8621B]">
            <Image 
              source={require('../../assets/images/profile.png')}
              style={{ width: '100%', height: '100%' }} 
              resizeMode='cover'
            />
          </View>
        </View>

        <View className="flex-1 items-center mb-8">
          <Text className="text-white font-psemibold text-3xl">
            {user ? user.username : 'Username'}
          </Text>
          <Text className="text-gray-300 text-lg">
          {user ? user.email : 'email@example.com'}
          </Text>
        </View>

        <View className="flex-1 px-4">
          <TouchableOpacity className="flex-row items-center py-3">
            <Ionicons name="person" size={30} color="white" />
            <Text className="text-white font-psemibold text-xl ml-6">Edit profile</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center py-3">
            <FontAwesome name="bell" size={30} color="white" />
            <Text className="text-white font-psemibold text-xl ml-6">Notifications</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center py-3">
            <MaterialIcons name="local-offer" size={30} color="white" />
            <Text className="text-white font-psemibold text-xl ml-6">Promo settings</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center py-3">
            <Entypo name="lock" size={30} color="white" />
            <Text className="text-white font-psemibold text-xl ml-6">Security</Text>
          </TouchableOpacity>
        </View>

        <View className="px-4 py-4">
          <View className="flex-row items-center py-3"> 
            <TouchableOpacity onPress={logout} className="flex-row items-center">
              <Image 
                source={require('../../assets/icons/logout.png')} 
                className="w-6 h-6" 
                resizeMode="contain" 
              />
              <Text className="text-white font-psemibold text-xl ml-6">Log out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile
