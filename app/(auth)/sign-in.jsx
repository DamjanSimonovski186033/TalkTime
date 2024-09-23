import { View, Text, ScrollView, Alert, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import { useState } from 'react'
import { Link, router } from 'expo-router'
import { signIn } from '../../lib/appwrite'
import BtnBlack from '../../components/BtnBlack'
import { images } from '../../constants'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert('Error', 'Please, fill in all the fields!')
    }

    setIsSubmitting(true)

    try {
      await signIn(form.email, form.password)

      //set it to global state
      router.replace('/home')
    } catch (error) {
      Alert.alert('Error', error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <SafeAreaView className="bg-[#C7E2E7] h-full w-full">
      <ScrollView>
        <View className="w-full items-center h-[85vh] px-4 my-6" style={{ justifyContent: 'space-between' }}>
          <View className="w-full h-[20%] justify-center items-center">
            <Image source={images.logo}
              resizeMode='contain'
              className='w-[190px] h-[130px]' />
          </View>
          <View className="align-left w-[100%]">
            <Text className="text-4xl text-semibold text-[#23474E] mt-10 font-tone w-[50%]">
              welcome back
            </Text>
          </View>
          <View className="w-full h-[40%] justify-start items-center pt-10">
            <FormField
              title='Email'
              value={form.email}
              handleChangeText={(e) => setForm({
                ...form,
                email: e
              })}
              otherStyles=''
              keyboardType="email-address"
            />
            <FormField
              title='Password'
              value={form.password}
              handleChangeText={(e) => setForm({
                ...form,
                password: e
              })}
              otherStyles=''
            />
          </View>
          <View className="w-full h-[40%] justify-center items-center pb-9">
            <BtnBlack
              title="Sign In"
              handlePress={submit}
              containerStyles="bg-[#71DB88]"
              isLoading={isSubmitting} />

            <Text className="text-l text-semibold text-[#23474E] font-tone pt-2">
              Don't have an account?
              <Link href="/sign-up" className="text-l text-semibold text-[#A54E6D] font-tone">
                Sign Up
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn