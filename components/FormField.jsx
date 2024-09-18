import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { useState } from 'react'

import { icons } from '../constants'

const FormField = ({
    title,
    value,
    placeholder,
    handleChangeText,
    otherStyles,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-base text-[#FDFCED] font-cmed">{title}</Text>
            <View className="border-2 border-[#211F26] w-full h-12 px-4 bg-[#211F26]
        rounded-xl focus:border-[#F96E46] items-center flex-row">
                <TextInput
                    className="flex-1 text-[#FDFCED] font-cmed text-basem items-center"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#46434C"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === 'Password' && !showPassword}
                    {...props}
                />

                {title === 'Password' && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image source={!showPassword ? icons.eye : icons.eyeHide}
                            className="w-6 h-6" tintColor={"#FDFCED"} resizeMode='contain' />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default FormField