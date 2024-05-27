import useAuth from "../hooks/useAuth";
import Profile from "./Profile";

const Dashboard = () => {
  const { user } = useAuth();
  console.log(user)

  return <div className='min-h-custom font-secondary'>
    <Profile></Profile>
  </div>
};

export default Dashboard;
