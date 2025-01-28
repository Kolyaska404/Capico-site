import { useState } from "react"
export function Slider_1() {
    const [activeID, setActiveID] = useState(0)
    const list = [
        {
            id: 1,
            title: 'Speed',
            img: '/main_page/speed.svg',
            p: 'Your assets on all connected exchanges are collected in one place'
        },
        {
            id: 2,
            title: 'Hotkeys',
            img: '/main_page/hotkeys.svg',
            p: 'Use hot keys to work faster'
        },
        {
            id: 3,
            title: 'Notifications',
            img: '/main_page/notification.svg',
            p: 'Get all the importantemail messages and Telegram'
        },
        {
            id: 4,
            title: 'Demo Account',
            img: '/main_page/demo.svg',
            p: 'Train. Learn. Test any features. Free and without risks'
        },
        {
            id: 5,
            title: 'Cloud Service',
            img: '/main_page/cloud.svg',
            p: 'Updates are usually invisible. No break from trade.'
        },
        {
            id: 6,
            title: 'Dark theme',
            img: '/main_page/dark_theme.svg',
            p: 'Trade anytime. Even at night.'
        },
    ]
    const prev = () => {
        setActiveID(activeID => {
            return activeID - 1
        })
    }
    const next = () => {
        setActiveID(activeID => {
            return activeID + 1
        })
    }
    return (
        <>
            <nav className="flex gap-x-[22px] absolute right-0 z-10">
                <button onClick={prev} className="border-white border-[1px] rounded-[70px] w-[94px] h-[94px] flex items-center justify-center hover:border-[#7952FF] transition-colors"><img src="/main_page/arrow_left.svg" alt="" /></button>
                <button onClick={next} className="border-white border-[1px] rounded-[70px] w-[195px] h-[94px] flex items-center justify-center hover:border-[#7952FF] transition-colors"><img src="/main_page/arrow_right.svg" alt="" /></button>
            </nav>
            <ul className={`flex gap-x-[60px] ml-[165px] pt-[115px] mb-[53px] transition-transform ease-in ${activeID > 0 ? 'translate-x-[-990px]' : 'translate-x-0'}`}>
                {list.map((slides, idx) => (
                    <li className="border-[1px] border-[#402E5C] rounded-[40px] w-[343px] h-[455px] p-10">
                        <h3 className="text-[34px] leading-[32px] mb-[20px]">{slides.title}</h3>
                        <img className="mb-[131px]" src={slides.img} alt="" />
                        <p className="w-[259px]">{slides.p}</p>
                    </li>
                ))}
            </ul>
            <div className="flex items-center mb-[141px] ml-[165px]">
                <div className={`w-[621px] h-[5px] transition-all  ${activeID > 0 ? 'bg-transparent' : 'bg-[#402E5C]'}`}></div>
                <div className={`w-[621px] h-[5px] transition-all  ${activeID > 0 ? 'bg-[#402E5C]' : 'bg-transparent'}`}></div>
            </div>
        </>
    )
}