import { Navigate, Outlet } from "react-router";
import SidebarBackoffice from "../features/BackofficePageFeatures/components/SidebarBackoffice";
import { useUserStore } from "../stores/useUserStore";

export default function BackofficePageLayout() {
  const  role = useUserStore(state => state.role);
  if (role == "CLIENT" )return <Navigate to="/" replace />
  return (
    <>
      <div className="container p-4 --md:p-8 --ppt-10">
      
      <div className="flex min-h-screen bg-base-100">
        <SidebarBackoffice />

        <main className="flex-1 p-6 md:p-8 lg:p-10 bg-base-100">

          <div className="max-w-6xl mx-auto">
            <div className="prose max-w-none">
              <Outlet />
            </div>
          </div>
        </main>
      </div>

    </div>
    </>
  );
}