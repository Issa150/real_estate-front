
import ProfilePersonalInformation from "../components/blocks/ProfilePersonalInformation";
import ProfileClientInformation from "../features/ProfileClientPageFeatures/components/ProfileClientInformation";
import ProfileAgentInformation from '../features/ProfileAgent/components/ProfileAgentInformation';
// import { useProfileLogic } from "../features/ProfileClientPageFeatures/hooks/useProfileLogic";
import { useUserStore } from "../stores/useUserStore";


/**
 * Main component for displaying and managing a client's profile.
 */
export default function ProfilePage() {
  
  // const { currentUser } = useProfileLogic()
  const user = useUserStore()



  // --- Loading, Error, and No Data States ---
  if (!user.id || isNaN(user.id)) {
    return (
      <div className="flex justify-center py-20 text-error text-xl">
        <p>⚠️ Invalid client ID provided in the URL.</p> 
      </div>
    );
  }

  // --- Main Profile Page Layout ---
  return (
    <div className="container mx-auto p-4 md:p-8 max-w-4xl pt-10">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-primary">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Client Profile
        </span>
      </h1>
      <p className="text-center text-lg text-neutral-content mb-10">
        Manage and view details for 🔵🔵🔵
      </p>

      {/* User Information Section Card (always rendered) */}
      <ProfilePersonalInformation />

      <hr className="my-10 border-gray-300 opacity-20" />

      {user.role === "CLIENT" ? (
        <ProfileClientInformation />
      ) : (
        // Render Agent Information for AGENT role 
        <ProfileAgentInformation />
      )}

    </div>
  );
}