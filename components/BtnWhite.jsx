import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const BtnWhite = ({ 
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
        className={`bg-[#FDFCED] rounded-xl h-12 w-full justify-center items-center ${containerStyles} ${isLoading ? "opacity-50" : ""}`}
        style={{ borderWidth: '2%', borderColor: '#FDFCED' }}
        disabled={isLoading}>
        <Text className={`text-[#131217] font-cbold text-lg ${textStyles}`}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default BtnWhite