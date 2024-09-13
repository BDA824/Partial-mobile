import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import Main from './src/screens/Main'
import Users from './src/screens/Users'
import Countrys from './src/screens/Countrys'

const TabNav = createBottomTabNavigator();


function RoutingTabs() {
    return (
        <TabNav.Navigator>
            <TabNav.Screen name='Home' component={Main} options={{
                tabBarIcon: () => <AntDesign name="home" size={24} color="black" />
            }}/>
            <TabNav.Screen name='Users' component={Users} options={{
                tabBarIcon: () => <AntDesign name="user" size={24} color="black" />
            }} />
            <TabNav.Screen name='Details' component={Countrys} options={{
                tabBarIcon: () => <MaterialCommunityIcons name="card-account-details-star-outline" size={24} color="black" />
            }}/>
        </TabNav.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <RoutingTabs />
        </NavigationContainer>
    )
}