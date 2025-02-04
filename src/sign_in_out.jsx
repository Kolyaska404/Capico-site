import { useState } from "react"
import '/src/App.css'
export function Sign_in_out( {setSign} ) {
    const [dropdown, setDropdown] = useState(false)
    const [show, setShow] = useState(false)
    const [sign_out, setSign_out] = useState(false)
    return (
        <>
            <div className="w-full flex flex-col min-h-full mx-auto overflow-hidden absolute top-0 z-10">
                <main className="pb-[20px] pt-[76px]">
                    <div className="cnt min-[350px]:max-w-[765px] md:max-w-[1535px] relative md:px-[] min-[350px]:px-[15px] px-[27px] flex gap-x-[30px]">
                        <section className={`flex gap-x-[100px] ${sign_out ? 'opacity-0 z-[0] translate-x-[-500px]' : 'opacity-100 z-[1]'} transition-all relative z-[1]`}>
                            <h1 className="2xl:pt-[100px] 2xl:text-[91px] 2xl:leading-[86px] 2xl:w-[678px] font-medium bg-clip-text bg-gradient-to-b from-white to-[#8441F1] text-transparent">Crypto trading with bots and smart seals</h1>
                            <form className="bg-black flex flex-col py-[50px] px-[70px] rounded-[40px] w-[739px] scale-95">
                                <div className="flex justify-between mb-[72px] items-center">
                                    <h2 className="2xl:text-[82px] 2xl:leading-[78px] font-medium">Sign in</h2>
                                    <button onClick={() => setSign(false)}><img src="/main_page/close.svg" alt="" /></button>
                                </div>
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
                        <section className={`flex gap-x-[100px] ${sign_out ? 'opacity-100 z-[1]' : 'opacity-0 z-[0] translate-x-[500px]'} transition-all absolute left-0 right-0 mx-auto top-0`}>
                            <form className="bg-black flex flex-col py-[50px] px-[70px] rounded-[40px] w-[739px]">
                                <div className="flex justify-between items-center mb-[72px]">
                                    <h2 className="2xl:text-[82px] 2xl:leading-[78px] font-medium">Sign out</h2>
                                    <button onClick={() => setSign(false)}><img src="/main_page/close.svg" alt="" /></button>
                                </div>
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
                            <h1 className="2xl:pt-[100px] 2xl:text-[91px] 2xl:leading-[86px] 2xl:w-[678px] font-medium bg-clip-text bg-gradient-to-b from-white to-[#8441F1] text-transparent">Crypto trading with bots and smart seals</h1>
                        </section>
                    </div>
                </main>
            </div>
        </>
    )
}