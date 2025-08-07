import { useUserStore } from "../../../stores/useUserStore";
import AgentInfoSection from "../sections/AgentInfoSection";
import ClientInfoSection from "../sections/ClientInfoSection";
import GeneralInfoSection from "../sections/GeneralInfoSection";

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
      <GeneralInfoSection />

      <hr className="my-10 border-gray-300 opacity-20" />

      {user.role === "CLIENT" ? (
        <ClientInfoSection />
      ) : (
        <AgentInfoSection />
      )}
    </>
  );
}