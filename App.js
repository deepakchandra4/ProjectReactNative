/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Text, View, Button,
  TextInput,
  StyleSheet
} from 'react-native';
import CollegeData from './components/CollegeData';
import style from './style';
import UserForm from './components/UserForm';
import ArrayList from  './components/ArrayList';
import GridWithDynamicData from './components/GridWithDynamicData';






const App = () => {

  // const [name, setName] = useState('');

  // const testName = (val) => {
  //   setName('Sova');
  // }
  // const fruit = () => {
  //   console.warn('Orange Warning');
  // }
  // const stuff = (val) => {
  //   console.warn(val);
  // }
  return (
    <View>

      {/* <ArrayList/> */}
      <GridWithDynamicData/>

      {/* <UserForm/> */}


      {/* <Text>Handle Input</Text>
      <Text style={Estyles.textBox}>Your name : {name}</Text>
      <TextInput
        style={styles.textInput}
        placeholder='your name '
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button title='clear value' onPress={() => setName("")} />



      <Text style={{ color: 'red', backgroundColor: "lightgreen" }}>Style this</Text>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
        {name}
      </Text>
      <Button title='Update Name' onPress={testName} />
      <Text style={{ fontSize: 40 }}>Hello Sage</Text>
      <Button title='Update Name' onPress={() => setName('Bruce Walker')} />
      <UserData name={name} age={23} />
      <CollegeData />
      <Button title="Press Here" onPress={fruit}></Button>
      <Button title="Press Here" onPress={() => stuff("Pen")} color={'green'}></Button> */}
    </View>
  )
}

// const UserData = (props) => {
//   return (
//     <View>
//       {/* <Text style={{ fontSize: 20 }}> Name : {props.name}</Text>
//       <Text style={{ fontSize: 20 }}> Age : {props.age}</Text>
//       <Text style={{ fontSize: 20 }}> Number : 915261654121</Text> */}
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   textInput: {
//     fontSize: 20,
//     borderWidth: 2,
//     borderColor: 'blue'
//   }
// })




export default App;
