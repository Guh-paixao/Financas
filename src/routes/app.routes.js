import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from '../screens/Home';
import New from '../screens/New';
import Profile from "../screens/Profile";

import CustomDrawer from "../components/CustomDrawer";

const AppDrawer = createDrawerNavigator();

export default function AppRoutes() {
    return (
        <AppDrawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,

                drawerStyle: {
                    backgroundColor: '#FFF',
                    paddingTop: 20
                },

                drawerActiveBackgroundColor: '#3b3dbf',
                drawerActiveTintColor: '#FFF',

                drawerInactiveBackgroundColor: '#F0F2FF',
                drawerInactiveTintColor: '#121212'
            }}
        >
            <AppDrawer.Screen
                name="Inicio"
                component={Home}
            />

            <AppDrawer.Screen
                name="Registrar"
                component={New}
            />

            <AppDrawer.Screen
                name="Perfil"
                component={Profile}
            />
        </AppDrawer.Navigator>
    );
}