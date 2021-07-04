import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import {Home} from "../pages/Home";
import {MyCars} from "../pages/MyCars";
import {CarDetails} from "../pages/CarDetails";
import {Scheduling} from "../pages/Scheduling";
import {SchedulingDetails} from "../pages/SchedulingDetails";
import {SchedulingCompleted} from "../pages/SchedulingCompleted";

export default function App() {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="MyCars" component={MyCars}/>
            <Stack.Screen name="CarDetails" component={CarDetails}/>
            <Stack.Screen name="Scheduling" component={Scheduling}/>
            <Stack.Screen name="SchedulingDetails" component={SchedulingDetails}/>
            <Stack.Screen name="SchedulingCompleted" component={SchedulingCompleted}/>
        </Stack.Navigator>
    );
}
