import  React from 'react';
import { Button, Text, View , StyleSheet, Image} from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';

// function GameScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Game</Text>
//     </View>
//   );
// }

// function HomeScreen ({ navigation}) {
//      return (
  
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home</Text>
//       {/* <Image source={require('./assets/turnofphraselogo.png')}  style={styles.stackImage}/> */}
//       <Button
//         title="Play Game"
//         onPress={() => navigation.navigate('Game')}
//       />
//     </View> 
//     );
   
//   }



// function SettingsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings screen</Text>
//       <Button
//         title="Go to Game"
//         onPress={() => navigation.navigate('Game')}
//       />
//     </View>
//   );
// }

// const HomeStack = createStackNavigator();

// function HomeStackScreen() {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen name="Home" component={HomeScreen} />
//       <HomeStack.Screen name="Game" component={GameScreen} />
//     </HomeStack.Navigator>
//   );
// }

// const SettingsStack = createStackNavigator();

// function SettingsStackScreen() {
//   return (
//     <SettingsStack.Navigator>
//       <SettingsStack.Screen name="Settings" component={SettingsScreen} />
//       <SettingsStack.Screen name="Game" component={GameScreen} />
//     </SettingsStack.Navigator>
//   );
// }


const Tab = createBottomTabNavigator();

export default function App()  {
  return(
    <NavigationContainer>
      <Tab.Navigator
       screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-settings' : 'ios-settings';
          } else if (route.name === 'Sound') {
            iconName = focused ? 'ios-notifications-outline' : 'ios-notifications-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#5177b8',
        inactiveTintColor: '#8e91a4',
      }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
        <Tab.Screen name="Timer" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  
  );
};
  


