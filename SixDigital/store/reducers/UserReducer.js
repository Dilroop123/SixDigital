import {CREATE_USER, SIGNIN_USER} from '../actions/UserActions';
const initialState = {
  UserData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
      };
    case SIGNIN_USER:
      return {
        ...state,
        UserData: action.userdata,
      };
  }
  return state;
};
