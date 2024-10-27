import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { Dashboard } from "./screens/Dashboard";
import { Login } from "./screens/Login";
import { Projects } from "./screens/Projects";
import { ProjectDetails } from "./screens/ProjectDetails";
import { NewExpense } from "./screens/NewExpense";
import { ExpenseDetails } from "./screens/ExpenseDetails";
import { TeamManagement } from "./screens/TeamManagement";
import { Reports } from "./screens/Reports";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#2563eb",
                },
                headerTintColor: "#ffffff",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen name="Login" component={Login} />
            <StackNavigator.Screen name="Dashboard" component={Dashboard} />
            <StackNavigator.Screen name="Projects" component={Projects} />
            <StackNavigator.Screen name="ProjectDetails" component={ProjectDetails} />
            <StackNavigator.Screen name="NewExpense" component={NewExpense} />
            <StackNavigator.Screen name="ExpenseDetails" component={ExpenseDetails} />
            <StackNavigator.Screen name="TeamManagement" component={TeamManagement} />
            <StackNavigator.Screen name="Reports" component={Reports} />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);