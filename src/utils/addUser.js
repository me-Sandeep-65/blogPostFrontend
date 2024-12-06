// utils/addUser.js

export const addUser = (prevState, newUser) => {
    return {
      ...prevState,
      users: [...prevState.users, newUser]
    };
  };
  