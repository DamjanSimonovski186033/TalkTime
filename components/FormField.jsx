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
            <Text className="text-base text-[#23474E] font-tone">{title}</Text>
            <View className="border-2 border-[#84B1BA] w-full h-12 px-4 bg-[#84B1BA]
        rounded-xl focus:border-[#23474E] items-center flex-row">
                <TextInput
                    className="flex-1 text-[#23474E] font-tone text-basem items-center"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#46434C"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === 'Password' && !showPassword}
                    {...props}
                />

                {title === 'Password' && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image source={!showPassword ? icons.eye : icons.ehide}
                            className="w-6 h-6" tintColor={"#23474E"} resizeMode='contain' />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default FormField