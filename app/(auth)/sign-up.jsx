import { View, Text, ScrollView, Alert, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import { useState } from 'react'
import { Link, router } from 'expo-router'
import { createUser } from '../../lib/appwrite'
import BtnBlack from '../../components/BtnBlack'
import { images } from '../../constants'

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert('Error', 'Please, fill in all the fields!')
    }

    setIsSubmitting(true)

    try {
      const result = await createUser(form.email, form.password,
        form.username)

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
              create an account
            </Text>
          </View>
          <View className="w-full h-[40%] justify-start items-center pt-10">
            <FormField
              title='Username'
              value={form.username}
              handleChangeText={(e) => setForm({
                ...form,
                username: e
              })}
              otherStyles=''
            />
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
              title="Sign Up"
              handlePress={submit}
              containerStyles="bg-[#FF5994]"
              isLoading={isSubmitting} />
            <Text className="text-l text-semibold text-[#23474E] font-tone pt-2">
              Already have an account?
              <Link href="/sign-in" className="text-l text-semibold text-[#5BA06A] font-tone">
                Sign In
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp