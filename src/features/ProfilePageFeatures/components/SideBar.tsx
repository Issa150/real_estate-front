// components/layout/Sidebar.tsx
import { NavLink} from 'react-router';
import { useUserStore } from '../../../stores/useUserStore';
import { getProfileMenu } from '../profileMenuItems';
// import { UserCircleIcon } from '@heroicons/react/24/outline';

export default function Sidebar() {
  const { role, firstname, lastname, profilePicture } = useUserStore();
  const menu = getProfileMenu(role);

  return (
    <div className="w-72 min-h-full bg-base-100 border-r border-base-300 --p-6">
      {/* User Profile Summary */}
      <div className="grid items-center gap-4 mb-8 p-4 bg-base-200 rounded-lg">
        <div className="avatar justify-center">
          <div className="w-9/12 rounded-full border-4 border-amber-50 bg-neutral text-neutral-content">
            {profilePicture && (
              <img src={`/uploads/profiles/${profilePicture}`} alt="Profile" onError={(e) => { e.currentTarget.src = '/images/placeholders/profile-default.png' }} />
            )}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg">
            {firstname} {lastname}
          </h3>
          <p className="text-sm opacity-75 capitalize">{role?.toLowerCase()}</p>
        </div>
      </div>

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
  );
}