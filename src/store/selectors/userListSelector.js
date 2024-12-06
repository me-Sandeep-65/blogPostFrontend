import { selector } from "recoil";
import UserListState from "../atoms/userList";
import { addUser } from '../../utils/addUser';
import  {replaceUserList}  from '../../utils/replaceUserList';
import { removeUser } from '../../utils/removeUser';

const UserListSelector = selector({
    key: 'UserListStateSelector',
    get: ({get}) => {
        const listAtom = get(UserListState);

        return listAtom;
    },

    set: ({ set, get }, update) => {
        const currentState = get(UserListState); // Get current state
    
        if (update && update.user) {
          // Use addUser function to add a new user
          set(UserListState, addUser(currentState, update.moderator));
        } else if (update && update.list) {
          // Use replaceUserList function to replace the entire list
          set(UserListState, replaceUserList(currentState, update.list));
        } else if (update && update.removeId) {
            // Use removeUser function to remove a User by id
            set(UserListState, removeUser(currentState, update.removeId));
        } else {
          // Other cases where you set the full state
          set(UserListState, update);
        }
      },
});

export default UserListSelector;