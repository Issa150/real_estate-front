import { useState } from "react";
import { useParams } from "react-router";

/**
 * Custom hook to encapsulate the business logic for the client profile page.
 * Handles data fetching, mutation, and UI state for editing, with react-toastify notifications.
 */
export const useProfileLogic = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const currentUser = {
    id: userId,
    role: "AGENT", 
  };
  


  return {
    currentUser
  };
};