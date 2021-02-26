import {
  idDispatch,
  GET_ID_TITLE
} from '../actions/projectDesignWeb';

export default (store) => (next) => (action) => {
  const {
    type,
    payload,
  } = action;
  switch (type) {
    case GET_ID_TITLE:
      store.dispatch(idDispatch(action.titleId))
      break;
    default:
      next(action);
  }
};
