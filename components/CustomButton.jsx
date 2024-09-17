import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ 
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
        className={`bg-[#262A56] rounded-2xl min-h-[62px] w-[100%] justify-center items-center ${containerStyles} ${isLoading ? "opacity-50" : ""}`}
        disabled={isLoading}>
        <Text className={`text-[#F2E3DB] font-psemibold text-lg ${textStyles}`}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CustomButton