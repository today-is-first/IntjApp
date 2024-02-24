import styled from 'styled-components';
import COLORS from './constants/colors';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Edit from './pages/Edit';

async function loadFonts() {
  await Font.loadAsync({
    Pretendard: require('./assets/fonts/Pretendard-Regular.ttf'),
  });
}

const Stack = createNativeStackNavigator();

const AppView = styled.View`
  font-family: 'Pretendard';
  background-color: ${COLORS.mainBackGround};
  flex: 1;
  padding: 0;
  margin: 0;
`;

const customStackNavigaionOptions = {
  headerShown: false,
};

export default function App() {
  loadFonts();
  return (
    <NavigationContainer>
      <AppView>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={customStackNavigaionOptions}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Edit" component={Edit} />
        </Stack.Navigator>
      </AppView>
    </NavigationContainer>
  );
}
