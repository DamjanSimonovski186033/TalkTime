import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons, FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons'

const Stats = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 justify-start items-center">
          <Text className="text-white font-psemibold text-3xl mt-8">
            se:sh
          </Text>
        </View>

        <View className="flex-1 justify-center items-center mb-4">
          {/* Add any relevant stats or images here */}
          <Image 
            //source={require('../../assets/images/stats-placeholder.png')} // Replace with your actual image
            className="w-32 h-32 rounded-[30px] overflow-hidden border-4 border-[#B8621B]"
            resizeMode='cover'
          />
        </View>

        <View className="flex-1 items-center mb-8">
          {/* Display your stats or other details here */}
          <Text className="text-white font-psemibold text-3xl">Your Stats</Text>
          <Text className="text-gray-300 text-lg">Additional details here</Text>
        </View>

        <View className="flex-1 px-4">
          {/* Add any buttons or additional sections as needed */}
          <TouchableOpacity className="flex-row items-center py-3">
            <Ionicons name="stats-chart" size={30} color="white" />
            <Text className="text-white font-psemibold text-xl ml-6">Overview</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center py-3">
            <FontAwesome name="bar-chart" size={30} color="white" />
            <Text className="text-white font-psemibold text-xl ml-6">Analytics</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center py-3">
            <MaterialIcons name="trending-up" size={30} color="white" />
            <Text className="text-white font-psemibold text-xl ml-6">Trends</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center py-3">
            <Entypo name="pie-chart" size={30} color="white" />
            <Text className="text-white font-psemibold text-xl ml-6">Reports</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Stats
