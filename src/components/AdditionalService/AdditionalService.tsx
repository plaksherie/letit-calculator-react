import React from "react";
import {IAdditionalServiceProps} from "@/interfaces/AdditionalService.ts";
import {getPrice} from "@/utils/price.ts";


const AdditionalService: React.FC<IAdditionalServiceProps> = ({service, onClick}: IAdditionalServiceProps) => {
    return <>
        <div
            onClick={() => onClick()}
            className="flex items-center cursor-pointer gap-[10px]">
            <div className="flex items-center justify-center flex-custom w-[35px]">
                <div className={`calculator-checkbox ${service.selected && 'checked'}`}></div>
                {/*<input type="checkbox" className={`w-[16px] h-[16px] cursor-pointer`} checked={service.selected} readOnly={true}/>*/}
            </div>
            <div className="text-[14px] leading-relaxed font-normal">{service.title}</div>
            <div className="font-bold flex-custom leading-relaxed text-[18px] ml-auto">{getPrice(service.price)}</div>
        </div>
    </>
}

export default AdditionalService