/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
const SingleProductCardDashboard = ({ shoe, onDelete }) => {
  const { id, title, brand, price, description, image_url } = shoe;

  const handleDelete = async () => {
    const confirmation = window.confirm("Are sure to delete the product?");
    if(confirmation){
      await fetch(`http://localhost:3000/shoes/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if(data){
            toast.success("Product is deleted successfully!!!")
          }
          onDelete(id);
        });
    }
    
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body p-2">
        <h2 className="card-title">{title} | {brand}</h2>
        <h3 className="lg:text-xl font-semibold">${price}</h3>
        <p>{description}</p>
        <div className="flex justify-center gap-4 my-4">
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white rounded-lg p-2 w-1/3">
            <Link to={`/products/${id}`}>See details</Link>
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white rounded-lg p-2 w-1/3">
            <Link to={`edit/${id}`}>Edit</Link>
          </button>
          <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white rounded-lg p-2 w-1/3">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCardDashboard;
