import React from "react";
import {IMainParameterProps} from "@/interfaces/MainParameter.ts";
import {getPrice} from "@/utils/price.ts";

const MainParameter: React.FC<IMainParameterProps> = ({parameter, active, onClick}: IMainParameterProps) => {
    const activeDetailsClasses = 'text-blue'
    const activeIconClasses = 'bg-blue'
    return (
        <>
            <div className={`group cursor-pointer w-full flex flex-col justify-center align-middle relative before:absolute before:content-[''] before:w-full before:h-[3px] before:bg-lightBlue before:-z-10 before:top-[10px]`} onClick={onClick}>
                <div className={`${active ? activeIconClasses : 'bg-lightBlue'} rounded-full m-auto flex justify-center align-middle w-[24px] h-[24px] mb-1`}>
                    <svg className={`fill-white h-auto align-middle max-w-[20px]`} width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <use xlinkHref={`#iconAccept`}></use>
                    </svg>
                </div>
                {parameter.tooltip &&
                    <span className={`invisible transition-all opacity-0 w-full bg-blue text-white text-center rounded-[6px] absolute z-10 top-[60px] leading-[15px] p-[10px] text-[12px] box-border group-hover:opacity-100 group-hover:visible md:hidden`} dangerouslySetInnerHTML={{__html: parameter.tooltip}}></span>
                }
                <span dangerouslySetInnerHTML={{__html: parameter.details}} className={`${active ? activeDetailsClasses : 'text-black'} text-center leading-[22px] font-bold text-[18px] md:text-[14px] md:mt-[12px] md:leading-[16px]`}></span>
                {!parameter.skip &&
                    <span className={`text-center font-normal text-[12px] text-black`}>{getPrice(parameter.price)}</span>
                }
            </div>
        </>
    )
}

export default MainParameter