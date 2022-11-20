import * as React from 'react';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {Text, TouchableHighlight, View} from 'react-native';
import {useCallback} from 'react';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type DetailsScreenProps = NativeStackScreenProps<ParamListBase, 'Details'>;

function HomeScreen({navigation}: HomeScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Details');
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableHighlight onPress={onClick}>
        <Text>Home Screen</Text>
      </TouchableHighlight>
    </View>
  );
}

function DetailsScreen({navigation}: DetailsScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'yellow',
          alignItems: 'flex-end', //양옆
          justifyContent: 'center', //위아래
        }}>
        <TouchableHighlight
          underlayColor="#123122"
          onPress={onClick}
          style={{padding: 20, backgroundColor: 'blue'}}>
          <Text>Details Screen</Text>
        </TouchableHighlight>
      </View>
      <View
        style={{
          flex: 2,
          backgroundColor: 'green',
        }}>
        <Text>Second</Text>
      </View>
    </>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: '홈 화면 '}}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
