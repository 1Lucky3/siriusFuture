import React from 'react';
import HomePage from "./src/components/HomePage";
import NavBottom from "./src/components/NavBottom";
import Header from "./src/components/Header";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import 'react-native-gesture-handler';
import Favorites from './src/components/Favorites';
import ImageModal from "./src/components/ImageModal";
import {useSelector} from "react-redux";
import {RootState} from "./src/store/reducers";

const Stack = createStackNavigator();

const App = () => {
  const { pageName } = useSelector((state:RootState) => state.navigation);
  console.log(pageName)
  return (
    <NavigationContainer>
      <Header/>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Favorites" component={Favorites}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Modal" component={ImageModal}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
      {(pageName === "Избранное" || pageName === "Все изображения") && <NavBottom/>}
    </NavigationContainer>
  );
};

export default App;
