import { useState } from "react"
import '/src/App.css'
export function Button({ text }) {
    const [hover, setHover] = useState(false)
    return (
        <button className="group mx-auto text-[45px] leading-[42px] font-semibold bg-[#904BFF] flex items-center py-[21px] pr-[21px] pl-[110px] rounded-[70px] gap-x-[74px]">
            {text}<div className="w-[124px] h-[105px] bg-[url('/main_page/nhover_trade.svg')] bg-no-repeat bg-center group-hover:bg-[url('/main_page/hover_trade.svg')] transition-all delay-50"></div>
        </button>
    )
}