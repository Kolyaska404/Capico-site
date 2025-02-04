export function Footer( {sign} ) {
    return (
        <footer className={`${sign ? 'hidden' : ''} relative z-[1]`}>
            <div className="cnt px-[53px] rounded-t-[40px] bg-[#171022] pt-[36px] pb-[70px]">
                <ul className="2xl:flex md:grid md:grid-rows-2 md:grid-cols-2">
                    <li className="mr-[155px]">
                        <img className="mb-[159px]" src="/main_page/logo.svg" alt="" />
                        <p className="text-[#8F889A] text-[17px] leading-[17px]">© 2022 Capico ltd.</p>
                    </li>
                    <li className="mr-[109px]">
                        <p className="mb-[30px] w-[134px] text-[#8F889A] text-[17px] leading-[17px]">We are in social networks</p>
                        <ul className="flex gap-x-[9px] mb-[70px]">
                            <li><a href=""><img src="/main_page/facebook_purp.svg" alt="" /></a></li>
                            <li><a href=""><img src="/main_page/facebook_wh.svg" alt="" /></a></li>
                            <li><a href=""><img src="/main_page/Youtube.svg" alt="" /></a></li>
                            <li className="flex flex-col items-center gap-y-[7px]"><a href=""><img src="/main_page/tg_white.svg" alt="" /> <span className="text-[10px] leading-[10px]">Chat</span></a></li>
                            <li className="flex flex-col items-center gap-y-[7px]"><a href=""><img src="/main_page/tg-purple.svg" alt="" /> <span className="text-[10px] leading-[10px] text-[#8950E7]">Channel</span></a></li>
                            <li><a href=""><img src="/main_page/Twitter.svg" alt="" /></a></li>
                        </ul>
                        <p>info@capico.app </p>
                    </li>
                    <li className="mr-[87px]">
                        <h4 className="mb-[25px] text-[25px]">Documents</h4>
                        <ul className="flex flex-col gap-y-[15px] text-[13px] leading-[13px] text-[#8F889A]">
                            <li><a href="">Terms of use</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Referral Agreement</a></li>
                        </ul>
                    </li>
                    <li className="mr-[116px]">
                        <h4 className="mb-[25px] text-[25px]">Platform</h4>
                        <ul className="flex flex-col gap-y-[15px] text-[13px] leading-[13px] text-[#8F889A]">
                            <li><a href="">Functions</a></li>
                            <li><a href="">Tariffs</a></li>
                            <li><a href="">Partners</a></li>
                            <li><a href="">Academy</a></li>
                            <li><a href="">Knowledge base</a></li>
                            <li><a href="">Popular questions</a></li>
                            <li><p href="">Jobs</p></li>
                        </ul>
                    </li>
                    <li className="flex flex-col gap-y-[30px] text-[23px] leading-[23px]">
                        <a href="">Sign in</a>
                        <a href="">Create an account</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}