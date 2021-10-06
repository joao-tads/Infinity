import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Desire from './src/pages/bottom/Desire';
import Notifications from './src/pages/bottom/Notifications';
import Profile from './src/pages/bottom/Profile';
import Detail, { navigation } from './src/pages/stack/Detail';

function HomeScreen({ navigation }) {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, }}>
      <Text>
        Hi I'm your home
      </Text>
      {[1, 2, 3, 4, 5].map((item) => {
        return (
          <TouchableOpacity
            key={item}
            onPress={() => {
              navigation.push('Detail')
            }}
          >
            <Text>
              Podcast: 0{item}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const NeewStack = createStackNavigator();

function PageStake() {
  return (
    <NeewStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}
    >
      <NeewStack.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
      <NeewStack.Screen
        name="Detail"
        component={Detail}
        options={{
          title: 'Detalhes',
        }}
      />
    </NeewStack.Navigator>
  )
}

const NeewTab = createMaterialBottomTabNavigator();

function TabBottom() {
  return (
    <NeewTab.Navigator
      initialRouteName="HomeScreen"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'tomato' }}
    >
      <NeewTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Página inicial',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <NeewTab.Screen
        name="Desire"
        component={Desire}
        options={{
          tabBarLabel: 'Lista de Desejos',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cards-heart" color={color} size={26} />
          ),
        }}
      />
      <NeewTab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Notificações',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <NeewTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'perfil',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </NeewTab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <TabBottom />
    </NavigationContainer>
  );
}