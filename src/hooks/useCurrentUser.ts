
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { getCurrentUserInfo } from '../api/CurrentUserApi';
import type { CurrentUserType } from '../types/UserType';
import { useUserStore } from '../stores/useUserStore';
import { useEffect, useState } from 'react';
import { useUser } from './useUser';

/**
 * 
 * Is fetching data, updating the Zustand store
 * This misses initation of Zustand.
 */
export function useCurrentUserQuery() {
    // const { id } = useParams<{ id: string }>();
    // const userId = Number(id);
    
    const [userId, setUserId] = useState<number>(10)
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
