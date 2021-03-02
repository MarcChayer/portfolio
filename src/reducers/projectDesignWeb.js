import { ID_DISPATCH } from '../actions/projectDesignWeb';

const initialState = {
  id: 6,
};

const projectDesignWeb = (state = initialState, action = {}) => {
  switch (action.type) {
    case ID_DISPATCH:
      return {
        ...state,
        id: action.titleId,
      };
    default:
      return state;
  }
};

export default projectDesignWeb;
