import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />

            <AuthStack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                    headerStyle: {
                        backgroundColor: '#3B3DBF',
                        borderBottomWidth: 1,
                        borderBottomColor: '#00b94a'
                    },
                    headerTintColor: '#FFF',
                    headerTitle: 'Voltar',
                    headerBackTitleVisible: false, // ios -  Desativar legenda da seta.
                }}
            />
        </AuthStack.Navigator>

    )
}

export default AuthRoutes;