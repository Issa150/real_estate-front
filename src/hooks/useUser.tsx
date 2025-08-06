import { useEffect } from "react";
import { useUserStore } from "../stores/useUserStore";
import { useCurrentUserQuery } from "./useCurrentUser";

/**
 * 
 * This Hook is implementing "useUserStore" and "useCurrentUserQuery" to initiate and get connected user
 */
export function useUser() {
  const user = useUserStore();
  const { data, isLoading, error } = useCurrentUserQuery();

  useEffect(() => {
    if (data) useUserStore.getState().setUser(data);
  }, [data]);

  return { user, isLoading, error };
}
