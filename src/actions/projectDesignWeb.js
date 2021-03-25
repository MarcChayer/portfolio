export const TOGGLE_SHOWBOX_TRUE = 'TOGGLE_SHOWBOX_TRUE';
export const GET_ID_TITLE = 'GET_ID_TITLE';
export const ID_DISPATCH = 'ID_DISPATCH';
export const OPEN_INFO_PROJECT = 'OPEN_INFO_PROJECT';

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

export const openInfoProject = (showInfoProject) => ({
  type: OPEN_INFO_PROJECT,
  showInfoProject,
})
