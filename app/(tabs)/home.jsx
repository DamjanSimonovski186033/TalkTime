import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar'
import { Text, View, ScrollView, Image } from 'react-native'
import { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import GameBtn from '../../components/GameBtn'
import { images } from '../../constants'
import { Link, router } from 'expo-router'

const Home = () => {
  return (
    <SafeAreaView className="bg-[#C7E2E7] h-full w-full justify-center items-center">
      <View className="w-full items-center h-[85vh] px-4 my-6" style={{ justifyContent: 'space-between' }}>
        <View className="w-full h-[20%] justify-center items-center">
          <Image source={images.logo}
            resizeMode='contain'
            className='w-[190px] h-[130px]' />
        </View>
        <View className="w-full h-[50vh] items-center" style={{ justifyContent: 'space-between' }}>
          <View className="w-full items-center justify-center">
            <GameBtn
              title="Match the Cards"
              handlePress={() => {
                router.push('../match');
              }}
              imageSource={images.match}
              containerStyles="bg-[#FF9668]"
            />
          </View>
          <View className="w-full items-center justify-center">
            <GameBtn
              title="Count the Cards"
              handlePress={() => {
                router.push('../count');
              }}
              imageSource={images.count}
              containerStyles="bg-[#71DB88]"
            />
          </View>
          <View className="w-full items-center justify-center">
            <GameBtn
              title="What does the card say"
              handlePress={() => {
                router.push('../say');
              }}
              imageSource={images.say}
              containerStyles="bg-[#FF5994]"
            />
          </View>
        </View>
        <View className="w-full h-[0vh]"></View>
      </View>
    </SafeAreaView>
  )
}

export default Home