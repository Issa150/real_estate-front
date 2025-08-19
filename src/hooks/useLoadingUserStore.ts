
import { useQuery } from '@tanstack/react-query';
import { getCurrentUserInfo } from '../api/CurrentUserApi';
import type { CurrentUserType } from '../types/UserType';
import { useUserStore } from '../stores/useUserStore';
import { useEffect, useState } from 'react';

/**
 * 
 * This hook is fetching data, loading the Zustand store
 */
export function useLoadingUserStore() {
    
    const [userId, setUserId] = useState<number>(2)
    const storedUserId = useUserStore((state) => state.id);
    
    useEffect(() => {
        if (storedUserId) {
            setUserId(storedUserId);
        }
    }, [storedUserId]);

    


    const res = useQuery<CurrentUserType>({
        queryKey: ['currentUser',  userId],
        queryFn: () => getCurrentUserInfo(userId),
        enabled: !!userId && !isNaN(userId)
    });

    useEffect(() => {
        if (res.data) {
            useUserStore.getState().setUser(res.data);
        }
    }, [res.data]);

    return res;
}
