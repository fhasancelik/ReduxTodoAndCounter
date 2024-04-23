const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'DELETE_TODO':
      const filteredTodos = state.todos.filter(
        todo => todo.id !== action.payload,
      );
      return {
        ...state,
        todos: filteredTodos,
      };
    case 'UPDATED_TODO':
      const clonedTodos = state.todos;
      console.log(action.payload);
      const updatedTodoIndex = clonedTodos.findIndex(
        todo => todo.id === action.payload.id,
      );
      console.log(updatedTodoIndex);
      clonedTodos[updatedTodoIndex] = action.payload;
      return {
        ...state,
        todos: clonedTodos,
      };
  }
  return state;
};

export default todoReducer;
