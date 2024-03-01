import { useState, useEffect } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';
import COLORS from '@constants/colors';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@pages/Home';
import Edit from '@pages/Edit';
import Generate from '@pages/Generate';
import Footer from '@components/@common/Footer';

const Stack = createNativeStackNavigator();

const AppView = styled.View`
  font-family: 'Pretendard';
  background-color: ${COLORS.mainBackGround};
  flex: 1;
  padding: 0;
  margin: 0 0 64px 0;
`;

const customStackNavigaionOptions = {
  headerShown: false,
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFontsAsync() {
      await Font.loadAsync({
        Pretendard: require('@fonts/Pretendard-Regular.ttf'),
      });
      setFontsLoaded(true);
    }

    loadFontsAsync();
  }, []);

  if (!fontsLoaded) {
    return <Text>Fonts are loading...</Text>;
  }

  return (
    <NavigationContainer>
      <AppView>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={customStackNavigaionOptions}
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
