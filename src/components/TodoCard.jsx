import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import CustomButton from './CustomButton';
import {useDispatch} from 'react-redux';

const TodoCard = ({todo}) => {
  const dispatch = useDispatch();
  const {text, isComplated, id} = todo;
  const updateTodo = () => {
    const willUpdateTodo = {...todo, isComplated: !todo.isComplated};
    dispatch({type: 'UPDATED_TODO', payload: willUpdateTodo});
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
      }}>
      <Text>{text}</Text>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
        }}>
        <CustomButton
          onPress={() => dispatch({type: 'DELETE_TODO', payload: id})}
          buttonTitle={'Sil'}
          bodySyle={{
            backgroundColor: '#F8CECC',
          }}
          titleStyle={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
          }}
        />
        <CustomButton
          onPress={() => updateTodo()}
          buttonTitle={isComplated === true ? 'Tamamlandı' : 'Tamamla'}
          bodySyle={{
            backgroundColor: '#FFF2CC',
          }}
          titleStyle={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
          }}
        />
      </View>
    </View>
  );
};

export default TodoCard;

const styles = StyleSheet.create({});
