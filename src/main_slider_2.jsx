import { useState } from "react";
import '/src/App.css'

export function Slider_2() {
    const [activeID, setActiveID] = useState(1)
    const list2 = [
        {
            id: 1,
            title: 'Stop Loss and Take Profit',
            img: '/main_page/feature_1.svg',
            p: 'Limit your risks and earn more by setting Stop Loss and multiple Take Profit for each trade at the same time.'
        },
        {
            id: 2,
            title: 'Trailing',
            img: '/main_page/feature_2.svg',
            p: 'Buy and sell assets at more favorable prices with various trailing options.'
        },
        {
            id: 3,
            title: 'Timeout and Candle Stop Loss',
            img: '/main_page/feature_3.svg',
            p: 'Exit from the position will take place only on expiration of the timer or on closing of the candle of the selected timeframe. Allows you to protect the trade from squeeze and gives flexibility to your trading strategy.'
        },
        {
            id: 4,
            title: 'Pending orders',
            img: '/main_page/feature_4.svg',
            p: 'You can create orders both above and below the current price. Funds on the balance sheet are blocked. Such orders are not “seen” by the exchange.'
        },
        {
            id: 5,
            title: 'Trading on the chart channel bot',
            img: '/main_page/feature_5.svg',
            p: 'Create and edit trades or bots visually and quickly. Right on the chart.'
        },
        {
            id: 6,
            title: 'Ladder and averaging',
            img: '/main_page/feature_7.svg',
            p: 'Create grids of orders to enter and exit a position. The system itself will calculate the average entry price and the final profit.'
        },
        {
            id: 7,
            title: 'Automatic breakeven',
            img: '/main_page/feature_8.svg',
            p: 'After the first takeout is executed, the platform will set Stop Loss to breakeven, protecting the position from unwanted drawdown.'
        },
        {
            id: 8,
            title: 'Booster',
            img: '/main_page/feature_8.svg',
            p: 'Trade on Binance Futures using just 2 buttons to enter a trade and manage your position. Instantly flip from long to short and back again.'
        },
        {
            id: 9,
            title: 'Panic Sell',
            img: '/main_page/feature_9.svg',
            p: 'Quickly close all active smart trades and exit positions at the current market price.'
        },
        {
            id: 10,
            title: 'Channel Bot',
            img: '/main_page/feature_6.svg',
            p: 'Get the maximum benefit from trading in a given price range. Auto-restart allows you to make an unlimited number of purchases and sales without trader participation.'
        },
    ]
    const Slide_down = () => {
        if (activeID !== list2.length) {
            setActiveID(activeID + 1)
        } 
        else if (activeID === list2.length){
            setActiveID(1)
        }
    }
    const Slide_top = () => {
        if (activeID !== 1) {
            setActiveID(activeID - 1)
        }
        else if (activeID === 1){
            setActiveID(list2.length)
        }
    }
    return (
        <>
            <div className="flex gap-x-[90px] text-[21px] leading-[36px] items-center justify-center relative">
                <ul className="text-[24px] leading-[36px]">
                    <li className={`${activeID == 1 ? 'text-white before:w-[35px] before:h-[3px] before:bg-white before:absolute before:left-[-44px] before:top-[14px] before:rounded-[10px]' : 'text-[#7E63B9]'} transition-colors font-semibold items-center flex relative`}>Stop Loss and Take Profit</li>
                    <li className={`${activeID == 2 ? 'text-white before:w-[35px] before:h-[3px] before:bg-white before:absolute before:left-[-44px] before:top-[14px] before:rounded-[10px]' : 'text-[#7E63B9]'} transition-colors font-semibold items-center flex relative`}>Trailing</li>
                    <li className={`${activeID == 3 ? 'text-white before:w-[35px] before:h-[3px] before:bg-white before:absolute before:left-[-44px] before:top-[14px] before:rounded-[10px]' : 'text-[#7E63B9]'} transition-colors font-semibold items-center flex relative`}>Timeout and Candle Stop Loss</li>
                    <li className={`${activeID == 4 ? 'text-white before:w-[35px] before:h-[3px] before:bg-white before:absolute before:left-[-44px] before:top-[14px] before:rounded-[10px]' : 'text-[#7E63B9]'} transition-colors font-semibold items-center flex relative`}>Pending orders</li>
                    <li className={`${activeID == 5 ? 'text-white before:w-[35px] before:h-[3px] before:bg-white before:absolute before:left-[-44px] before:top-[14px] before:rounded-[10px]' : 'text-[#7E63B9]'} transition-colors font-semibold items-center flex relative`}>Trading on the chart channel bot</li>
                    <li className={`${activeID == 6 ? 'text-white before:w-[35px] before:h-[3px] before:bg-white before:absolute before:left-[-44px] before:top-[14px] before:rounded-[10px]' : 'text-[#7E63B9]'} transition-colors font-semibold items-center flex relative`}>Ladder and averaging</li>
                    <li className={`${activeID == 7 ? 'text-white before:w-[35px] before:h-[3px] before:bg-white before:absolute before:left-[-44px] before:top-[14px] before:rounded-[10px]' : 'text-[#7E63B9]'} transition-colors font-semibold items-center flex relative`}>Automatic breakeven</li>
                    <li className={`${activeID == 8 ? 'text-white before:w-[35px] before:h-[3px] before:bg-white before:absolute before:left-[-44px] before:top-[14px] before:rounded-[10px]' : 'text-[#7E63B9]'} transition-colors font-semibold items-center flex relative`}>Booster</li>
                    <li className={`${activeID == 9 ? 'text-white before:w-[35px] before:h-[3px] before:bg-white before:absolute before:left-[-44px] before:top-[14px] before:rounded-[10px]' : 'text-[#7E63B9]'} transition-colors font-semibold items-center flex relative`}>Panic Sell</li>
                    <li className={`${activeID == 10 ? 'text-white before:w-[35px] before:h-[3px] before:bg-white before:absolute before:left-[-44px] before:top-[14px] before:rounded-[10px]' : 'text-[#7E63B9]'} transition-colors font-semibold items-center flex relative`}>Channel Bot</li>
                </ul>
                <ul className={`overflow-hidden h-[622px]`}>
                    {list2.map((slide) => (
                        <li key={slide.id} className={`relative p-[70px] border-[2px] border-white rounded-[38px] w-[622px] transition-all ${activeID == slide.id ? 'active_slide z-[10] ' : 'z-0 scale-95 opacity-50'}`}>
                            <h4 className="text-[45px] leading-[45px] max-w-[331px] mr-[137px] mb-[45px]">{slide.title}</h4>
                            <p className="w-[319px] mb-[45px] text-[15px] leading-[23px]">{slide.p}</p>
                            <button className="text-[15px] leading-[18px] py-[19px] px-[24px] flex items-center gap-x-[18px] border-[#B496EE border-[1px] rounded-[45px] hover:bg-[#B496EE] transition-colors">Learn more <img className="w-[36px] h-[13px]" src="public/main_page/arrow_right.svg" alt="" /></button>
                            <img className="absolute top-[70px] right-[70px]" src={slide.img} alt="" />
                        </li>
                    ))}
                </ul>
            </div>
            <div className="absolute right-[128px] flex flex-col gap-y-4 top-[300px]">
                <button onClick={Slide_top} className="py-[44px] px-[25px] border-[1px] rounded-[55px] hover:bg-[#B496EE] transition-colors"><img src="/main_page/arrow_up.svg" alt="" /></button>
                <button onClick={Slide_down} className="py-[44px] px-[25px] border-[1px] rounded-[55px] hover:bg-[#B496EE] transition-colors"><img src="/main_page/arrow_down.svg" alt="" /></button>
            </div>
        </>
    )
}