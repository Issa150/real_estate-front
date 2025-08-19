import { useEffect } from "react";
import { useUserStore } from "../stores/useUserStore";
import { useLoadingUserStore } from "./useLoadingUserStore";

/**
 * 
 * ⚠️ This Hook is costum hook for use data on Page Refresh. 
 * ⚠️⚠️ This should be used once in the app.
 * ⚠️⚠️⚠️ This is not for accessing user.
 */
export function useUser() {
  const user = useUserStore();
  const { data, isLoading, error } = useLoadingUserStore();

  useEffect(() => {
    if (data) useUserStore.getState().setUser(data);
  }, [data]);

  return { user, isLoading, error };
}
