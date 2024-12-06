// utils/replaceUserList.js

export const replaceUserList = (prevState, newList) => {
    return {
      ...prevState,
      users: newList
    };
  };
  