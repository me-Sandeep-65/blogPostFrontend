import { selector } from "recoil";
import userState from "../atoms/user";

export default userProfile = selector({
    key: 'userLoadingState',
    get: ({get}) => {
        const userAtom = get(userState);

        return userAtom.loading;
    }
})