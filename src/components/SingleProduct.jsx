import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProduct = ({ shoe }) => {
  const { id, title, brand, price, description, image_url } = shoe;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body p-5">
        <h2 className="card-title">{title} | {brand}</h2>
        <h3 className="text-xl font-semibold">${price}</h3>
        <p>{description}</p>
        <div className="card-actions justify-center">
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white rounded-lg my-4 p-2 w-full">
            <Link to={`/products/${id}`}>See details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
