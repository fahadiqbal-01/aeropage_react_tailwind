import React from "react";
import ball_logo from "../../images/baseball-ball.png";

const Group = () => {
  return (
    <div className="group w-[100%] font-roboto pt-[109px] pb-[139px] ">
      <div className="container w-[1320px] m-auto">
        <div className="group_main flex justify-between ">
          <div className="group_box h-[135px] w-[357px] bg-[#fdede8] flex items-center justify-between pl-[24.34px]pr-[37px] border-[1px] rounded-[15px] border-[#FAD0BC] relative ">
          <div className="box_line h-[82px] w-[1px] bg-[#FAD0BC] absolute left-[73.02px] top-[50%] transform translate-y-[-50%] "></div>
          <img
            src={ball_logo}
            alt="baseball_icon"
            className="h-[35px]  font-medium ml-[24.34px] mr-[46.26px]"
          />
          <div className="group_boxdetails mr-[37px]">
            <h5 className="text-[20px] font-medium leading-[28px] text-[#09090B] ">
              Immediate Deployment
            </h5>
            <h6 className=" text-[16px] font-medium leading-[28px] text-[#71717A] w-[207px] ">
              Et vero eos et accusamus et iusto odio dignissimos
            </h6>
          </div>
        </div>
        <div className="group_box h-[135px] w-[357px] bg-[#fdede8] flex items-center justify-between pl-[24.34px]pr-[37px] border-[1px] rounded-[15px] border-[#FAD0BC] relative ">
          <div className="box_line h-[82px] w-[1px] bg-[#FAD0BC] absolute left-[73.02px] top-[50%] transform translate-y-[-50%] "></div>
          <img
            src={ball_logo}
            alt="baseball_icon"
            className="h-[35px]  font-medium ml-[24.34px] mr-[46.26px]"
          />
          <div className="group_boxdetails mr-[37px]">
            <h5 className="text-[20px] font-medium leading-[28px] text-[#09090B] ">
              Immediate Deployment
            </h5>
            <h6 className=" text-[16px] font-medium leading-[28px] text-[#71717A] w-[207px] ">
              Et vero eos et accusamus et iusto odio dignissimos
            </h6>
          </div>
        </div>
        <div className="group_box h-[135px] w-[357px] bg-[#fdede8] flex items-center justify-between pl-[24.34px]pr-[37px] border-[1px] rounded-[15px] border-[#FAD0BC] relative ">
          <div className="box_line h-[82px] w-[1px] bg-[#FAD0BC] absolute left-[73.02px] top-[50%] transform translate-y-[-50%] "></div>
          <img
            src={ball_logo}
            alt="baseball_icon"
            className="h-[35px]  font-medium ml-[24.34px] mr-[46.26px]"
          />
          <div className="group_boxdetails mr-[37px]">
            <h5 className="text-[20px] font-medium leading-[28px] text-[#09090B] ">
              Immediate Deployment
            </h5>
            <h6 className=" text-[16px] font-medium leading-[28px] text-[#71717A] w-[207px] ">
              Et vero eos et accusamus et iusto odio dignissimos
            </h6>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Group;
