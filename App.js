import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import Home from './src/screens/Home';
import { Platform, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function App() {

  const Stack = createNativeStackNavigator();
  const BottomTabs = createBottomTabNavigator();

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer >
          <BottomTabs.Navigator screenOptions={({ route }) => ({
            tabBarStyle: styles.tabBarStyle,
            tabBarLabelStyle: styles.tabBarLabelStyle,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Cart') {
                iconName = focused ? 'cart' : 'cart-outline';
              } else if (route.name === 'Favourite') {
                iconName = focused ? 'heart' : 'heart-outline';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'person' : 'person-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })} >
            <BottomTabs.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <BottomTabs.Screen name="Cart" component={Home} options={{ headerShown: false }} />
            <BottomTabs.Screen name="Favourite" component={Home} options={{ headerShown: false }} />
            <BottomTabs.Screen name="Profile" component={Home} options={{ headerShown: false }} />
          </BottomTabs.Navigator>
        </NavigationContainer>
      </PaperProvider>
      <Toast />
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  tabBarStyle: {
    height: (Platform.OS === 'ios' ? 100 : 70),
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
  },
})
