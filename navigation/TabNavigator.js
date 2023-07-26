import React from 'react';
import Feed from '../screens/Feed';
import Profile from '../screens/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab= createBottomTabNavigator();

const BottomTabNavigator= ()=>{
    return(
        <Tab.Navigator 
            screenOptions={ ({route})=>({
                tabBarIcon:({focused,color,size})=>{
                    let iconName;
                    if(route.name === 'Feed'){

                    }else if(route.name === 'CreateStory'){

                    }
                }
            })}>
            <Tab.Screen name="Feed" component ={Feed} options={{headerShown:false}}/>
            <Tab.Screen name="CreateStory" component ={CreateStory} options={{headerShown:false}}/>
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;