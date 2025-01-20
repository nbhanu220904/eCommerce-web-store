import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className="mb-5 w-32" src={assets.logo} alt="Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            This web app is your one-stop destination for exploring the latest
            trends, best-selling products, and exclusive collections. With a
            seamless shopping experience, personalized recommendations, and
            special offers like 20% off for subscribers, we aim to make your
            online shopping enjoyable, convenient, and rewarding.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Get In Touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 1234567890</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ forever.com - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
