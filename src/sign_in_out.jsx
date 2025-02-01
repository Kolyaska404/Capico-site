import { useState } from "react"
import '/src/App.css'
export function Sign_in_out() {
    const [dropdown, setDropdown] = useState(false)
    const [show, setShow] = useState(false)
    const [sign_out, setSign_out] = useState(false)
    return (
        <>
            <div className="w-full flex flex-col min-h-full mx-auto relative overflow-hidden">
                <header className="pt-[25px]">
                    <div className="cnt min-[350px]:max-w-[765px] md:max-w-[1535px] relative md:px-[] min-[350px]:px-[15px] px-[27px]">
                        <nav className="flex gap-x-[156px]">
                            <img src="/main_page/logo.svg" alt="" />
                            <button onClick={() => setDropdown(!dropdown)} className={`transition-colors flex items-center 2xl:flex md:flex min-[350px]:hidden gap-x-4 text-[25px] ${dropdown ? 'text-[#904BFF]' : 'text-white'}`} >en {dropdown ? <img src="/main_page/dropdown_active.svg" alt="" /> : <img src="/main_page/dropdown_static.svg" alt="" /> }</button>
                            <ul className={`z-[2] min-[350px]:hidden bg-[#5F29B7] rounded-[20px] 2xl:flex flex-col py-[15px] pl-[15px] pr-[15px] text-[25px] leading-[30px] font-light transition-opacity absolute top-[61px] left-[390px] ${dropdown ? 'opacity-100' : 'opacity-0'}`}>
                                <li className="hover:bg-[#7641CD] transition-colors w-full rounded-[5px] pl-[12px] pr-[40px] pb-[5px]"><a href="">en</a></li>
                                <li className="hover:bg-[#7641CD] transition-colors w-full rounded-[5px] pl-[12px] pr-[40px] pb-[5px]"><a href="">ru</a></li>
                                <li className="hover:bg-[#7641CD] transition-colors w-full rounded-[5px] pl-[12px] pr-[40px] pb-[5px]"><a href="">es</a></li>
                                <li className="hover:bg-[#7641CD] transition-colors w-full rounded-[5px] pl-[12px] pr-[40px] pb-[5px]"><a href="">cz</a></li>
                            </ul>
                        </nav>
                    </div>
                    <video className="outline-none absolute z-[-1] 2xl:top-[100px] 2xl:mx-auto 2xl:left-0 2xl:right-0 md:w-[1000px] md:left-[-100px] md:scale-[2.5] min-[350px]:left-[-350px] min-[350px]:scale-[3] min-[350px]:top-[-340px] w-screen 2xl:h-[1000px]" autoPlay muted loop>
                        <source className="" src="/main_page/header_video.mp4" type="video/mp4"/>
                    </video>
                </header>
                <main className="pb-[20px]">
                    <div className="cnt min-[350px]:max-w-[765px] md:max-w-[1535px] relative md:px-[] min-[350px]:px-[15px] px-[27px] flex gap-x-[30px]">
                        <section className={`flex gap-x-[100px] items-center ${sign_out ? 'opacity-0 z-[0] translate-x-[-500px]' : 'opacity-100 z-[1]'} transition-all relative z-[1]`}>
                            <h1 className="2xl:text-[91px] 2xl:leading-[86px] 2xl:w-[678px] font-medium bg-clip-text bg-gradient-to-b from-white to-[#8441F1] text-transparent">Crypto trading with bots and smart seals</h1>
                            <form className="bg-black flex flex-col py-[50px] px-[70px] rounded-[40px] w-[739px]">
                                <h2 className="mb-[72px] 2xl:text-[82px] 2xl:leading-[78px] font-medium">Sign in</h2>
                                <label htmlFor="" className="mb-[11px] text-[#8C74B4]">Login or email</label>
                                <input className="outline-none border-b-[1px] border-[#904BFF] mb-[50px] 2xl:text-[29px] 2xl:leading-[28px] pb-[20px] bg-transparent h-[43px]" type="text" placeholder="elonmask@" />
                                <div className="border-b-[1px] border-[#904BFF] mb-[22px] flex justify-between">
                                    <input className="outline-none 2xl:text-[29px] 2xl:leading-[28px] pb-[20px] bg-transparent h-[43px]" type={show ? 'text' : 'password'} placeholder="Password"/>
                                    <button type="button" onClick={() => setShow(!show)}><img src="/sign_in_out/Hide.svg" alt="" /></button>
                                </div>
                                <a href="#" className="mb-[55px] text-[#8A4BF0] text-right">Forget password?</a>
                                <button className="bg-[#904BFF] flex gap-x-[40px] mb-[198px] items-center justify-center py-[15px] rounded-[40px] 2xl:text-[28px] 2xl:leading-[28px]" type="submit">Sign in <img src="/main_page/sign_in_arrow.svg" alt="" /></button>
                                <p className="mb-[30px] text-[#7A6E8C] 2xl:text-[25px] 2xl:leading-[24px]">Still not have account?</p>
                                <button type="button" onClick={() => setSign_out(true)} className="flex gap-x-[20px] border-[1px] border-[#904BFF] items-center justify-center py-[15px] rounded-[40px] 2xl:text-[28px] 2xl:leading-[28px]">Create an account<img src="/main_page/sign_in_arrow.svg" alt="" /></button>
                            </form>
                        </section>
                        <section className={`flex gap-x-[100px] items-center ${sign_out ? 'opacity-100 z-[1]' : 'opacity-0 z-[0] translate-x-[500px]'} transition-all absolute left-0 right-0 mx-auto top-0`}>
                            <form className="bg-black flex flex-col py-[50px] px-[70px] rounded-[40px] w-[739px]">
                                <h2 className="mb-[72px] 2xl:text-[82px] 2xl:leading-[78px] font-medium">Sign out</h2>
                                <label htmlFor="" className="mb-[11px] text-[#8C74B4]">Login</label>
                                <input className="outline-none border-b-[1px] border-[#904BFF] mb-[50px] 2xl:text-[29px] 2xl:leading-[28px] pb-[20px] bg-transparent h-[43px]" type="text" placeholder="elonmask@" />
                                <div className="flex gap-x-[30px]">
                                    <div className="w-[278px] flex flex-col gap-y-[15px]">
                                        <label htmlFor="" className="text-[#8C74B4]">Phone number</label>
                                        <input className="w-[279px] outline-none border-b-[1px] border-[#904BFF] mb-[50px] 2xl:text-[29px] 2xl:leading-[28px] pb-[20px] bg-transparent h-[43px]" type="number" placeholder="Kolledge" />
                                    </div>
                                    <div className="w-[278px] flex flex-col gap-y-[15px]">
                                        <label htmlFor="" className="text-[#8C74B4]">Email</label>
                                        <input className="w-[289px] outline-none border-b-[1px] border-[#904BFF] mb-[50px] 2xl:text-[29px] 2xl:leading-[28px] pb-[20px] bg-transparent h-[43px]" type="email" placeholder="elonmask@" />
                                    </div>
                                </div>
                                <div className="border-b-[1px] border-[#904BFF] mb-[22px] flex justify-between">
                                    <input className="outline-none 2xl:text-[29px] 2xl:leading-[28px] pb-[20px] bg-transparent h-[43px]" type={show ? 'text' : 'password'} placeholder="Password"/>
                                    <button type="button" onClick={() => setShow(!show)}><img src="/sign_in_out/Hide.svg" alt="" /></button>
                                </div>
                                <button className="bg-[#904BFF] flex gap-x-[40px] mb-[145px] items-center justify-center py-[15px] rounded-[40px] 2xl:text-[28px] 2xl:leading-[28px]" type="submit">Create an account<img src="/main_page/sign_in_arrow.svg" alt="" /></button>
                                <p className="mb-[30px] text-[#7A6E8C] 2xl:text-[25px] 2xl:leading-[24px]">Already have account?</p>
                                <button type="button" onClick={() => setSign_out(false)} className="flex gap-x-[20px] border-[1px] border-[#904BFF] items-center justify-center py-[15px] rounded-[40px] 2xl:text-[28px] 2xl:leading-[28px]">Sign in<img src="/main_page/sign_in_arrow.svg" alt="" /></button>
                            </form>
                            <h1 className="2xl:text-[91px] 2xl:leading-[86px] 2xl:w-[678px] font-medium bg-clip-text bg-gradient-to-b from-white to-[#8441F1] text-transparent">Crypto trading with bots and smart seals</h1>
                        </section>
                    </div>
                    <img className="absolute right-0 bottom-0 z-[-1]" src="/sign_in_out/desktop_bg.png" alt="" />
                </main>
            </div>
        </>
    )
}