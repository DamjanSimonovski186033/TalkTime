import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const Stats = () => {
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
      </View>
    </SafeAreaView>
  )
}

export default Stats
