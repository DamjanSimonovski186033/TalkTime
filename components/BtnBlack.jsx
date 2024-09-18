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
        className={`bg-[#131217] rounded-xl h-12 w-full justify-center items-center ${containerStyles} ${isLoading ? "opacity-50" : ""}`}
        style={{ borderWidth: '2%', borderColor: '#131217' }}
        disabled={isLoading}>
        <Text className={`text-[#FDFCED] font-cbold text-lg ${textStyles}`}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default BtnBlack