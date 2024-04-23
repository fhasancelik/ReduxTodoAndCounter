import {Button, StyleSheet, Text, View, Switch} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const Counter = () => {
  //useSelector ==> store abone olmayı sağğlayan hook,storeda tutulan tüm state geri döner
  const {count} = useSelector(state => state.counter);
  const {isVisible, notificationMessage} = useSelector(
    state => state.notification,
  );
  console.log(isVisible, notificationMessage);
  //useDispatch reduceri değiştirecek actionu tetikleyen method
  const dispatch = useDispatch();

  return (
    <View>
      <Button
        title="Arttır"
        //type değeri olan payloadı olmayan action
        onPress={() => dispatch({type: 'INCREMENT_COUNTER'})}
      />
      <Text>{count}</Text>
      <Button
        title="Azalt"
        onPress={() => dispatch({type: 'DECREMENT_COUNTER'})}
      />
      <Button
        title="Sıfırla"
        onPress={() => dispatch({type: 'RESET_COUNTER', payload: 0})}
      />

      <Switch
        ios_backgroundColor={'black'}
        value={isVisible}
        onValueChange={props => {
          dispatch({type: 'OPEN_LAMP', payload: props});
        }}
      />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({});
