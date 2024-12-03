import { selector } from "recoil";
import userState from "../atoms/user";

const userProfile = selector({
    key: 'userProfileState',
    get: ({get}) => {
        const userAtom = get(userState);

        return userAtom;
    },

    set: ({ set }, userProfile) => {
        set(userState, (prevState) => (userProfile));
    },
});

export default userProfile;