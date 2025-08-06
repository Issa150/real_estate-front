import { useUserStore } from "../stores/useUserStore";
import Sidebar from "../features/ProfileClientPageFeatures/components/SideBar";
import { Outlet } from "react-router";


/**
 * Main layout component handling side-bar menu and sub-routes of profile page.
 */
export default function ProfileLayoutPage() {

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
    <div className="container md:max-w-6xl mx-auto p-4 --md:p-8 --ppt-10">
      
      <div className="flex min-h-screen bg-base-100">
        <Sidebar />

        <main className="flex-1 p-6 md:p-8 lg:p-10 bg-base-100">

          <div className="max-w-6xl mx-auto">
            <div className="prose max-w-none">
              {/* To see sub-routes, head over to App.tsx */}
              <Outlet />
            </div>
          </div>
        </main>
      </div>

    </div>
  );
}