import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero h-[600px] bannerBg"
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md lg:max-w-2xl xl:max-w-fit">
          <h1 className="mb-5 text-5xl font-bold">Step into Style and Comfort</h1>
          <p className="mb-5">
          Discover our exclusive collection of premium footwear designed to keep you comfortable and stylish all day long. From sleek dress shoes to rugged sneakers, each pair is crafted with precision, quality, and sustainability in mind. Explore now and find your perfect fit!
          </p>
          <Link>
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white rounded-lg p-3">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
