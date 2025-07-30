
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { getCurrentUserInfo } from '../api/CurrentUserApi';
import type { CurrentUserType } from '../types/UserType';
import { useUserStore } from '../stores/useUserStore';
import { useEffect } from 'react';

/**
 * 
 * Is fetching data, updating the Zustand store
 */
export function useCurrentUserQuery() {
    const { id } = useParams<{ id: string }>();
    const userId = Number(id);

    const res = useQuery<CurrentUserType>({
        queryKey: ['currentUser', userId],
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
