import { Navigate, Outlet, useParams } from "react-router";
import SidebarBackoffice from "../features/BackofficePageFeatures/components/SidebarBackoffice";
import { useUserStore } from "../stores/useUserStore";

export default function BackofficePageLayout() {
  const { entity } = useParams<{ entity: string }>()
  const role = useUserStore(state => state.role);
  if (role == "CLIENT") return <Navigate to="/" replace />
  return (
    <>
      <div className="container p-4 --md:p-8 --ppt-10 border-2 border-amber-300">

        <div className="flex min-h-screen ">
          <div className="border-2 border-green-600">

          <SidebarBackoffice />
          </div>

          <main className="flex-1 p-6 md:p-8 lg:p-10 ">

            <div className="max-w-6xl mx-auto">
              <div className="prose max-w-none">
                <div className="flex justify-between items-center p-4 border-2 border-blue-600">
                  <h2>{entity ? entity.charAt(0).toUpperCase() + entity.slice(1) : ''} Management</h2>
                  <button className="btn btn-primary">
                    Create New
                  </button>
                </div>
                <div className="border-red-700 border-2">
                <Outlet />

                </div>
              </div>
            </div>
          </main>
        </div>

      </div>
    </>
  );
}