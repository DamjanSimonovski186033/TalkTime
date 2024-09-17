import { View, Text, Image } from 'react-native'
import { Tabs } from 'expo-router'

import { icons } from '../../constants'

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text className={`${focused ? 'font-csemibold' : 
                'font-cregular'} text-xs`} style={{ color: color}}>
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#FDFCED',
            tabBarInactiveTintColor: '#99988F',
            tabBarStyle: {
                backgroundColor: '#131217',
                borderTopWidth: 1,
                borderTopColor: '#232533',
                height: 84,
            }
        }}
      >
        <Tabs.Screen
            name="home"
            options={{
                title: 'Sesh', 
                headerShown: false,
                tabBarIcon: ({ color, focused}) => (
                    <TabIcon
                        icon={icons.sesh}
                        color={color}
                        name="Sesh"
                        focused={focused}
                    />
                ) 
            }}
        />
        <Tabs.Screen
            name="stats"
            options={{
                title: 'Stats', 
                headerShown: false,
                tabBarIcon: ({ color, focused}) => (
                    <TabIcon
                        icon={icons.stats}
                        color={color}
                        name="Stats"
                        focused={focused}
                    />
                ) 
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
                title: 'Profile', 
                headerShown: false,
                tabBarIcon: ({ color, focused}) => (
                    <TabIcon
                        icon={icons.profile}
                        color={color}
                        name="Profile"
                        focused={focused}
                    />
                ) 
            }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout