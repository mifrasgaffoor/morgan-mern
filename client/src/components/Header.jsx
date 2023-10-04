import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import logo from '../images/logo.jpg'
import mobileLogo from "../images/mobile.jpg";
import "../index.css";
export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  // Define a breakpoint for mobile view (e.g., 640px)
  const mobileBreakpoint = 640;
   const mobileLogoHeight = "30px";
   const mobileLogoWidth = "100px";
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  // Use window.innerWidth to check the screen width and choose the appropriate logo
  const isMobileView = window.innerWidth <= mobileBreakpoint;
  return (
    <header
      style={{ backgroundColor: "#F6FFE9" }}
      className="bg-slate-200 shadow-md"
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <img
              src={isMobileView ? mobileLogo : logo}
              height={isMobileView ? mobileLogoHeight : "80px"}
              width={isMobileView ? mobileLogoWidth : "220px"}
              alt="Logo"
             
            />
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline link-green bold-list-item ">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline link-green bold-list-item ">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className=" text-slate-700 hover:underline link-green bold-list-item ">
                {" "}
                Sign in
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
