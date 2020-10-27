/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import RegionalChatScreen from './components/screens/chat/RegionalChatScreen';

interface IToDo {
  text: string;
  completed: boolean;
}

export default function App() {
  const [value, setValue] = useState<string>('');
  const [toDoList, setToDos] = useState<IToDo[]>([]);
  const [error, showError] = useState<Boolean>(false);

  return <RegionalChatScreen />;
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    height: '100%',
    alignItems: 'center'
  },
  header: {
    flexDirection: 'row',
    paddingTop: 35,
    width: '100%',
    height: '5%',
    backgroundColor: '#FCFCFC'
  },
  inputWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'ProximaNova-Regular'
  }
});
