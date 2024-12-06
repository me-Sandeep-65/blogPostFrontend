// utils/removeUser.js

export const removeUser = (prevState, userId) => {
    return {
      ...prevState,
      users: prevState.users.filter(user => user._id !== userId)
    };
  };
  