import { TouchableOpacity, Text, Image, View } from 'react-native'
import React from 'react'

const GameBtn = ({
    title,
    handlePress,
    containerStyles,
    textStyles,
    isLoading,
    imageSource,
    imageStyles,
}) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-[#73969D] rounded-xl min-h-[130px] w-[100%] justify-center items-center ${containerStyles} ${isLoading ? "opacity-50" : ""}`}
            style={{borderLeftWidth: 10,
                borderRightWidth: 10,
                borderColor: 'transparent',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                }}
            disabled={isLoading}
        >
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <View className="w-[40%] h-16 items-center justify-center">
                    <Image
                        source={imageSource}
                        resizeMode="contain"
                        className={`w-50 h-50 ${imageStyles}`}
                    />
                </View>

                <View className="w-[60%] h-16 items-start justify-center">
                    <Text className={`text-[#FFFFFF] font-tone text-2xl ${textStyles}`}>
                        {title}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default GameBtn
