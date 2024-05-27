import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12">
      <div className="lg:col-span-3 bg-gray-300 lg:min-h-screen p-6 lg:p-12">
        <ul className="grid grid-cols-1 gap-5">
          <li className='bg-indigo-500 hover:bg-indigo-700 text-white rounded-lg text-center p-3 font-semibold'>
            <Link to={"home"}>Dashboard</Link>
          </li>
          <li className='bg-indigo-500 hover:bg-indigo-700 text-white rounded-lg text-center p-3 font-semibold'>
            <Link to={"all-products"}>All Products</Link>
          </li>
          <li className='bg-indigo-500 hover:bg-indigo-700 text-white rounded-lg text-center p-3 font-semibold'>
            <Link to={"add-products"}>Add Product</Link>
          </li>
          <li className='bg-indigo-500 hover:bg-indigo-700 text-white rounded-lg text-center p-3 font-semibold'>
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </div>
      <div className="md:col-span-3 lg:col-span-9 p-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
