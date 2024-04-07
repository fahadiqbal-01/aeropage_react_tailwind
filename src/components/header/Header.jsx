import React from "react";
import logo_img from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <nav
      id="navBar"
      className=" bg-transparent w-[100%]  h-[89px] font-ABeeZee absolute"
    >
      <div className=" container w-[1320px] bg-[#ffffff] m-auto">
        <div className="nav_main flex justify-evenly text-center items-center">
          <div className="nav_logo">
            <img
              src={logo_img}
              alt="nav_logo"
              className="h-[89px] w-[328px] "
            />
          </div>
          <div className="nav_list ms-auto ">
            <ul className="flex">
              <li className="text-[16px] font-medium text-[#0B0B0B] hover:text-[#EA580C] hover:font-REM  transition duration-300 ">
                <a href="#">Home</a>
              </li>
              <li className="text-[16px] font-medium text-[#0B0B0B] ml-[83px] hover:text-[#EA580C] transition duration-300 ">
                <a href="#">About</a>
              </li>
              <li className="text-[16px] font-medium text-[#0B0B0B] ml-[83px] hover:text-[#EA580C] transition duration-300 ">
                <a href="#">Service</a>
              </li>
              <li className="text-[16px] font-medium text-[#0B0B0B] ml-[83px] hover:text-[#EA580C] transition duration-300 ">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <a
            href="#"
            className=" text-[16px] font-medium ml-[221px] h-[56px] w-[243px] bg-[#EA580C] inline-block pt-[15px]
            pl-[51.94px] pr-[59px] border-1 rounded-[20px] text-white hover:text-[#EA580C] hover:bg-transparent border-[1px] border-[#EA580C]
             transition duration-300"
          >
            <FontAwesomeIcon
              icon={faDownload}
              className="mr-[27.94px] "
            ></FontAwesomeIcon>
            Download
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
