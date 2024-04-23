import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import Counter from './src/screens/CounterScreen';
import TodoScreen from './src/screens/TodoScreen';
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex:1}}>{/* <Counter /> */}
      <TodoScreen/>
      </SafeAreaView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
