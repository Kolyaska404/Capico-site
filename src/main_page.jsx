import { useState } from "react"
import { Button } from "./button"
import { Slider_1 } from "./main_slider"
import { Slider_2 } from "./main_slider_2"
import { Sign_in_out } from "./sign_in_out"
import { Footer } from "./footer"
import '/src/App.css'
export function Main_page() {
    const [dropdown, setDropdown] = useState(false)
    const [dropdown2, setDropdown2] = useState(false)
    const [sign, setSign] = useState(false)
    return (
        <>
            <div className="w-full flex flex-col min-h-full mx-auto relative">
                <header className="transition-all relative">
                    <div className="cnt min-[350px]:max-w-[765px] md:max-w-[1535px] relative md:px-[] min-[350px]:px-[15px] px-[27px] ">
                    {sign ? <Sign_in_out setSign={setSign}/> : ''}
                        <div className="flex justify-between items-center py-[13px]">
                            <img src="/main_page/logo.svg" alt="" />
                            <button onClick={() => setDropdown(!dropdown)} className={`z-20 transition-colors flex items-center 2xl:flex md:flex min-[350px]:hidden gap-x-4 text-[25px] ${dropdown ? 'text-[#904BFF]' : 'text-white'}`} >en {dropdown ? <img src="/main_page/dropdown_active.svg" alt="" /> : <img src="/main_page/dropdown_static.svg" alt="" /> }</button>
                            <ul className={`min-[350px]:hidden bg-[#5F29B7] rounded-[20px] 2xl:flex flex-col py-[15px] pl-[15px] pr-[15px] text-[25px] leading-[30px] font-light transition-opacity absolute top-[81px] left-[350px] ${dropdown ? 'opacity-100' : 'opacity-0'}`}>
                                <li className="hover:bg-[#7641CD] transition-colors w-full rounded-[5px] pl-[12px] pr-[40px] pb-[5px]"><a href="">en</a></li>
                                <li className="hover:bg-[#7641CD] transition-colors w-full rounded-[5px] pl-[12px] pr-[40px] pb-[5px]"><a href="">ru</a></li>
                                <li className="hover:bg-[#7641CD] transition-colors w-full rounded-[5px] pl-[12px] pr-[40px] pb-[5px]"><a href="">es</a></li>
                                <li className="hover:bg-[#7641CD] transition-colors w-full rounded-[5px] pl-[12px] pr-[40px] pb-[5px]"><a href="">cz</a></li>
                            </ul>
                            <nav className={`${sign ? 'opacity-0' : ''}`}>
                                <ul className="gap-x-9 text-[25px] font-medium 2xl:flex md:hidden min-[350px]:hidden">
                                    <li className="transition-colors hover:text-[#904BFF]"><a href="#">features</a></li>
                                    <li className="transition-colors hover:text-[#904BFF]"><a href="#">prices</a></li>
                                    <li className="transition-colors hover:text-[#904BFF]"><a href="#">partners</a></li>
                                    <li className="transition-colors hover:text-[#904BFF]"><a href="#">knowledge base</a></li>
                                    <li className="transition-colors hover:text-[#904BFF]"><a href="#">academy</a></li>
                                </ul>
                            </nav>
                            <button onClick={() => setSign(true)} className={`${sign ? 'opacity-0' : ''} bg-[#904BFF] pl-9 py-[15px] font-medium pr-6 flex items-center gap-x-4 text-[25px] rounded-[42px] 2xl:flex md:flex min-[350px]:hidden`}>sign in<img src="/main_page/sign_in_arrow.svg" alt="" /></button>
                            <button className="tablet:flex 2xl:hidden z-10" onClick={() => setDropdown2(true)}><img src="/main_page/menu.svg" alt="" /></button>
                            <div className={`z-20 absolute top-0 mx-auto right-0 left-0 w-screen  transition-all ${dropdown2 ? 'flex' : 'hidden'} bg-black py-[24px] px-[28px] flex flex-col`}>
                                <img className="absolute right-0 z-[-1]" src="/main_page/mobile_menu_bg.png" alt="" />
                                <div className="flex justify-between mb-[50px]">
                                    <img className="min-[350px]:w-[132px] min-[350px]:h-[28px] md:w-[263px] md:h-[56px]" src="/main_page/logo.svg" alt="" />
                                    <button className="z-10" onClick={() => setDropdown2(false)}><img src="/main_page/X.svg" alt="" /></button>
                                </div>
                                <ul className="gap-x-9 text-[35px] leading-[60px] font-medium flex flex-col gap-y-[30px] text-center mb-[66px]">
                                    <li className="transition-colors hover:text-[#904BFF]"><a href="#">features</a></li>
                                    <li className="transition-colors hover:text-[#904BFF]"><a href="#">prices</a></li>
                                    <li className="transition-colors hover:text-[#904BFF]"><a href="#">partners</a></li>
                                    <li className="transition-colors hover:text-[#904BFF]"><a href="#">knowledge base</a></li>
                                    <li className="transition-colors hover:text-[#904BFF]"><a href="#">academy</a></li>
                                </ul>
                                <button onClick={() => setDropdown2(!dropdown)} className="py-[18px] pl-[29px] pr-[22px] border-[1px] border-[#8A4CEF] rounded-[40px] mx-auto mb-[66px] transition-colors flex items-center gap-x-7 text-[25px]">en<img src="/main_page/dropdown_static.svg" alt="" /></button>
                                <ul className={`bg-[#5F29B7] rounded-[20px] 2xl:flex flex-col py-[15px] pl-[15px] pr-[15px] text-[25px] leading-[30px] font-light transition-opacity absolute top-[81px] left-[350px] z-20 ${dropdown2 ? 'opacity-0' : 'opacity-100'}`}>
                                    <li className="hover:bg-[#7641CD] transition-colors w-full rounded-[5px] pl-[12px] pr-[40px] pb-[5px]"><a href="">en</a></li>
                                    <li className="hover:bg-[#7641CD] transition-colors w-full rounded-[5px] pl-[12px] pr-[40px] pb-[5px]"><a href="">ru</a></li>
                                    <li className="hover:bg-[#7641CD] transition-colors w-full rounded-[5px] pl-[12px] pr-[40px] pb-[5px]"><a href="">es</a></li>
                                    <li className="hover:bg-[#7641CD] transition-colors w-full rounded-[5px] pl-[12px] pr-[40px] pb-[5px]"><a href="">cz</a></li>
                                </ul>
                                <button className="flex mx-[20px] items-center justify-center py-[18px] rounded-[27px] gap-x-[69px] border-[#8A4CEF] border-[1px]">Sign up<img src="/main_page/sign_in_mobile.svg" alt="" /></button>
                            </div>
                        </div>
                        <div className={`${sign ? 'hidden' : ''} min-[350px]:mt-[340px] min-[350px]:mb-[67px] 2xl:mt-[100px] 2xl:mb-[145px]`}>
                            <h1 className="md:text-[85px] md:leading-[81px] md:w-[638px] min-[350px]:text-[56px] min-[350px]:leading-[56px] min-[350px]:w-[400px] text-[102px] font-medium w-[765px] leading-[98px] mb-[30px] bg-clip-text bg-gradient-to-b from-white to-[#8441F1] text-transparent">Crypto trading with bots and smart seals</h1>
                            <button onClick={() => setSign(true)} className="min-[350px]:w-full min-[350px]:text-[19px] min-[350px]:leading-[18px] 2xl:w-[324px] py-[25px] pl-[60px] pr-[22px] text-[28px] 2xl:leading-[26px] font-semibold bg-[#904BFF] rounded-[50px] flex gap-x-[25px] items-center justify-center">Sign up now <img className="2xl:w-[50px]" src="/main_page/sign_in_arrow.svg" alt="" /></button>
                        </div>
                        <div className={`mb-[63px] z-[2] ${sign ? 'hidden' : ''}`}>
                            <p className="min-[350px]:text-[18px] min-[350px]:leading-[21px] min-[350px]:w-[242px] mb-[27px] 2xl:text-[30px] 2xl:leading-[34px] 2xl:w-[397px] font-semibold">Trade for free on your favorite exchanges</p>
                            <ul className="min-[350px]:grid min-[350px]:grid-cols-2 min-[350px]:grid-rows-3 2xl:flex min-[350px]:gap-y-[10px] min-[350px]:gap-x-[10px] 2xl:gap-x-[13px] md:grid-cols-3 md:grid-rows-2 md:gap-[15px]">
                                <li className="bg-[#0E0915] min-[350px]:w-[170px] min-[350px]:h-[67px] 2xl:w-[236px] 2xl:h-[100px] md:w-[249px] md:h-[105px] flex items-center justify-center min-[350px]:rounded-[20px] 2xl:rounded-[30px] exchange transition-shadow relative"><img src="/main_page/binance_1.svg" alt="" /></li>
                                <li className="bg-[#0E0915] min-[350px]:w-[170px] min-[350px]:h-[67px] 2xl:w-[236px] 2xl:h-[100px] md:w-[249px] md:h-[105px] flex items-center justify-center min-[350px]:rounded-[20px] 2xl:rounded-[30px] exchange transition-shadow relative"><img src="/main_page/ftx.svg" alt="" /></li>
                                <li className="bg-[#0E0915] min-[350px]:w-[170px] min-[350px]:h-[67px] 2xl:w-[236px] 2xl:h-[100px] md:w-[249px] md:h-[105px] flex items-center justify-center min-[350px]:rounded-[20px] 2xl:rounded-[30px] exchange transition-shadow relative"><img src="/main_page/huobi.svg" alt="" /></li>
                                <li className="bg-[#0E0915] min-[350px]:w-[170px] min-[350px]:h-[67px] 2xl:w-[236px] 2xl:h-[100px] md:w-[249px] md:h-[105px] flex items-center justify-center min-[350px]:rounded-[20px] 2xl:rounded-[30px] exchange transition-shadow relative"><img src="/main_page/exmo.svg" alt="" /></li>
                                <li className="bg-[#0E0915] min-[350px]:w-[170px] min-[350px]:h-[67px] 2xl:w-[236px] 2xl:h-[100px] md:w-[249px] md:h-[105px] flex items-center justify-center min-[350px]:rounded-[20px] 2xl:rounded-[30px] exchange transition-shadow relative"><img src="/main_page/okx.svg" alt="" /></li>
                                <li className="bg-[#0E0915] min-[350px]:w-[170px] min-[350px]:h-[67px] 2xl:w-[236px] 2xl:h-[100px] md:w-[249px] md:h-[105px] flex items-center justify-center min-[350px]:rounded-[20px] 2xl:rounded-[30px] exchange transition-shadow relative">
                                    <img src="/main_page/bybit.svg" alt="" />
                                    <div className="bg-[#904bff] p-[5px] rounded-[8px] text-[13px] leading-[14px] absolute top-[12px] right-[16px]">Soon</div>
                                </li>
                            </ul>
                        </div>
                        <div className={`${sign ? 'opacity-0' : ''} md:hidden min-[350px]:hidden 2xl:block absolute bottom-1/2 right-[40px] rounded-full group transition-opacity p-[33px]`}>
                            <div className="bg-transparent transition-colors group-hover:bg-[#904BFF] delay-100 ease-in-out rounded-full border-[1px] border-[#904BFF] w-[83px] h-[83px] relative after:absolute after:border-[1px] after:border-[#8854DD] after:animate-ping after:w-[83px] after:h-[83px] after:rounded-full">
                                <img className="absolute bottom-[33px] right-0 left-0 mx-auto w-[15px] h-[55px]" src="/main_page/header_arrow_bottom.svg" alt="" />
                            </div>
                        </div>
                        <div className="w-[1000px] h-[300px] bg-[#904bff] absolute bottom-[-200px] rounded-l-2xl blur-[260px] right-[-60px] z-[1]"></div>
                        <video className="outline-none absolute z-[-1] 2xl:top-[175px] 2xl:mx-auto 2xl:left-0 2xl:right-0 md:w-full md:left-[-100px] md:bottom-0 md:scale-[1.5] min-[350px]:left-[-350px] min-[350px]:scale-[3] min-[350px]:top-[-340px] 2xl:w-screen 2xl:h-[780px] 2xl:scale-[1]" autoPlay muted loop>
                            <source src="/main_page/header_video.mp4" type="video/mp4"/>
                        </video>
                    </div>
                </header>
                <main className={`${sign ? 'hidden' : ''} z-[1] relative`}>
                    <div className="cnt min-[350px]:max-w-[765px] md:max-w-[1024px]">
                        <section className="flex flex-col items-center pt-[73px] rounded-t-[40px] bg-black 2xl:px-[27px] min-[350px]:px-[10px]">
                            <h2 className="2xl:text-[70px] 2xl:leading-[80px] min-[350px]:text-[24px] min-[350px]:leading-[30px] min-[350px]:w-[297px] 2xl:w-[1030px] md:w-[741px] md:text-[50px] md:leading-[57px] bg-clip-text bg-gradient-to-r from-white to-[#8441F1] text-transparent w-[1020px] font-[300] text-center ">Manage positions on
                            different exchanges from one window</h2>
                            <video src="" className="min-[350px]:w-full" poster="/main_page/video_bg.png">
                                <source src=""/>
                            </video>
                        </section>
                        <section className="relative 2xl:px-[40px] min-[350px]:px-[10px] md:px-[30px] mb-[72px] pt-[5px] bg-black">
                            <div className="z-[1] absolute top-0 mx-auto right-0 left-0 bg-no-repeat 2xl:bg-[url('/main_page/numbers_line.svg')] md:w-[801px] md:bg-[url('/main_page/numbers_line_tablet.svg')] md:h-[50px] 2xl:w-[1550px] 2xl:h-[50px] min-[350px]:bg-[url('/main_page/numbers_line_mobile.svg')] min-[350px]:w-[354px] min-[350px]:h-[31px]"></div>
                            <div className="z-[1] relative flex justify-between items-center mb-[72px] md:pt-[15px]">
                                <h3 className="2xl:text-[60px] font-medium 2xl:leading-[59px] min-[350px]:text-[38px] min-[350px]:leading-[35px] min-[350px]:pl-[9px]">numbers</h3>
                                <p className="2xl:block min-[350px]:hidden text-[15px] leading-[15px] text-[#6E647D]">Manage positions on </p>
                            </div>
                            <h2 className="z-[1] relative 2xl:text-[250px] 2xl:leading-[232px] min-[350px]:text-[90px] min-[350px]:leading-[84px] md:text-[125px] md:leading-[117px] font-light mb-[31px]">$18.5 B+</h2>
                            <p className="z-[1] relative 2xl:text-[40px] 2xl:leading-[41px] min-[350px]:text-[16px] min-[350px]:leading-[17px] md:text-[29px] md:leading-[30px] md:w-[256px] 2xl:w-[280px] min-[350px]:w-[130px] min-[350px]:mb-[90px] 2xl:mb-0">Total trading volume</p>
                            <div className="z-[1] relative flex items-center justify-between">
                                <p className="text-[15px] leading-[15px] w-[125px] text-[#6E647D] 2xl:block min-[350px]:hidden md:block">Actual statistic on 19.07.2022</p>
                                <ul className="grid grid-cols-2 grid-rows-2 grid-flow-row gap-x-[30px] gap-y-[30px]">
                                    <li className="col-span-1 2xl:py-[42px] min-[350px]:py-[19px] 2xl:px-[30px] min-[350px]:px-[14px] 2xl:w-[376px] 2xl:h-[292px] md:w-[211px] md:h-[164px] min-[350px]:w-[174px] min-[350px]:h-[135px] md:px-[17px] md:py-[24px] flex flex-col justify-between 2xl:bg-[url('/main_page/numbers_box_border_1.svg')] min-[350px]:bg-[url('/main_page/numbers_border_mobile1.svg')] md:bg-[url('/main_page/numbers_border_tablet1.svg')]">
                                        <h3 className="2xl:text-[80px] 2xl:leading-[75px] min-[350px]:text-[37px] min-[350px]:leading-[35px] md:text-[45px] md:leading-[42px] font-light">36М+</h3>
                                        <p className="2xl:text-[20px] 2xl:leading-[21px] min-[350px]:text-[12px] min-[350px]:leading-[12px] md:text-[17px] md:leading-[18px]">We are online</p>
                                    </li>
                                    <li className="col-span-1 2xl:py-[42px] min-[350px]:py-[19px] 2xl:px-[30px] min-[350px]:px-[14px] md:w-[211px] md:h-[164px] md:px-[17px] md:py-[24px]"></li>
                                    <li className=" 2xl:py-[42px] 2xl:px-[30px] min-[350px]:py-[19px] min-[350px]:px-[14px] 2xl:w-[376px] 2xl:h-[292px] md:w-[211px] md:h-[164px] min-[350px]:w-[174px] min-[350px]:h-[135px] md:px-[17px] md:py-[24px] flex flex-col justify-between 2xl:bg-[url('/main_page/numbers_box_border_1.svg')] min-[350px]:bg-[url('/main_page/numbers_border_mobile1.svg')] md:bg-[url('/main_page/numbers_border_tablet1.svg')]">
                                        <h3 className="2xl:text-[80px] 2xl:leading-[75px] min-[350px]:text-[37px] min-[350px]:leading-[35px] md:text-[45px] md:leading-[42px] font-light">21.5 K+</h3>
                                        <p className="2xl:text-[20px] 2xl:leading-[21px] min-[350px]:text-[12px] min-[350px]:leading-[12px] md:text-[17px] md:leading-[18px] w-[110px]">Traiders in platform</p>
                                    </li>
                                    <li className=" 2xl:py-[42px] min-[350px]:py-[19px] 2xl:px-[30px] min-[350px]:px-[14px] 2xl:w-[376px] 2xl:h-[292px] md:w-[211px] md:h-[164px] min-[350px]:w-[174px] min-[350px]:h-[135px] md:px-[17px] md:py-[24px] flex flex-col justify-between 2xl:bg-[url('/main_page/numbers_box_border_2.svg')] min-[350px]:bg-[url('/main_page/numbers_border_mobile2.svg')] md:bg-[url('/main_page/numbers_border_tablet1.svg')]">
                                        <h3 className="2xl:text-[80px] 2xl:leading-[75px] min-[350px]:text-[37px] min-[350px]:leading-[35px] md:text-[45px] md:leading-[42px] font-light">325 M+</h3>
                                        <p className="2xl:text-[20px] 2xl:leading-[21px] min-[350px]:text-[12px] min-[350px]:leading-[12px] md:text-[17px] md:leading-[18px] w-[165px]">Total deals in platform</p>
                                    </li>
                                </ul>
                            </div>
                            <img className="absolute md:top-[155px] md:left-0 md:scale-[1.2] 2xl:top-0 min-[350px]:top-[295px] 2xl:scale-100 min-[350px]:scale-[2] mx-auto right-0 left-0 z-[0]" src="/main_page/numbers_bg.png" alt="" />
                        </section>
                        <section className="relative mt-[50px] 2xl:px-[42px] min-[350px]:px-[10px] md:px-[33px] pt-[22px] pb-[222px]">
                            <div className="z-[1] absolute top-0 mx-auto right-0 left-0 2xl:bg-[url('/main_page/numbers_line.svg')] 2xl:w-[1550px] 2xl:h-[50px] md:w-[801px] md:h-[50px] md:bg-[url('/main_page/numbers_line_tablet.svg')] min-[350px]:bg-[url('/main_page/numbers_line_mobile.svg')] min-[350px]:w-[354px] min-[350px]:h-[31px]"></div>
                            <div className="flex justify-between items-center mb-[72px]">
                                <h3 className="text-[60px] font-medium leading-[59px]">benefits</h3>
                                <p className="text-[15px] leading-[15px] text-[#6E647D] 2xl:block md:hidden min-[350px]:hidden">Manage positions on </p>
                            </div>
                            <div className="flex items-center mb-[300px]">
                                <img className="2xl:w-[900px] md:w-[425px]" src="/main_page/benefits_bg.png" alt="" />
                                <div className="relative">
                                    <h2 className="bg-clip-text bg-gradient-to-r from-white to-[#8441F1] text-transparent 2xl:text-[130px] 2xl:leading-[121px] md:text-[60px] md:leading-[59px] font-light mb-[100px]">Interface Builder</h2>
                                    <div className="flex gap-x-[90px]">
                                        <p className="2xl:text-[40px] 2xl:leading-[37px] md:text-[20px] md:leading-[20px]">Customize 
                                        your look</p>
                                        <p className="2xl:text-[18px] 2xl:leading-[19px] md:text-[14px] md:leading-[15px] font-light text-[#B7B1C3]">Remove the excess, add what you need. Trade at your convenience.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center mb-[310px] justify-between">
                                <div className="relative pt-[40px]">
                                    <img className="absolute top-0 md:scale-75" src="/main_page/portfolio_line.svg" alt="" />
                                    <h2 className="2xl:text-[130px] 2xl:leading-[121px] md:text-[60px] md:leading-[59px] font-light bg-clip-text bg-gradient-to-r from-white to-[#8441F1] text-transparent mb-[109px]">MultiChart</h2>
                                    <p className="w-[651px] 2xl:text-[40px] 2xl:leading-[43px] md:text-[21px] md:leading-[24px] md:w-[298px] text-[#7B708D]"><span className="text-white">Add any trading pairs</span> from different exchanges and analyzecryptocurrency assets on one screen</p>
                                </div>
                                <img className="2xl:w-1/2 md:w-1/2" src="/main_page/multichart_bg.png" alt="" />
                            </div>
                            <div className="flex items-center justify-between">
                                <img className="2xl:w-1/2 md:w-1/2" src="/main_page/portfolio_bg.png" alt="" />
                                <div className="relative pt-[40px]">
                                    <img className="absolute top-0 right-[55px] " src="/main_page/multichart_line.svg" alt="" />
                                    <h2 className="w-[800px] 2xl:text-[130px] 2xl:leading-[121px] md:text-[60px] md:leading-[59px] md:w-[450px] font-light bg-clip-text bg-gradient-to-r from-white to-[#8441F1] text-transparent mb-[136px]">Portfolio & Statistics</h2>
                                    <div className="flex">
                                        <p className="2xl:text-[40px] 2xl:leading-[37px] md:text-[21px] md:leading-[22px] 2xl:w-[464px] md:w-[216px]">
                                            Your assets on all <br /> 
                                            connected <br />
                                            exchanges are <br /> 
                                            collected in one place
                                        </p>
                                        <p className="2xl:text-[18px] 2xl:leading-[18px] md:text-[14px] md:leading-[15px] font-light text-[#B7B1C3] 2xl:w-[316px] md:w-[186px]">Visual statistics of trade.
                                        Uploading reports</p>
                                    </div>
                                </div>
                            </div>
                            <img src="/main_page/gra.png" className="absolute bottom-[-1100px] z-[0] right-0 left-0 mx-auto rounded-full blur-[350px] "></img>
                        </section>
                        <section className="relative z-[1] bg-black rounded-t-[40px] pt-[44px]">
                            <div className="2xl:px-[25px] min-[350px]:px-[10px] overflow-hidden">
                                <img className="top-[44px] right-0 left-0 mx-auto absolute" src="/main_page/slider_line.svg" alt="" />
                                <h3 className="text-[90px] font-medium leading-[92px] pt-[15px] pl-[15px] w-[958px] bg-clip-text bg-gradient-to-r from-white to-[#8441F1] text-transparent">Everything for your comfortable work</h3>
                                <Slider_1 />
                            </div>
                            <div className="bg-gradient-to-tr from-[#340E73] to-[#7061AA] rounded-[40px] 2xl:px-[40px] min-[350px]:px-[10px] pt-[50px] pb-[75px] text-white z-[1] relative">
                                <div className="flex justify-between">
                                    <h3 className="text-[70px] leading-[65px] font-semibold">features</h3>
                                    <p className="text-[15px] leading-[15px] ">Manage positions on </p>
                                </div>
                                <Slider_2/>
                            </div>
                            <div className="relative pt-[71px] 2xl:px-[25px] min-[350px]:px-[10px] pb-[160px]">
                                <img className="absolute mx-auto right-0 left-0" src="/main_page/trade_line.svg" alt="" />
                                <img className="absolute top-[85px] mx-auto right-0 left-0 z-[-1]" src="/main_page/trade_bg.png" alt="" />
                                <div className="flex justify-between px-[25px] mb-[165px]">
                                    <h3 className="text-[130px] leading-[121px] pt-[70px]">Trade anywhere</h3>
                                    <p className="pt-[21px] text-[18px] leading-[18px] font-light text-[#8F889A]">All functionality is always at hand.</p>
                                </div>
                                <p className="text-[40px] leading-[48px] w-[470px] mb-[118px]">The service is fully adapted to work through a browser on your smartphone or tablet</p>
                                <Button text='Create an account'/>
                            </div>
                        </section>
                        <section className="relative py-[60px] 2xl:px-[25px] min-[350px]:px-[10px]">
                            <img className="absolute top-[60px] mx-auto right-0 left-0" src="/main_page/security_line.svg" alt="" />
                            <div className="flex justify-between px-[25px] pt-[20px]">
                                <h3 className="text-[90px] leading-[93px] font-medium w-[600px]">high security platform</h3>
                                <p className="text-[#8F889A] text-[15px] leading-[15px] ">API, 2FA and Technology</p>
                            </div>
                            <div className="flex 2xl:flex-row md:flex-col">
                                <img className="md:scale-[0.8]" src="/main_page/high_security_bg.png" alt="" />
                                <ul className="2xl:grid 2xl:grid-cols-2 2xl:grid-rows-2 2xl:grid-flow-row md:flex md:mx-auto gap-x-[41px]">
                                    <li className="border-[#402E5C] border-[1px] py-[40px] px-[40px] rounded-[40px] w-[304px] h-[412px]">
                                        <h4 className="text-[34px] leading-[32px] font-medium mb-[30px]">API Keys</h4>
                                        <img className="mb-[90px]" src="/main_page/api.svg" alt="" />
                                        <p className="w-[236px] text-[#E9E3F4] leading-[22px] tracking-[-4%]">Trading takes place through API keys of exchanges
                                        with the inability to withdraw funds.</p>
                                    </li>
                                    <li className="border-[#402E5C] border-[1px] py-[40px] px-[40px] rounded-[40px] w-[304px] h-[412px]">
                                        <h4 className="text-[34px] leading-[32px] font-medium mb-[30px]">Server</h4>
                                        <img className="mb-[90px]" src="/main_page/server.svg" alt="" />
                                        <p className="w-[206px] text-[#E9E3F4] leading-[22px] tracking-[-4%]">User data is encrypted
                                        and stored on an isolated server.</p>
                                    </li>
                                    <li className="border-[#402E5C] border-[1px] py-[40px] px-[40px] rounded-[40px] w-[304px] h-[412px]">
                                        <h4 className="text-[34px] leading-[32px] font-medium mb-[30px]">2FA</h4>
                                        <img className="mb-[60px]" src="/main_page/2fa.svg" alt="" />
                                        <p className="w-[216px] text-[#E9E3F4] leading-[22px] tracking-[-4%]">Checking new devices and IP addresses, as well  two-factor authentication
                                        allow you to securely protect your account from unauthorized access.</p>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section className="relative 2xl:px-[21px] min-[350px]:px-[10px] bg-gradient-to-tr from-[#340E73] to-[#7061AA] rounded-[40px] pt-[31px] flex flex-col">
                            <img className="mx-auto right-0 left-0 absolute" src="/main_page/partners_line.svg" alt="" />
                            <div className="flex justify-between mb-[140px] px-[25px] md:flex-col">
                                <h3 className="text-[90px] leading-[93px] font-medium mt-[20px]">our partners</h3>
                                <p className="2xl:text-[40px] 2xl:leading-[40px] md:text-[30px] md:leading-[30px] w-[660px] mt-[40px] text-[#ffffff9f] mr-[90px] md:w-[639px]">
                                    <span className="text-white">The Capico platform is the official broker</span> of the leading cryptocurrency exchanges
                                </p>
                            </div>
                            <ul className="flex md:grid md:grid-cols-2 gap-x-[30px] mx-auto mb-[100px]">
                                <li className="group">
                                    <div className="2xl:w-[304px] 2xl:h-[185px] md:w-[370px] md:h-[130px] flex items-center justify-center border-[1px] border-[#B496EE] rounded-[40px] group-hover:border-white mb-[15px] transition-colors">
                                        <img src="/main_page/binance_2.svg" alt="" />
                                    </div>
                                    <p className="text-[#AA87E2] group-hover:text-white transition-colors 2xl:block md:hidden ">benance</p>
                                </li>
                                <li className="group">
                                    <div className="2xl:w-[304px] 2xl:h-[185px] md:w-[370px] md:h-[130px] flex items-center justify-center border-[1px] border-[#B496EE] rounded-[40px] group-hover:border-white mb-[15px] transition-colors">
                                        <img src="/main_page/ftx_2.svg" alt="" />
                                    </div>
                                    <p className="text-[#AA87E2] group-hover:text-white transition-colors 2xl:block md:hidden ">fedex</p>
                                </li>
                                <li className="group">
                                    <div className="2xl:w-[304px] 2xl:h-[185px] md:w-[370px] md:h-[130px] flex items-center justify-center border-[1px] border-[#B496EE] rounded-[40px] group-hover:border-white mb-[15px] transition-colors">
                                        <img src="/main_page/huobi.svg" alt="" />
                                    </div>
                                    <p className="text-[#AA87E2] group-hover:text-white transition-colors 2xl:block md:hidden ">huobi</p>
                                </li>
                                <li className="group">
                                    <div className="2xl:w-[304px] 2xl:h-[185px] md:w-[370px] md:h-[130px] flex items-center justify-center border-[1px] border-[#B496EE] rounded-[40px] group-hover:border-white mb-[15px] transition-colors">
                                        <img src="/main_page/okx_2.svg" alt="" />
                                    </div>
                                    <p className="text-[#AA87E2] group-hover:text-white transition-colors 2xl:block md:hidden ">okx</p>
                                </li>
                            </ul>
                        </section>
                        <section className="flex flex-col items-center pt-[163px] pb-[102px] relative">
                            <img className="absolute 2xl:top-0 right-0 left-0 mx-auto z-[-1] md:scale-150 md:bottom-0" src="/main_page/main_bottom_bg.png" alt="" />
                            <h2 className="2xl:text-[100px] 2xl:leading-[93px] md:text-[81px] md:leading-[75px] 2xl:w-[958px] md:w-[771px] text-center mb-[286px]">Try Capico for free per month</h2>
                            <Button text='Create an account'/>
                        </section>
                    </div>
                </main>
                <Footer sign={sign} />
            </div>
        </>
    )
}