/**
 * Defines possible family statuses for a client.
 */
export type FamilyStatusEnum = "CELIBATAIRE" | "MARIE" | "DIVORCE" | "VEUF" | "AUTRE";

/**
 * Defines the specific details pertaining to a client (a specialized user).
 */
export type ClientDetailsType = {
  isVerifiedOwner: boolean;
  familyStatus: FamilyStatusEnum;
  isHandicapped: boolean;
  personalIncome: number;
  householdIncome: number;
  isPriority: boolean;
};

export type AgentDetailsType = {
  
}

/**
 * Defines the complete user profile, including common user fields and nested client-specific details.
 */
// export type UserProfileType = {
export type UserGeneralInfoType = {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  phone: string;
  profilePicture: string; 
  role: string;
};