export default function Navbar() {
    return (
      <div id="Navbar" >
        <div id="container" className=" w-[1322px] h-[91px] absolute left-[59px]">
          <div id="navbar-light" className="w-[1322px] h-[91px] ">
            <div id="collapse-navbar" className="w-[815px] h-[58px]  absolute top-[16px] left-[364px] ">
              <div id="navbar-nav" className="  absolute  w-[182px] h-auto  top-[3px] left-[626px] gap-[45px]  flex items-center ">
                <div id="navitem" className=" w-[41px] h-[22px]  ">
                  <a id="a" href="login" className="w-[41px] h-[22px]">
                    <button className="w-[41px] h-[22px] font-montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px] text-white">login</button>
                  </a>
                </div>
                <div id="navitem2" className="w-[214px] h-[52px] flex items-center  ">
                  <button id="button" className="w-[110px] h-[52px]  rounded-[5px] bg-[#23A6F0] pt-[15px] pb-[15px] pr-[25px] pl-[25px] gap-[15px] "><p className=" w-[60px] h-[22px] text-white font-montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px] whitespace-nowrap">JOIN US</p></button>
                </div>
              </div>
              <ol id="navbar-nav-2" className=" w-auto h-auto absolute top-[17px] gap-[21px] flex items-center">
                <li id="li" className="w-[43px]  h-[24px]">
                <a href="#" id="a" className="w-[43px]  h-[24px]"> <p id="link" className="w-[43px] text-white h-[24px] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]" >Home</p></a>
                </li>
                <li id="li-2" className="h-[24px] w-[59px]" >
                <a href="#" id="a" className="w-[59px]  h-[24px]"> <p id="link" className="w-[59px]  h-[24px] text-white font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]" >Product</p></a>
                </li>
                <li id="li-3" className="h-[24px] w-[52px]">
                <a href="#" id="a" className="w-[52px]  h-[24px]"> <p id="link" className="w-[52px]  h-[24px] text-white font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]" >Pricing</p></a>
                </li>
                <li id="li-4" className="h-[24px] w-[58px]">
                <a href="#" id="a" className="w-[58px]  h-[24px]"> <p id="link" className="w-[58px]  h-[24px] text-white font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]" >Contact</p></a>
                </li>
              </ol>
            </div>
            <div id="navbar-toggler" className=" w-[24px] h-[13.71px] absolute top-[39px] left-[1298px]"> <div id="navbar-toggler-item" className="w-[24px] h-[13.71px]"></div></div>
            <div id="navbar-brand" className="w-[187px] h-[58px] absolute top-[17px] left-[136px]"> <h3 id="brand-name" className="w-[152px] h-[32px] absolute top-[13px] text-white flex font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] items-center text-xl">BrandName</h3></div>
          </div>
        </div>
      </div>
    );}