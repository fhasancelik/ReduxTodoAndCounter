import {
  Alert,
  FlatList,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TodoCard from '../components/TodoCard';
import CustomButton from '../components/CustomButton';

const TodoScreen = () => {
  const dispatch = useDispatch();
  const {todos} = useSelector(state => state.todos);
  //console.log(todos);
  const [newTodo, setNewTodo] = useState('');
  const addTodo = () => {
    if (newTodo === '') {
      Alert.alert('UYARI', 'TODO ALANI BOŞ BIRAKILAMAZ');
    } else {
      const willAddTodo = {
        id: new Date().getTime(),
        text: newTodo,
        isComplated: false,
      };
      dispatch({type: 'ADD_TODO', payload: willAddTodo});
      setNewTodo('');
    }
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.formBody}>
        <TextInput
          style={styles.textInput}
          placeholder="Yeni Todo Giriniz"
          onChangeText={text => setNewTodo(text)}
          value={newTodo}
        />

        <CustomButton
          buttonTitle={'Ekle'}
          onPress={() => addTodo()}
          bodySyle={{
            flex: 3,
          }}
        />
      </View>
      <FlatList
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 15,
            }}
          />
        )}
        style={{
          padding: 20,
        }}
        data={todos}
        renderItem={({item}) => <TodoCard todo={item} />}
      />
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  formBody: {
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    gap: 10,
  },
  textInput: {
    flex: 5,
    backgroundColor: '#D6B656',
    paddingHorizontal: 15,
  },
});
