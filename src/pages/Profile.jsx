import useAuth from "../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();
  console.log(user)
  
  return <div className='min-h-custom font-secondary'>
    <h2 className='p-2 text-gray-900 text-center text-2xl font-semibold'>My Profile</h2>
    <div className='mx-auto bg-gray-200 px-10 my-5 py-10 rounded-lg text-gray-900 md:w-2/3'>

      <div className="max-w-3xl mb-5">
        <img className='w-40 mx-auto rounded-lg' src={user?.photoURL} alt="" />
      </div>

      <div className="max-w-md mx-auto bg-gray-300 px-2 rounded-md  flex justify-between items-center mb-5">
        <h5 className="lg:text-lg font-medium w-1/3">Full Name:</h5>
        <p type="text" className="lg:text-lg rounded-lg p-2 w-2/3">{user?.name ? user.name : "Not Found"}</p>
      </div>

      <div className="max-w-md mx-auto  bg-gray-300 px-2 rounded-md flex justify-between items-center mb-5">
        <h5 className="lg:text-lg font-medium w-1/3">Email:</h5>
        <p type="email" className="lg:text-lg rounded-lg p-2 w-2/3">{user?.email}</p>
      </div>

      <div className="max-w-md mx-auto  bg-gray-300 px-2 rounded-md flex justify-between items-center mb-5">
        <h5 className="lg:text-lg font-medium w-1/3">Email Verified:</h5>
        <p type="email" className="lg:text-lg rounded-lg p-2 w-2/3">{user?.emailVerified ? "True" : "False"}</p>
      </div>

      <div className="max-w-md mx-auto  bg-gray-300 px-2 rounded-md flex justify-between items-center mb-5">
        <h5 className="lg:text-lg font-medium w-1/3">Phone:</h5>
        <p type="email" className="lg:text-lg rounded-lg p-2 w-2/3">{user?.phoneNumber ? user.phoneNumber : "Not Found"}</p>
      </div>

    </div>

  </div>
};

export default Profile;
