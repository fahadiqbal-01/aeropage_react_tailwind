import React from "react";
import bellimg from "../../images/Vector.png";
import bannerimg from "../../images/banner.png";

const Banner = () => {
  return (
    <div className="banner bg-[#ffffff] w-[100%] font-roboto">
      <div className="container w-[1320px] m-auto">
        <div className="banner_main flex justify-between">
          <div className="left pt-[289px]">
            <div className="banner_buttton w-[179px] flex gap-[13px] items-center border-[1px] border-[#000000] rounded-[20px] hover:bg-[#FAD7C4] hover:border-transparent transition duration-300">
              <div className="button_icon h-[35px] w-[35px] leading-[35px] text-center border-0 rounded-[50%] text-[21.88px] bg-[#FAD7C4]">
                <img
                  src={bellimg}
                  alt="bell_icon"
                  className="m-auto mt-[4px]"
                />
              </div>
              <a href="#" className="">
                Startup Business
              </a>
            </div>
            <h1 className=" text-[36px] font-medium leading-[45px] mt-[35px] text-[#000000]">
              Empowering startups to fuel <br /> their business growth
            </h1>
            <p className="text-[18px] font-normal leading-[28px] text-[#000000] mt-[32px]">
              Eu posuere mi sed purus proin quisque molestie. Ut amet, at amet,{" "}
              <br />
              velit <br />
              nibh arcu eu. Id sem varius malesuada tincidunt sodales.
            </p>
            <a
              href="#"
              className="h-[37px] font-abeezee text-[16px] font-normal w-[179px] text-white inline-block bg-[#EA580C] border-0 rounded-[5px] pt-[7px] pl-[33px] pr-[23px] mt-[37px] hover:bg-transparent hover:text-[#EA580C] transition duration-300"
            >
              Get started now{" "}
            </a>
          </div>
          <div className="right pt-[192px]">
            <img src={bannerimg} alt="banner_image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
