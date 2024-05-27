import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const shoe = useLoaderData();

  const { brand, description, image_url, price, title } = shoe;

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-5xl text-center font-bold">{title}</h1>

      <img className="h-[600px] py-5" src={image_url} alt="product image" />

      <div className="pb-5">
      <h3 className="text-2xl font-semibold">Brand : {brand}</h3>
      <h3 className="text-xl font-semibold">Price : ${price}</h3>
      <p className="text-lg font-light">Detail: {description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
