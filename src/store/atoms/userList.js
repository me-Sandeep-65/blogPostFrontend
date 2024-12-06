import { atom } from "recoil";

const UserListState = atom({
    key: 'UserList',
    default: {
        loading: true,
        users: []
    },
});

export default UserListState;
