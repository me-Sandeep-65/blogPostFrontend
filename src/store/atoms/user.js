import { atom } from "recoil";

const userState = atom({
    key: 'userState',
    default: {
        loading: true,
        userProfile: null
        // {
        //     image: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
        //     name: "Sandeep Kumar",
        //     mobile: "7980517988",
        //     mail: "sandeep@gmail.com",
        //     score: "--",
        //     peakSpeed: "--",
        //     testAttempted:"--",
        //     testCompleted:"--"
        // },
    },
});

export default userState;
