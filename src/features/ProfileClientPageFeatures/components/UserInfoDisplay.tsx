import type { UserGeneralInfoType/*, UserProfileType */} from "../ProfileClientTypes";

type UserInfoDisplayProps = {
  user?: UserGeneralInfoType;
};

/**
 * Component to display a user's general information.
 */
export default function UserInfoDisplay({ user }: UserInfoDisplayProps) {
// export default function UserInfoDisplay( user? : UserGeneralInfoType) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base-content items-center">
      {/* Profile Picture and Name */}
      <div className="flex items-center gap-4 col-span-1 md:col-span-2 lg:col-span-1">
        {user?.profilePicture ? (
          <img
            src={`/uploads/profiles/${user.profilePicture}`} // Adjust this path based on your server's static file serving
            alt={`${user.firstname} ${user.lastname}'s Profile`}
            className="w-20 h-20 rounded-full object-cover border-4 border-primary shadow-md"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center text-3xl font-bold text-gray-600 border-4 border-primary">
            {user!.firstname ? user!.firstname[0].toUpperCase() : 'U'}
          </div>
        )}
        <div>
          <p className="font-semibold text-xl text-neutral-content">{user!.firstname} {user!.lastname}</p>
          <p className="text-sm text-gray-500">{user!.email}</p>
        </div>
      </div>

      {/* Other User Details */}
      <div className="md:col-span-1 lg:col-span-1">
        <p className="text-md mb-1"><strong className="text-accent">Email:</strong> {user!.email}</p>
        <p className="text-md mb-1"><strong className="text-accent">Phone:</strong> {user!.phone}</p>
        {/* <p className="text-md mb-1">
          <strong className="text-accent">Account Status:</strong>{' '}
          <span className={`badge ${user.isActive ? 'badge-success' : 'badge-error'} badge-outline ml-1`}>
            {user.isActive ? 'Active' : 'Inactive'}
          </span>
        </p> */}
        {/* <p className="text-md mb-1">
          <strong className="text-accent">Member Since:</strong> {new Date(user.createdAt).toLocaleDateString('fr-FR')}
        </p> */}
      </div>
    </div>
  );
}