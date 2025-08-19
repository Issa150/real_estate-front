import { NavLink } from "react-router";
import { useUserStore } from "../../../stores/useUserStore";
import { getBackofficeMenu } from "./MenuItemsBackoffice";

export default function SidebarBackoffice() {
  const  role = useUserStore(state => state.role);
    const menu = getBackofficeMenu(role);
  return (
    <>
      <div className="w-72 min-h-full bg-base-100 border-r border-base-300 --p-6">

      {/* Navigation Menu */}
      <ul className="menu gap-1">
        {menu.map((item) => (
          <li key={item.path}>
            <NavLink
              // to={`/profile/${id}/${item.path}`}
              to={item.path === '' ? `/profile` : `${`/profile`}/${item.path}`}
              end={item.path === ''} 
              className={({ isActive }) =>
                `flex items-center ${isActive ? 'active !bg-primary !text-primary-content' : 'hover:bg-base-200'}`}>
              {item.icon && (
                <span className="mr-3">
                  <i className={`bi bi-${item.icon}`} />
                </span>
              )}
              <span className="font-medium">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}