import {SET_CARD_ICONS, SET_SAVED_CREDENTIALS} from '../actions/CreditAction';
const initialState = {
  CreditCardIcons: [],
  SavedCrdentials: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CARD_ICONS:
      return {
        ...state,
        CreditCardIcons: action.cardIcons,
      };
    case SET_SAVED_CREDENTIALS:
      return {
        ...state,
        SavedCrdentials: action.savedCredentials,
      };
  }
  return state;
};
