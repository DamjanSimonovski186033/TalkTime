import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.7}
        className={'bg-[#FDFCED] rounded-[30%] min-h-[62px] w-[100%] justify-center items-center ${containerStyles} ${isLoading ? "opacity-50" : ""'}
        disabled={isLoading}>
        <Text className="text-[#131217] font-psemibold text-lg">
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CustomButton