import {
  createStore,
  applyMiddleware,
} from 'redux';

const initialState = {
  token: 'jwt-token',
  userData: {
    id: 123,
    name: 'Admin',
    userTypes: [
      'admin',
      'user',
    ],
  },
};

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case 'set-token':
      return {
        ...state,
        token: action.token,
      };
    case 'set-userdata':
      return {
        ...state,
        userData: action.userData,
      };
    case 'clear':
      return {
        token: '',
        userData: null,
      };
    default:
      return state;
  }
}

const logger = (store) => (next) => (action) => {
  console.log('redux action:', action);

  console.log('state before:', store.getState());
  const nextValue = next(action);
  console.log('state after:', store.getState());

  return nextValue;
};

const store = createStore(mainReducer, initialState, applyMiddleware(logger));

export default store;
