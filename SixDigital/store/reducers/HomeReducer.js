import {SET_HOME} from '../actions/HomeAction';
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
  }
  return state;
};
