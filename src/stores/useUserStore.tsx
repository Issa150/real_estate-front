import { create } from 'zustand'
import type { CurrentUserType } from '../types/UserType';


type UserStoreType = CurrentUserType & {
    // given user on callback will be on type of user
    setUser: (user: CurrentUserType) => void;
};


export const useUserStore = create<UserStoreType>((set) => ({
    id: 0,
    firstname: undefined,
    lastname: undefined,
    profilePicture: undefined,
    role: undefined,
    setUser: (user) => {
        set(() => ({
            ...user
        }))
    }
}))