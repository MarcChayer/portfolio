import { ID_DISPATCH, HANDLE_CLICK } from '../actions/projectDesignWeb';

const initialState = {
  id:6,
  close: true,
};

const projectDesignWeb = (state = initialState, action = {}) => {
  switch (action.type) {
    case ID_DISPATCH:
      return {
        ...state,
        id: action.titleId,
      };
    case HANDLE_CLICK:
      return {
        ...state,
        idToClick: action.id,
        close: false,
      };
    default:
      return state;
  }
};

export default projectDesignWeb;
