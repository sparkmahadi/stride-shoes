const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">About US</h1>
          <p className="py-6">
            Welcome to Stride Shoes, where every step is a statement. Our mission is to provide you with footwear that combines unparalleled comfort, exceptional quality, and cutting-edge design. Whether you're seeking the perfect pair for a special occasion or everyday wear, we have something for everyone.

            At Stride Shoes, we believe that great shoes can transform not just your outfit, but your entire day. That's why we meticulously craft each pair with premium materials and innovative techniques, ensuring durability and a perfect fit. Our diverse collection ranges from timeless classics to the latest trends, all designed to keep you stylish and comfortable.

            We're passionate about creating shoes that make you feel confident and ready to take on the world. Thank you for choosing Stride Shoes – where style meets comfort, one step at a time.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
