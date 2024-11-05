import Image from "next/image";
import image from '../public/images/rs-group-wrap ⏵ rs-group@2x.png'; // Updated filename if necessary

import logo from '../public/images/MANZZARI.png'
export default function Hero() {
    return (
        <>
            <div >
                <div className="bg-[#A29875] w-[1741.06px]
                h-[135.01px] absolute left-[-127.27px] top-0 flex ">
                   
                    <Image className="h-[94] w-[439px] absolute left-[calc(50% - 439px/2 - 704.5px)] top-[20px] ml-[150px] " src={logo} alt='logo' />
                </div>







                <div className="flex h-[573.59px] w-[1271.01px]  absolute left-[107.49px] top-[252.83px]">
                    <div className="">
                        <h1 className="font-[Libre Bodoni] font-[700] text-[37.838px] tracking-[0.025em]">
                            IMPECCABLE <br /> CRAFTSMANSHIP AND <br /> FINESSE
                        </h1>
                        <p className="font-[Libre Bodoni] font-[500] text-[29.2384px] tracking-[0.025em] text-[#787054] mt-[10px]
                    ">
                            An example of intricate workmanship and detail, elegant <br />
                            necklaces and long and short chains form a part of our <br />
                            desirable collection.
                        </p>
                        <button className="w-[247.67px] h-[49.2px] bg-[#A29875] bottom-3 p-[8.59954px] gap-[8.6px] mt-[18px] rounded-[10px]">
                            EXPLORE NOW
                        </button>
                    </div>
                    <div >
                        <Image className="border-[0.859954px] border-solid border-[#FFFFFF] rounded-[128.993px 0px ] w-[421.38px] h-[573.59px]" src={image} alt="img" />
                    </div>
                </div>
            </div>
        </>
    );
}
