export default function Home() {
  return (
    <div id="container" className="w-[1046px] h-auto absolute top-[104px] left-[197px] pt-[80px] pb-[80px] gap-[80px] flex flex-col justify-center items-center">
      <div id="row" className="w-[701px] h-auto  flex flex-col items-center mx-auto">
        <div id="maincontain" className="w-[699px] h-auto pt-[40px] pb-[40px] gap-[40px] flex flex-col items-center">
          <h5 id="h5" className="w-[77px] h-[24px] text-center text-[#23A6F0] font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px]">Welcome</h5>
          <h1 id="h1" className="W-[542px] h-[160px] text-center text-[#FFFFFF] font-montserrat font-bold text-[58px] leading-[80px] tracking-[0.2px]">Selling on the <br />internet like a pro</h1>
          <h4 id="h4" className="w-[536px] h-[60px] text-center text-[#FFFFFF] font-montserrat font-normal text-[20px] leading-[30px] tracking-[0.2px]">We know how large objects will act, but things on a small scale just do not act that way.</h4>
          <div id="cta" className="w-auto h-auto gap-[10px] flex justify-center">
            <button id="button-md" className="w-auto h-auto rounded-[5px] pt-[15px] pb-[15px] pr-[40px] pl-[40px] gap-[10px] bg-[#23A6F0]  "><p className="w-[113px] h-[22px] text-[#FFFFFF] font-montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px] whitespace-nowrap">Get Quote Now</p></button>
            <button id="button-md" className="w-auto h-auto rounded-[5px] pt-[15px] pb-[15px] pr-[40px] pl-[40px] gap-[10px] border-[#23A6F0] border-[1px]"> <p className="w-[82px] h-[22px] text-[#23A6F0] font-montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px] whitespace-nowrap" >Learn More</p></button>
          </div>
        </div>
      </div>
      <div id="row-2" className="w-auto h-auto gap-[30px] flex flex-row ">
        <div id="col-md-4" className="w-[328px] h-auto"> <div id="card" className="w-[328px] h-auto pt-[35px] shadow-accentuated pb-[35px] pl-[40px] pr-[40px] flex flex-col gap-[20px] bg-white"> 
          <div id="fixed-width" className=" bg-[#FFDCD1] w-[70px] h-[76px] rounded-[10px] py-[22px] px[19px] gap-[10px]"></div> 
          <h3 id="h3 #feature-title-1" className=" w-[135px] h-[24px] text-[#252B42] font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] whitespace-nowrap">training Courses</h3>
          <div id="fixth-width-fixed-height" className=" w-[50px] h-[2px] bg-[#E74040]"></div>
          <p id="paragraph" className="w-[222pz] h-[60px] text-[#737373] font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] ">The gradual accumulation of information about atomic and small-scale behaviour...</p>
          </div></div>
        <div id="col-md-4" className="w-[329px] h-auto">
        <div id="card" className="w-[328px] h-auto pt-[35px] shadow-accentuated  pb-[35px] pl-[40px] pr-[40px] flex flex-col gap-[20px] bg-white"> 
          <div id="fixed-width" className=" bg-[#B9EAA8] w-[70px] h-[76px] rounded-[10px] py-[22px] px[19px] gap-[10px]"></div> 
          <h3 id="h3 #feature-title-1" className=" w-[168px] h-[24px] text-[#252B42] font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] whitespace-nowrap">2,769 online courses</h3>
          <div id="fixth-width-fixed-height" className=" w-[50px] h-[2px] bg-[#E74040]"></div>
          <p id="paragraph" className="w-[222pz] h-[60px] text-[#737373] font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px]">The gradual accumulation of information about atomic and small-scale behaviour...</p>
          </div>
        </div>
        <div id="col-md-4" className="w-[329px] h-auto">
        <div id="card" className="w-[329px] h-auto pt-[35px] shadow-accentuated  pb-[35px] pl-[40px] pr-[40px] flex flex-col gap-[20px] bg-[#23A6F0]"> 
          <div id="fixed-width" className=" bg-[#FFFFFF] w-[70px] h-[76px] rounded-[10px] py-[22px] px[19px] gap-[10px]"></div> 
          <h3 id="h3 #feature-title-1" className=" w-[135px] h-[24px] text-white  font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] whitespace-nowrap">training Courses</h3>
          <div id="fixth-width-fixed-height" className=" w-[50px] h-[2px] bg-[#FFFFFF]"></div>
          <p id="paragraph" className="w-[222pz] h-[60px] text-white font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px]">The gradual accumulation of information about atomic and small-scale behaviour...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
