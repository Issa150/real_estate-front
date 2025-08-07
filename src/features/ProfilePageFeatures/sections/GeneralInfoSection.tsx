import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import type { UserGeneralInfoType } from "../ProfileClientTypes";
import { fetchUserGeneralInfo, patchUserProfile } from "../api/ProfileClientApi";
import GeneralInfoForm from "../forms/GeneralInfoForm";
import GeneralInfoDisplay from "../components/GeneralInfoDisplay";
import { useUserStore } from "../../../stores/useUserStore";




export default function GeneralInfoSection() {
  const [isEditingUser, setIsEditingUser] = useState(false);
  const userId = useUserStore((state) => state.id);
  const queryClient = useQueryClient();

  const {
    data,
    isLoading,
    error,
  } = useQuery<UserGeneralInfoType>({
    queryKey: ["userProfile", userId],
    queryFn: () => fetchUserGeneralInfo(userId),
    enabled: !!userId && !isNaN(userId), // Only run if userId is valid
  });

  // TanStack Mutation for updating user information
  const userMutation = useMutation<
    unknown,
    AxiosError<{ message: string }>,
    Partial<UserGeneralInfoType>
  >({
    mutationFn: (updatedData: Partial<UserGeneralInfoType>) =>
      patchUserProfile(userId, updatedData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userProfile", userId] });
      setIsEditingUser(false); // Exit editing mode
      toast.success("User information updated successfully! 🎉")}, // Success toast with react-toastify
    onError: (err) => {
      console.error("Failed to update user information:", err.response?.data.message);
      toast.error(`Failed to update user info: ${err.message || "Unknown error"} 🙁`)}, // Error toast with react-toastify
  });

  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="ml-3 text-lg text-neutral-content">Loading profile data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-error mt-20 p-4">
        <p className="text-2xl font-bold">Oops! An error occurred.</p>
        <p className="text-lg">Failed to load client profile: {error.message}</p>
        <p className="text-sm text-gray-500 mt-2">Please try refreshing the page.</p>
      </div>
    );
  }


  return (
    <>
      {/* User Information Section Card */}
      {data && (
        <div className="card bg-base-200 shadow-2xl mb-10 p-6 md:p-8 border-t-4 border-primary">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-neutral-content">Personal Information</h2>
            <button
              className="btn btn-outline btn-sm sm:btn-md btn-primary"
              onClick={() => setIsEditingUser(!isEditingUser)}
              disabled={userMutation.isPending} // Disable button while saving
            >
              {isEditingUser ? "Cancel" : "Modify"}
            </button>
          </div>
          {isEditingUser ? (
            <GeneralInfoForm
              user={data}
              onSave={(data) => userMutation.mutate(data)}
              onCancel={() => setIsEditingUser(false)}
              isSaving={userMutation.isPending}
            />
          ) : (
            <GeneralInfoDisplay user={data} />
          )}
        </div>
      )}
    </>
  );
}
