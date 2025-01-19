import { useState } from "react"
import '/src/App.css'
export function Main_page() {
    const [dropdown, setDropdown] = useState(false)
    return (
        <>
            <div className="w-full flex flex-col min-h-full mx-auto relative">
                <header>
                    <div className="cnt tablet:w-[834px] relative px-[27px] ">
                        <div className="flex justify-between items-center py-[15px]">
                            <img src="/main_page/logo.svg" alt="" />
                            <button onClick={() => setDropdown(!dropdown)} className={`transition-colors flex items-center gap-x-4 text-[25px] ${dropdown ? 'text-white' : 'text-[#904BFF]'}`} >en {dropdown ? <img src="/main_page/dropdown_static.svg" alt="" /> : <img src="/main_page/dropdown_active.svg" alt="" /> }</button>
                            <nav>
                                <ul className="hidden gap-x-9 text-[25px] font-medium tablet:flex min-[350px]:hidden">
                                    <li className="transition-colors hover:text-[#904BFF]"><a href="#">features</a></li>
                                    <li className="transition-colors hover:text-[#904BFF]"><a href="#">prices</a></li>
                                    <li className="transition-colors hover:text-[#904BFF]"><a href="#">partners</a></li>
                                    <li className="transition-colors hover:text-[#904BFF]"><a href="#">knowledge base</a></li>
                                    <li className="transition-colors hover:text-[#904BFF]"><a href="#">academy</a></li>
                                </ul>
                            </nav>
                            <button className="bg-[#904BFF] pl-9 py-[15px] font-medium pr-6 flex items-center gap-x-4 text-[25px] rounded-[42px]">sign in<img src="/main_page/sign_in_arrow.svg" alt="" /></button>
                            <button className="flex tablet:hidden"><img src="/main_page/menu.svg" alt="" /></button>
                        </div>
                        <div className="mt-[100px] mb-[145px]">
                            <h1 className="text-[102px] font-medium w-[765px] leading-[98px] mb-[30px] bg-clip-text bg-gradient-to-b from-white to-[#8441F1] text-transparent">Crypto trading with bots and smart seals</h1>
                            <button className="py-[15px] pl-[60px] pr-[22px] text-[28px] leading-[26px] font-semibold bg-[#904BFF] rounded-[50px] flex gap-x-[25px] items-center">Sign up now <img src="/main_page/header_btn_arrow.svg" alt="" /></button>
                        </div>
                        <div className="mb-[63px] z-[2]">
                            <p className="mb-[27px] text-[30px] leading-[34px] w-[397px] font-semibold">Trade for free on your favorite exchanges</p>
                            <ul className="flex gap-x-[13px]">
                                <li className="bg-[#0E0915] w-[236px] h-[100px] flex items-center justify-center rounded-[30px] exchange transition-shadow relative"><img src="/main_page/binance_1.svg" alt="" /></li>
                                <li className="bg-[#0E0915] w-[236px] h-[100px] flex items-center justify-center rounded-[30px] exchange transition-shadow relative"><img src="/main_page/ftx.svg" alt="" /></li>
                                <li className="bg-[#0E0915] w-[236px] h-[100px] flex items-center justify-center rounded-[30px] exchange transition-shadow relative"><img src="/main_page/huobi.svg" alt="" /></li>
                                <li className="bg-[#0E0915] w-[236px] h-[100px] flex items-center justify-center rounded-[30px] exchange transition-shadow relative"><img src="/main_page/exmo.svg" alt="" /></li>
                                <li className="bg-[#0E0915] w-[236px] h-[100px] flex items-center justify-center rounded-[30px] exchange transition-shadow relative"><img src="/main_page/okx.svg" alt="" /></li>
                                <li className="bg-[#0E0915] w-[236px] h-[100px] flex items-center justify-center rounded-[30px] exchange transition-shadow relative">
                                    <img src="/main_page/bybit.svg" alt="" />
                                    <div className="bg-[#6F42B8] p-[5px] rounded-[8px] text-[13px] leading-[14px] absolute top-[12px] right-[16px]">Soon</div>
                                </li>
                            </ul>
                        </div>
                        <div className="absolute bottom-1/2 right-[40px] rounded-full group transition-opacity p-[33px]">
                            <div className="bg-transparent transition-colors group-hover:bg-[#904BFF] delay-100 ease-in-out rounded-full border-[1px] border-[#904BFF] w-[83px] h-[83px] relative after:absolute after:border-[1px] after:border-[#8854DD] after:animate-ping after:w-[83px] after:h-[83px] after:rounded-full">
                                <img className="absolute bottom-[33px] right-0 left-0 mx-auto w-[15px] h-[55px]" src="/main_page/header_arrow_bottom.svg" alt="" />
                            </div>
                        </div>
                        <div className="w-[1000px] h-[300px] bg-[#904bff] absolute bottom-[-200px] rounded-l-2xl blur-[260px] right-[-60px] z-[1]"></div>
                        <div>
                            <video className="outline-none absolute z-[-1] top-[10px] right-0 w-screen h-[1130px]" autoPlay muted loop>
                                <source className="scale-150" src="/main_page/header_video.mp4" type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </header>
                <main className="z-[1] relative">
                    <div className="cnt">
                        <section className="flex flex-col items-center pt-[73px] rounded-t-[40px] bg-black px-[27px]">
                            <h2 className="text-[70px] leading-[80px] bg-clip-text bg-gradient-to-r from-white to-[#8441F1] text-transparent w-[1020px] font-[300] text-center ">Manage positions on
                            different exchanges from one window</h2>
                            <video src="" poster="/main_page/video_bg.png">
                                <source src=""/>
                            </video>
                        </section>
                        <section className="relative px-[40px] mb-[72px] pt-[5px]">
                            <img className="absolute top-0 mx-auto right-0 left-0" src="/main_page/numbers_line.svg" alt="" />
                            <div className="flex justify-between items-center mb-[72px]">
                                <h3 className="text-[60px] font-medium leading-[59px]">numbers</h3>
                                <p className="text-[15px] leading-[15px] text-[#6E647D]">Manage positions on </p>
                            </div>
                            <h2 className="text-[250px] leading-[232px] font-light mb-[31px]">$18.5 B+</h2>
                            <p className="text-[40px] leading-[41px] w-[280px]">Total trading volume</p>
                            <div className="flex items-center justify-between">
                                <p className="text-[15px] leading-[15px] w-[125px] text-[#6E647D]">Actual statistic on 19.07.2022</p>
                                <ul className="grid grid-cols-2 grid-rows-2 grid-flow-row gap-x-[30px] gap-y-[30px]">
                                    <li className="col-span-1 py-[42px] px-[30px] numbers_block flex flex-col justify-between">
                                        <h3 className="text-[80px] leading-[75px] font-light">36М+</h3>
                                        <p className="text-[20px] leading-[21px]">We are online</p>
                                    </li>
                                    <li className="col-span-1 py-[42px] px-[30px]"></li>
                                    <li className=" py-[42px] px-[30px] numbers_block flex flex-col justify-between">
                                        <h3 className="text-[80px] leading-[75px] font-light">21.5 K+</h3>
                                        <p className="text-[20px] leading-[21px] w-[110px]">Traiders in platform</p>
                                    </li>
                                    <li className=" py-[42px] px-[30px] flex flex-col justify-between bg-[url('/main_page/numbers_box_border_2.svg')]">
                                        <h3 className="text-[80px] leading-[75px] font-light">325 M+</h3>
                                        <p className="text-[20px] leading-[21px] w-[165px]">Total deals in platform</p>
                                    </li>
                                </ul>
                            </div>
                            <img className="absolute top-0 mx-auto right-0 left-0 z-[-1]" src="/main_page/numbers_bg.png" alt="" />
                        </section>
                        <section className="relative mt-[50px] px-[42px] pt-[22px] pb-[222px]">
                            <img className="absolute top-0 mx-auto right-0 left-0" src="/main_page/numbers_line.svg" alt="" />
                            <div className="flex justify-between items-center mb-[72px]">
                                <h3 className="text-[60px] font-medium leading-[59px]">benefits</h3>
                                <p className="text-[15px] leading-[15px] text-[#6E647D]">Manage positions on </p>
                            </div>
                            <div className="flex items-center mb-[300px]">
                                <img className="w-[900px]" src="/main_page/benefits_bg.png" alt="" />
                                <div className="relative">
                                    <h2 className="bg-clip-text bg-gradient-to-r from-white to-[#8441F1] text-transparent text-[130px] leading-[121px] font-light mb-[100px]">Interface Builder</h2>
                                    <div className="flex gap-x-[90px]">
                                        <p className="text-[40px] leading-[37px]">Customize 
                                        your look</p>
                                        <p className="text-[18px] leading-[19px] font-light text-[#B7B1C3]">Remove the excess, add what you need. Trade at your convenience.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center mb-[310px] justify-between">
                                <div className="relative pt-[40px]">
                                    <img className="absolute top-0" src="/main_page/portfolio_line.svg" alt="" />
                                    <h2 className="text-[130px] leading-[121px] font-light bg-clip-text bg-gradient-to-r from-white to-[#8441F1] text-transparent mb-[109px]">MultiChart</h2>
                                    <p className="w-[651px] text-[40px] leading-[43px] text-[#7B708D]"><span className="text-white">Add any trading pairs</span> from different exchanges and analyzecryptocurrency assets on one screen</p>
                                </div>
                                <img src="/main_page/multichart_bg.png" alt="" />
                            </div>
                            <div className="flex items-center justify-between">
                                <img src="/main_page/portfolio_bg.png" alt="" />
                                <div className="relative pt-[40px]">
                                    <img className="absolute top-0 right-[55px]" src="/main_page/multichart_line.svg" alt="" />
                                    <h2 className="w-[800px] text-[130px] leading-[121px] font-light bg-clip-text bg-gradient-to-r from-white to-[#8441F1] text-transparent mb-[136px]">Portfolio & Statistics</h2>
                                    <div className="flex">
                                        <p className="text-[40px] leading-[37px] w-[464px]">
                                            Your assets on all <br /> 
                                            connected <br />
                                            exchanges are <br /> 
                                            collected in one place
                                        </p>
                                        <p className="text-[18px] leading-[18px] font-light text-[#B7B1C3] w-[316px]">Visual statistics of trade.
                                        Uploading reports</p>
                                    </div>
                                </div>
                            </div>
                            <img src="/main_page/gra.png" className=" absolute bottom-[-1100px] z-[0] right-0 left-0 mx-auto rounded-full blur-[350px]"></img>
                        </section>
                        <section className="relative z-[1] bg-black rounded-t-[40px] pt-[44px]">
                            <div className="px-[25px]">
                                <img className="top-[44px] right-0 left-0 mx-auto absolute" src="/main_page/slider_line.svg" alt="" />
                                <h3 className="text-[90px] font-medium leading-[92px] pt-[15px] pl-[15px] w-[958px] bg-clip-text bg-gradient-to-r from-white to-[#8441F1] text-transparent">Everything for your comfortable work</h3>
                            </div>
                            <div className="bg-gradient-to-tr from-[#340E73] to-[#7061AA] rounded-[40px] px-[40px] pt-[50px] pb-[75px] text-white z-[1]">
                                <div className="flex justify-between">
                                    <h3 className="text-[70px] leading-[65px] font-semibold">features</h3>
                                    <p className="text-[15px] leading-[15px] ">Manage positions on </p>
                                </div>
                            </div>
                            <div className="relative pt-[71px] px-[25px] pb-[160px]">
                                <img className="absolute mx-auto right-0 left-0" src="/main_page/trade_line.svg" alt="" />
                                <img className="absolute top-[85px] mx-auto right-0 left-0 z-[-1]" src="/main_page/trade_bg.png" alt="" />
                                <div className="flex justify-between px-[25px] mb-[165px]">
                                    <h3 className="text-[130px] leading-[121px] pt-[70px]">Trade anywhere</h3>
                                    <p className="pt-[21px] text-[18px] leading-[18px] font-light text-[#8F889A]">All functionality is always at hand.</p>
                                </div>
                                <p className="text-[40px] leading-[48px] w-[470px] mb-[118px]">The service is fully adapted to work through a browser on your smartphone or tablet</p>
                                <button className="mx-auto text-[45px] leading-[42px] font-semibold bg-[#904BFF] flex items-center py-[21px] pr-[21px] pl-[110px] rounded-[70px] gap-x-[74px]">Create an account<img src="/main_page/nhover_trade.svg" alt="" /></button>
                            </div>
                        </section>
                        <section className="relative py-[60px] px-[25px]">
                            <img className="absolute top-[60px] mx-auto right-0 left-0" src="/main_page/security_line.svg" alt="" />
                            <div className="flex justify-between px-[25px] pt-[20px]">
                                <h3 className="text-[90px] leading-[93px] font-medium w-[600px]">high security platform</h3>
                                <p className="text-[#8F889A] text-[15px] leading-[15px] ">API, 2FA and Technology</p>
                            </div>
                            <div className="flex ">
                                <img src="/main_page/high_security_bg.png" alt="" />
                                <ul className="grid grid-cols-2 grid-rows-2 grid-flow-row gap-x-[41px]">
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
                        <section className="relative px-[21px] bg-gradient-to-tr from-[#340E73] to-[#7061AA] rounded-[40px] pt-[31px] flex flex-col">
                            <img className="mx-auto right-0 left-0 absolute" src="/main_page/partners_line.svg" alt="" />
                            <div className="flex justify-between mb-[140px] px-[25px]">
                                <h3 className="text-[90px] leading-[93px] font-medium mt-[20px]">our partners</h3>
                                <p className="text-[40px] leading-[40px] w-[660px] mt-[40px] text-[#ffffff9f] mr-[90px]">
                                    <span className="text-white">The Capico platform is the official broker</span> of the leading cryptocurrency exchanges
                                </p>
                            </div>
                            <ul className="flex gap-x-[30px] mx-auto mb-[100px]">
                                <li className="group">
                                    <div className="w-[304px] h-[185px] flex items-center justify-center border-[1px] border-[#B496EE] rounded-[40px] group-hover:border-white mb-[15px] transition-colors">
                                        <img src="/main_page/binance_2.svg" alt="" />
                                    </div>
                                    <p className="text-[#AA87E2] group-hover:text-white transition-colors">benance</p>
                                </li>
                                <li className="group">
                                    <div className="w-[304px] h-[185px] flex items-center justify-center border-[1px] border-[#B496EE] rounded-[40px] group-hover:border-white mb-[15px] transition-colors">
                                        <img src="/main_page/ftx_2.svg" alt="" />
                                    </div>
                                    <p className="text-[#AA87E2] group-hover:text-white transition-colors">fedex</p>
                                </li>
                                <li className="group">
                                    <div className="w-[304px] h-[185px] flex items-center justify-center border-[1px] border-[#B496EE] rounded-[40px] group-hover:border-white mb-[15px] transition-colors">
                                        <img src="/main_page/huobi.svg" alt="" />
                                    </div>
                                    <p className="text-[#AA87E2] group-hover:text-white transition-colors">huobi</p>
                                </li>
                                <li className="group">
                                    <div className="w-[304px] h-[185px] flex items-center justify-center border-[1px] border-[#B496EE] rounded-[40px] group-hover:border-white mb-[15px] transition-colors">
                                        <img src="/main_page/okx_2.svg" alt="" />
                                    </div>
                                    <p className="text-[#AA87E2] group-hover:text-white transition-colors">okx</p>
                                </li>
                            </ul>
                        </section>
                        <section className="flex flex-col items-center pt-[163px] pb-[102px] relative">
                            <img className="absolute top-0 right-0 left-0 mx-auto z-[-1]" src="/main_page/main_bottom_bg.png" alt="" />
                            <h2 className="text-[100px] leading-[93px] w-[958px] text-center mb-[286px]">Try Capico for free per month</h2>
                            <button className="mx-auto text-[45px] leading-[42px] font-semibold bg-[#904BFF] flex items-center py-[21px] pr-[21px] pl-[110px] rounded-[70px] gap-x-[74px]">Create an account<img src="/main_page/nhover_trade.svg" alt="" /></button>
                        </section>
                    </div>
                </main>
                <footer className="relative z-[1]">
                    <div className="cnt px-[53px] rounded-t-[40px] bg-[#171022] pt-[36px] pb-[70px]">
                        <ul className="flex">
                            <li className="mr-[155px]">
                                <img className="mb-[159px]" src="/main_page/logo.svg" alt="" />
                                <p className="text-[#8F889A] text-[17px] leading-[17px]">© 2022 Capico ltd.</p>
                            </li>
                            <li className="mr-[109px]">
                                <p className="mb-[30px] w-[134px] text-[#8F889A] text-[17px] leading-[17px]">We are in social networks</p>
                                <ul className="flex gap-x-[9px] mb-[70px]">
                                    <li><img src="/main_page/facebook_purp.svg" alt="" /></li>
                                    <li><img src="/main_page/facebook_wh.svg" alt="" /></li>
                                    <li><img src="/main_page/Youtube.svg" alt="" /></li>
                                    <li className="flex flex-col items-center gap-y-[7px]"><img src="/main_page/tg_white.svg" alt="" /> <span className="text-[10px] leading-[10px]">Chat</span></li>
                                    <li className="flex flex-col items-center gap-y-[7px]"><img src="/main_page/tg-purple.svg" alt="" /> <span className="text-[10px] leading-[10px] text-[#8950E7]">Channel</span></li>
                                    <li><img src="/main_page/Twitter.svg" alt="" /></li>
                                </ul>
                                <p>info@capico.app </p>
                            </li>
                            <li className="mr-[87px]">
                                <h4 className="mb-[25px] text-[25px]">Documents</h4>
                                <ul className="flex flex-col gap-y-[15px] text-[13px] leading-[13px] text-[#8F889A]">
                                    <li>Terms of use</li>
                                    <li>Privacy Policy</li>
                                    <li>Referral Agreement</li>
                                </ul>
                            </li>
                            <li className="mr-[116px]">
                                <h4 className="mb-[25px] text-[25px]">Platform</h4>
                                <ul className="flex flex-col gap-y-[15px] text-[13px] leading-[13px] text-[#8F889A]">
                                    <li>Functions</li>
                                    <li>Tariffs</li>
                                    <li>Partners</li>
                                    <li>Academy</li>
                                    <li>Knowledge base</li>
                                    <li>Popular questions</li>
                                    <li>Jobs</li>
                                </ul>
                            </li>
                            <li className="flex flex-col gap-y-[30px] text-[23px] leading-[23px]">
                                <a href="">Sign in</a>
                                <a href="">Create an account</a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </>
    )
}