export type Role = "CLIENT" | "OWNER" | "AGENT" | "MANAGER" | "SUPER_ADMIN";


// Interface for the User Information
export interface AgentInfoType {
  id: number;
  userId: number;
  agencyId: number;
  position: Role; // Using the Role enum for position
  hiredAt: string; // ISO 8601 date string
  performanceScore: number; // Assuming this is a percentage or score
}
