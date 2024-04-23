const initialState = {
  isVisible: false,
  notificationMessage: 'Lamba Kapalı',
};

const showNotificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_LAMP':
      console.log('giridm');
      return {
        isVisible: action.payload,
      };
  }
  return state;
};

export default showNotificationReducer;
