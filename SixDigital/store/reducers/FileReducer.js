import {SEND_FILE, SET_FILE} from '../actions/FileAction';
const initialState = {
  FileData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_FILE:
      return {
        ...state,
      };
    case SET_FILE:
      return {
        ...state,
        FileData: action.fileData,
      };
  }
  return state;
};
