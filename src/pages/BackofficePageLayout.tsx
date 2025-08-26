import { Outlet } from "react-router";
import SidebarBackoffice from "../features/BackofficePageFeatures/components/SidebarBackoffice";

export default function BackofficeLayout() {
  return (
    <div className="flex min-h-screen">
      <SidebarBackoffice />
      <main className="flex-1 p-4">
        <Outlet /> 
      </main>
    </div>
  );
}