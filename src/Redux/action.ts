export const ADDCOLUMN: string = "ADDCOLUMN";
export const DELETECOLUMN: string = "DELETECOLUMN";
export const ADDCARD: string = "ADDCARD";
export const EDITCARD: string = "EDITCARD";
export const DELETECARD: string = "DELETECARD";
export const SETPROJECTNAME: string = "SETPROJECTNAME";

export const setProjectName = (name: string) => {
  return {
    type: SETPROJECTNAME,
    payload: name,
  };
};

export const addColumn = (name: string) => {
  return {
    type: ADDCOLUMN,
    payload: name,
  };
};

export const deleteColumn = (index: number) => {
  return {
    type: DELETECOLUMN,
    payload: index,
  };
};

export const deleteCard = (col: number, card: number) => {
  return {
    type: DELETECARD,
    payload: {
      indexCol: col,
      indexCard: card,
    },
  };
};
export const addCard = (index: number, name: string) => {
  return {
    type: ADDCARD,
    payload: {
      index: index,
      name: name,
    },
  };
};
export const editCard = (
  indexCol: number,
  indexCard: number,
  content: string
) => {
  return {
    type: EDITCARD,
    payload: {
      indexCol,
      indexCard,
      content,
    },
  };
};
