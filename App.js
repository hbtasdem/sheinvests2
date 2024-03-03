import { Text,  SafeAreaView, ScrollView, View, StyleSheet, Button, Alert, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';

import EnvelopeAsset from './components/EnvelopeAsset';
import AssetLearning from './components/AssetLearning';
import PYF from './components/PYF';
import BudgetExample from './components/BudgetExample'

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

function Info({navigation}){
  return(
    <SafeAreaView style={styles.container}>
      <View>
      <Text style={styles.paragraph}>
        Welcome to SheInvests! SheInvests is a passion-project designed to promote and enhance financial literacy for all kinds of people, especially you women starting out their lives. Compared to men, women have only been financially independent for a relatively short time. 
      </Text>
      </View>
      <View>
      <Text style={{margin: 20, textAlign:'center'}}>
      Women make approximately 16% less money than men who work full-time overall. In 2023, the typical weekly salary for women working full-time was $996. That amount was $1,186 for men. In comparison to men, women are alos far more likely to work part-time.{'\n'}{'\n'}
      Gen Z women are more likely to have lower financial knowledge than Gen X and Baby Boomer women. {'\n'}{'\n'}
      A research on retirement income literacy conducted by the American College of Financial Services on individuals aged 60 to 75 revealed that 35% of men and 18% of women completed the test{'\n'}{'\n'}
      Women now make up 47% of workers, an increase from 38% in 1970 {'\n'}{'\n'}
      Compared to their white counterparts, African American and Hispanic women, who have little representation in the financial sector, typically possess less understanding of personal finance. On average, the former answered 38% of the index questions correctly, whereas teh latter answered 54%
      </Text>
      </View>
    </SafeAreaView>
  )
}

function Info532({navigation}) {
  return(
    <SafeAreaView style={styles.container}>
      <View> 
      <Text style={styles.overlay}>The 50-20-30 method is one of the most popular budgeting methods. You save 50% of your income for necessities, 30% on wants, and 20% on your savings and debt repayment. {'\n'}{'\n'}Necessities include rent or mortgage payments, car payments, groceries, utilities, and insurance and health care. Wants are things that would be nice, but are not essential to living. It can be vacations, concert or sport ticekts, or new electronics. Savings includes IRA or mutual funds, stocks, emergency funds and down payments for a house or car.{'\n'}{'\n'}Some benefits of using the 50-20-30 plan include ease of use, prioritization of vital expenses, and an emphasis on saving. It is easy to use, regardless of amount of income. We recommend you start with this method if you do not know where to start. </Text>
      </View>
    </SafeAreaView>
  )
}

function InfoEnvelope({navigation}) {
  return(
    <SafeAreaView style={styles.container}>
      <View> 
      <Text style={styles.overlay}> The Envelope Grouping method foucses on discresionary spending. You separate expenses into different categories. Once the envelope is empty, you either have to wait until your next pay period to refill it or pull from other envelopes. This system can be really helpful to see how much you are spending on each category you choose and can easily identify where you might want to cut down on expenses.{'\n'}{'\n'} Some categories that you may choose include Groceries, Dining Out, Gas, Clothes, Subscriptions, Emergency Funds, and more. {'\n'}{'\n'} The benefits of using this method include having a visual of your funds available, it can be harder to overspend because you can see just how much money you have in each category, and it can be helpful for those that prefer using cash. 
      </Text>
      </View>
    </SafeAreaView>
  )
}

function InfoPYF({navigation}) {
  return(
    <SafeAreaView style={styles.container}>
      <View> 
      <Text style={styles.overlay}>The pay-yourself-first budget is a straightforward budgeting technique that prioritizes reducing debt and increasing savings. Using this apporach, you withdraw a certain amount from each paycheck for debt repayment and savings, leaving you with the rest to spend as you would prefer. You could choose to put some in a rainy-day fund while also paying off student loans. {'\n'}{'\n'} The pay-yourself-first method wroks well for people who find it difficult to save money each month and prefer not to track spending in separate categories each month. 
      </Text>
      </View>
    </SafeAreaView>
  )
}

function Learning({navigation}){
  return(
    <SafeAreaView style={{justifyContent: 'space-between'}}>
    <ScrollView>
    <View>
      <Card>    
      <View style={{display: 'flex', alignItems:'center',flexDirection:'column'}}>
      <Text style={styles.title, {alignSelf: 'center'}}> The 50/30/20 Method </Text>
      <Button onPress={() => navigation.navigate('50-30-20')} title="Info" color="#4287f5" />
      </View>
      <AssetLearning />
      </Card>
    </View>
      <Card style={{display: 'flex'}}>
      <View style={{display: 'flex', alignItems:'center',flexDirection:'column'}}>
      <Text style={styles.title, {alignSelf: 'center'}}> The Envelope/Grouping Method </Text>
      <Button onPress={() => navigation.navigate('Envelope Grouping Method')} title="Info" color="#4287f5" />
      </View>
      <EnvelopeAsset />
      </Card>

      <Card>
      <View style={{display: 'flex', alignItems:'center',flexDirection:'column'}}>
      <Text style={styles.title, {alignSelf: 'center'}}> The Pay Yourself First Method </Text>
      <Button onPress={() => navigation.navigate('Pay Yourself First')} title="Info" color="#4287f5" />
      </View>
      <PYF /> 
      </Card>
      </ScrollView>
    </SafeAreaView>
  )
}




function MainScreen({navigation}){
  const [textInputValue, setTextInputValue] = useState('');

  const handleTextInputChange = (text) => {
    setTextInputValue(text);
  };

  const handleSubmit = async (e) => {
    console.log(textInputValue)
    console.log(res2)
    // Show an alert with the input value
    let res = await fetch('localhost:5000/calculate_expenses', {
        method: "POST",
        body: JSON.stringify({
        income: e.target.value
      }),
    });
    let res2 = await fetch('localhost:5000/get_expenses', {
        method: "GET",      
    });
    // Clear the input field after submission if needed
    setTextInputValue('');
  };

  

  return(
    <SafeAreaView style={styles.container}>
      
      <TextInput
        style={styles.input}
        onChangeText={handleTextInputChange}
        value={textInputValue}
        placeholder="Income Before Taxes"
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
      <View>
      
      <Text>
      Calculations: 
      </Text>
      <BudgetExample />
      </View>
      <Text style={{ flex: 1, alignItems: 'left', padding: 8, fontSize: 18, fontWeight: 'bold' }}>
      
      </Text>
      <SafeAreaView style={styles.bottomBar}>
        <AntDesign.Button name="infocirlceo" backgroundColor="white" size={30} color="black" onPress={() => navigation.navigate('Info')} />
        <FontAwesome.Button name="bank" backgroundColor="white" size={30} color="black" onPress={() => navigation.navigate('Main')} />
        <Entypo.Button name="text-document" backgroundColor="white" size={30} color="black" onPress={() => navigation.navigate('Learning')} />
      </SafeAreaView>
    </SafeAreaView>

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
  bottomBar: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    paddingVertical: 8,
    textAlign: 'center',
    fontSize: 40,
  },
  overlay: {
    margin: 10,
    fontSize: 20
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Main" component= {MainScreen} options={{title: 'Budgeting'}} />
        <Stack.Screen name="Learning" component={Learning} />
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="50-30-20" component={Info532} />
        <Stack.Screen name="Envelope Grouping Method" component={InfoEnvelope} />
        <Stack.Screen name="Pay Yourself First"  component={InfoPYF} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
