import { Text, SafeAreaView, StyleSheet, Button } from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

const Stack = createNativeStackNavigator();

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Welcome to SheInvests!
      </Text>
      <Card>
        <AssetExample />
      </Card>
      <Button 
      onPress={() => navigation.navigate('Main')}
        title="Enter"
        />
    </SafeAreaView>
  );
}

function MainScreen(){
  return(
    <SafeAreaView style={styles.container}>
      <Text style={{ flex: 1,alignItems: 'Left', padding: 8, fontSize: 18, fontWeight: 'bold' }}>
      </Text>
    </SafeAreaView>
  );
}

 export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Main" component= {MainScreen} options={{title: 'Learning'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

