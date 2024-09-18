import { View, Text, ScrollView, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import { useState } from 'react'
import BtnWhite from '../../components/BtnWhite'
import { Link, router } from 'expo-router'
import { createUser } from '../../lib/appwrite'

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
    <SafeAreaView className="bg-[#131217] h-full w-full justify-center items-center">
      <View className="w-[92%] h-[94%] items-center" style={{ justifyContent: 'space-between' }}>
        <View className="w-full h-[12%%] items-center" style={{ justifyContent: 'space-between' }}>
          <View className="w-full h-[33%%] items-center">
            <Text className="text-[#FDFCED] font-zdots text-3xl" style={{ position: 'absolute' }}>
              sign:up
            </Text>
          </View>
          <View className="w-full h-[52%%] items-center" style={{ justifyContent: 'space-between' }}>
            <View
              className={`bg-[#F96E46] rounded-2xl h-[12%] w-full`}
              style={{ shadowColor: '#F96E46', shadowOpacity: 1, shadowRadius: "2%", shadowOffset: { width: 0, height: 0 } }}
            ></View>
            <View
              className={`bg-[#AD4D31] rounded-2xl h-[12%] w-full`}
              style={{ shadowColor: '#AD4D31', shadowOpacity: 1, shadowRadius: "2%", shadowOffset: { width: 0, height: 0 } }}
            ></View>
            <View
              className={`bg-[#3A0CA3] rounded-2xl h-[12%] w-full`}
              style={{ shadowColor: '#3A0CA3', shadowOpacity: 1, shadowRadius: "2%", shadowOffset: { width: 0, height: 0 } }}
            ></View>
            <View
              className={`bg-[#1E0654] rounded-2xl h-[12%] w-full`}
              style={{ shadowColor: '#1E0654', shadowOpacity: 1, shadowRadius: "2%", shadowOffset: { width: 0, height: 0 } }}
            ></View>
          </View>
        </View>
        <View className="w-full h-[26%%]" style={{ justifyContent: 'space-between' }}>
          <View className="w-full h-[45%%]">
            <FormField
              title="Username"
              value={form.username}
              handleChangeText={(e) => setForm({ ...form, username: e })}
            />
          </View>
          <View className="w-full h-[45%%]">
            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              keyboardType="email-address"
            />
          </View>
          <View className="w-full h-[45%%]">
            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
            />
          </View>
        </View>
        <View className="w-full h-[54%%] justify-end" style={{marginBottom: 28}}>
          <BtnWhite
            title="Sign Up"
            height='12px'
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2 ">
            <Text className="text-[#FDFCED] font-cmed">
              Already have an g account?
            </Text>
            <Link href="/sign-in" className="text-m font-cbold 
            text-[#FDFCED]">Log in!</Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignUp