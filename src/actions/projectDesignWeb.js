export const TOGGLE_SHOWBOX_TRUE = 'TOGGLE_SHOWBOX_TRUE';
export const GET_ID_TITLE = 'GET_ID_TITLE';
export const ID_DISPATCH = 'ID_DISPATCH';
export const HANDLE_CLICK = 'HANDLE_CLICK';

export const toggleShowBoxTrue = (showBox) => ({
    type: TOGGLE_SHOWBOX_TRUE,
    showBox,
});

export const getIdTitle = (titleId) => ({
  type: GET_ID_TITLE,
  titleId,
});

export const idDispatch = (titleId) => ({
  type: ID_DISPATCH,
  titleId,
});

export const handleClick = (id, isOpen) => ({
  type: HANDLE_CLICK,
  id,
  isOpen,
});
