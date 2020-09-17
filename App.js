/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {useDispatch} from 'react-redux';
import {persistor} from './store';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import {store} from './store';

import Feed from './feed';
import Detail from './detail';
import SignUp from './Screen/SignUp';
import SignIn from './Screen/SignIn';

import Screen1 from './Screen/drawer/screen1';
import Screen2 from './Screen/drawer/screen2';
import Screen3 from './Screen/drawer/screen3';

import Tab1 from './Screen/tabs/Tab1';
import Tab2 from './Screen/tabs/Tab2';
import Tab3 from './Screen/tabs/Tab3';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

// const client = new ApolloClient({
//   uri: 'http://localhost:4000/graphql',
//   cache: new InMemoryCache(),
// });

const App = () => {
  const createHomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="News Feed" children={createTopTabs} />
      <Stack.Screen name="Bottom Tabs" children={createBottomTabs} />
    </Stack.Navigator>
  );

  const createTopTabs = () => {
    return (
      <MaterialTopTabs.Navigator>
        <MaterialTopTabs.Screen name="Tab1" component={Tab1} />
        <MaterialTopTabs.Screen name="Tab2" component={Tab2} />
        <MaterialTopTabs.Screen name="Tab3" component={Tab3} />
      </MaterialTopTabs.Navigator>
    );
  };

  const createBottomTabs = () => {
    return (
      <MaterialBottomTabs.Navigator>
        <MaterialBottomTabs.Screen
          name="Tab1"
          component={Tab1}
          options={{tabBarBadge: 3}}
        />
        <MaterialBottomTabs.Screen
          name="Tab2"
          component={Tab2}
          options={{tabBarBadge: 3}}
        />
        <MaterialBottomTabs.Screen
          name="Tab3"
          component={Tab3}
          options={{tabBarBadge: 3}}
        />
      </MaterialBottomTabs.Navigator>
    );
  };
  return (
    <>
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <NavigationContainer>
            <Drawer.Navigator>
              <Drawer.Screen name="Home" children={createHomeStack} />
              <Drawer.Screen name="Contacts" component={Screen1} />
              <Drawer.Screen name="Favorites" component={Screen2} />
              <Drawer.Screen name="Settings" component={Screen3} />
            </Drawer.Navigator>
          </NavigationContainer>
        </Provider>
      </PersistGate>
    </>
  );
};

{
  /* <SignUp /> */
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
