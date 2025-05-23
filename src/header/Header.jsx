import React, { useState } from "react";
import { Link } from "react-router";
import routes from "../routes";
import logo from "../../public/images/logo/Logo.png";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useObeContext } from "../../components/contextAPI/MainContextProvider";
import man from "../../public/images/header/man.png"
import UserInfo from "./UserInfo";
export default function Header() {
  const pages = routes[0].pages;
  const [openIndex, setOpenIndex] = useState(null);
  const { user } = useObeContext();
  console.log("user", user)
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <nav className="p-6 shadow-lg">
      <div className="flex justify-between px-10 container">
        <div>
          <img src={logo} alt="logo" className="w-30" />
        </div>

        <div className="flex gap-2 items-center">
          {pages.map((page, index) => (
            <div key={index} className="relative">
              <div
                onClick={() => handleToggle(index)}
                className="cursor-pointer text-[#333] hover:text-[#ec9f2b] capitalize pl-8 text-[15px] font-medium flex justify-between items-center"
                style={{ fontFamily: "poppins" }}
              >
                <Link to={page.path}>{page.name}</Link>

                {page.children && (
                  <span className="pl-2">
                    {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                  </span>
                )}
              </div>

              {/* Animated Submenu */}
              {page.children ? (
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden absolute top-10 left-4 ${
                    openIndex === index
                      ? "max-h-40 w-[200px] shadow-xl  bg-white rounded-lg"
                      : "max-h-0 "
                  }`}
                >
                  {page.children?.map((child, childIndex) => (
                    <Link
                      key={childIndex}
                      to={child.path}
                      onClick={() => setOpenIndex(null)}
                      className="block text-[#666] hover:text-[#ec9f2b] pl-4  textAlign-left capitalize w-[160px] text-[14px] font-normal py-[4px]"
                      style={{ fontFamily: "poppins" }}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
        <div className=" flex justify-between items-center ml-4 rounded-2xl relative group cursor">
        <div>
          <img src={man} alt="man"  className="w-14 h-14" />
        </div>
        <div>
          <UserInfo></UserInfo>
        </div>
        </div>
      </div>
    </nav>
  );
}
