import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const BtnBlack = ({ 
  title, 
  handlePress, 
  containerStyles, 
  textStyles, 
  isLoading, 
}) => {
  return (
    <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.7}
        className={`bg-[#73969D] rounded-xl min-h-[62px] w-full justify-center items-center ${containerStyles} ${isLoading ? "opacity-50" : ""}`}
        disabled={isLoading}>
        <Text className={`text-[#FFFFFF] font-tone text-lg ${textStyles}`}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default BtnBlack