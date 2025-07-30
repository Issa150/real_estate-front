import { Link } from "react-router";
import { useUser } from "../../hooks/useUser";

export default function NavBar() {
  const { user, isLoading, error } = useUser();

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Mobile menu button */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/buy"}>Buy</Link></li>
            <li><Link to={"rent"}>Rent</Link></li>
          </ul>
        </div>

        {/* Logo */}
        <Link to={"/"} className="btn btn-ghost text-xl">Green Estate</Link>
      </div>


      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/offers"}>Offers</Link></li>
          <li><Link to={"/buy"}>Buy</Link></li>
          <li><Link to={"rent"}>Rent</Link></li>
        </ul>
      </div>

      {/* User profile dropdown */}
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <p className="inline mr-5">{user.firstname}</p>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt={`${user.firstname} ${user.lastname}'s Profile`}
                src={`/uploads/profiles/${user.profilePicture}`} 
                onError={(e) => {
                  e.currentTarget.src = "/images/placeholders/profile-default.png";
                }} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><Link to={"profile/2"} className="justify-between">Profile</Link></li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}