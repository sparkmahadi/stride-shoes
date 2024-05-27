const Accordian = () => {
  return (
    <div className="my-20 px-8 w-3/4 mx-auto">
      <h1 className="my-16 text-center font-bold text-3xl">
        Frequently Asked Questions!
      </h1>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
        1. What sizes do you offer?
        </div>
        <div className="collapse-content">
          <p>We offer a wide range of sizes for men, women, and children. You can find our detailed size chart on each product page to help you select the perfect fit.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        2. How can I track my order?
        </div>
        <div className="collapse-content">
          <p>Once your order is shipped, you will receive an email with a tracking number and a link to track your package. You can also log in to your account on our website and check your order status under "My Orders."</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        3. What is your return policy?
        </div>
        <div className="collapse-content">
          <p>We offer a 30-day return policy for unworn shoes in their original packaging. If you are not completely satisfied with your purchase, you can initiate a return through our website or contact our customer service for assistance.</p>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
