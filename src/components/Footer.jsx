import { NavLink } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTwitter,
} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="footer py-10 bg-base-200 text-base-content grid grid-cols-1 md:grid-cols-3 place-items-center">
        <aside className="text-center xl:pl-5">
          <NavLink className="text-3xl font-black mx-auto">
            TecH<span className="text-red-600">BranD</span>
          </NavLink>
          <p>
            The most popular and reliable mobile phone information website in
            Bangladesh. Our blog posts and articles provide the important latest
            news, reviews, tips and tricks to help you make informed decisions
            about your mobile phone purchases.
          </p>
          <div className="flex gap-3 mx-auto text-xl">
            <a href="">
              <BsFacebook className="text-blue-500"></BsFacebook>
            </a>
            <a href="">
              <BsTwitter className="text-blue-400"></BsTwitter>
            </a>
            <a href="">
              <BsPinterest className="text-red-500 "></BsPinterest>
            </a>
            <a href="">
              <BsInstagram className="text-red-400"></BsInstagram>
            </a>
          </div>
        </aside>
        <nav>
          <header className="footer-title mx-auto">Services</header>
          <a className="link link-hover mx-auto">Branding</a>
          <a className="link link-hover mx-auto">Design</a>
          <a className="link link-hover mx-auto">Marketing</a>
          <a className="link link-hover mx-auto">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title mx-auto">Company</header>
          <a className="link link-hover mx-auto">About us</a>
          <a className="link link-hover mx-auto">Contact</a>
          <a className="link link-hover mx-auto">Jobs</a>
          <a className="link link-hover mx-auto">Press kit</a>
        </nav>
      </footer>
      <footer className="footer footer-center py-4 bg-base-300 text-base-content">
        <aside>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
