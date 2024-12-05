import { atom } from "recoil";

const currentPageState = atom({
    key: 'currentPageState',
    default: {
        page: "home"
    },
});

export default currentPageState;
