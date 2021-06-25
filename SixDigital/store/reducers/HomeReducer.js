import {SET_HOME, CREATE_SERVICE_REQUEST} from '../actions/HomeAction';
const initialState = {
  HomeData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_HOME:
      return {
        ...state,
        HomeData: action.homeData,
      };
    case CREATE_SERVICE_REQUEST:
      return {
        ...state,
      };
  }
  return state;
};
