import { Link } from "react-router";
// import { useUser } from "../../hooks/useUser";
import { useUserStore } from "../../stores/useUserStore";

export default function NavBar() {
  // const { user } = useUser();
  const firstname = useUserStore(state => state.firstname);
  const lastname = useUserStore(state => state.lastname);
  const profilePicture = useUserStore(state => state.profilePicture);
  const role = useUserStore(state => state.role);

  return (
    <div className="navbar  shadow-sm">
      {/* Mobile menu button */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow">
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
          <p className="inline mr-5">{firstname}</p>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt={`${firstname} ${lastname}'s Profile`}
                src={`/uploads/profiles/${profilePicture}`}
                onError={(e) => {
                  e.currentTarget.src = "/images/placeholders/profile-default.png";
                }} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><Link to={"profile"} className="justify-between">Profile</Link></li>
            {
              role !== "CLIENT" && (
                <li><Link to={"backoffice"} className="justify-between">BackOffice</Link></li>
              )
            }
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}