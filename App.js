import { useState, useEffect } from 'react';
import styled from 'styled-components';
import COLORS from '@constants/colors';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@pages/Home';
import Edit from '@pages/Edit';
import Generate from '@pages/Generate';
import Footer from '@components/@common/Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useTodoListStore from '@store/TodoListStore';
import Loading from '@components/@common/Loading';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

const AppView = styled.View`
  font-family: 'Pretendard';
  background-color: ${COLORS.mainBackGround};
  padding: 0;
  margin: 0 0 64px 0;
  flex: 1;
`;

const customStackNavigationOptions = {
  headerShown: false,
};

const loadData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@todoList');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const initializeStore = async () => {
  const savedData = await loadData();
  if (savedData) {
    useTodoListStore.setState({ ...savedData });
  }
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    async function loadFontsAsync() {
      await Font.loadAsync({
        Pretendard: require('@fonts/Pretendard-Regular.ttf'),
        Lora: require('@fonts/Lora-VariableFont_wght.ttf'),
      });
      setDataLoaded(true);
    }

    loadFontsAsync();
    initializeStore();
  }, []);

  if (!dataLoaded) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <AppView>
        <StatusBar style="light" />
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={customStackNavigationOptions}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Edit" component={Edit} />
          <Stack.Screen name="Generate" component={Generate} />
        </Stack.Navigator>
      </AppView>
      <Footer />
    </NavigationContainer>
  );
}
