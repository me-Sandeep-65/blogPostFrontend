import React from 'react'
import UserRoutes from './UserRoutes'
import ModeratorRoutes from './ModeratorRoutes'
import AdminRoutes from './AdminRoutes'
import userProfile from '../store/selectors/userProfile'
import { useRecoilValue } from 'recoil'
import { NotFound } from '../components'

function Routes() {
    const userState = useRecoilValue(userProfile);
    console.log(userState)

    if(!userState.userProfile || userState.userProfile.role === 'member' || userState.userProfile.role === 'blocked') return <UserRoutes />;
    else if(userState.userProfile.role === 'moderator') return <ModeratorRoutes />;
    else if(userState.userProfile.role === 'admin') return <AdminRoutes />;
    else return <NotFound />;
}

export default Routes