import { useUserStore } from "../../../stores/useUserStore";
import ProfileAgentInformation from "../../ProfileAgent/components/ProfileAgentInformation";
import ProfileClientInformation from "../components/ProfileClientInformation";
import ProfilePersonalInformation from "../components/ProfilePersonalInformation";

/**
 * 
 * @returns This is the Subpage/tab displaying -user genral info, -user role based info
 */
export default function PersonalInfo() {

  const user = useUserStore()

  // --- Loading, Error, and No Data States before rendering user information ---
  if (!user.id || isNaN(user.id)) {
    return (
      <div className="flex justify-center py-20 text-error text-xl">
        <p>⚠️ Invalid client ID provided in the URL.</p>
      </div>
    );
  }


  return (
    <>
      <ProfilePersonalInformation />

      <hr className="my-10 border-gray-300 opacity-20" />

      {user.role === "CLIENT" ? (
        <ProfileClientInformation />
      ) : (
        // Render Agent Information for AGENT role 
        <ProfileAgentInformation />
      )}
    </>
  );
}