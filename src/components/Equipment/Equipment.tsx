import React from "react";
import {IEquipmentProps} from "@/interfaces/Equipment.ts";
import {getPrice} from "@/utils/price.ts";


const Equipment: React.FC<IEquipmentProps> = ({data, onClick}: IEquipmentProps) => {

    const inputDefaultClasses = 'm-0 w-[16px] h-[16px] cursor-pointer md:w-[13px]'
    const activeItemClasses = 'border-blue'

    return (<>
        {data.products.map(product => (
            <label
                className={`cursor-pointer flex mb-[10px] p-[10px] border-[#e8e8e8] border-solid border-[1px] ${product.selected && activeItemClasses}`}
                onChange={() => onClick(product.id)}
                key={product.id}>
                <div className="w-[50px] flex-custom flex items-center md:w-[20px]">
                    {data.only_one &&
                        <input type="radio" name={data.title} className={`${inputDefaultClasses} `} checked={product.selected} readOnly={true}/>
                    }
                    {!data.only_one &&
                        <input type="checkbox" name={data.title} className={`${inputDefaultClasses}`} checked={product.selected} readOnly={true}/>
                    }
                </div>
                <div className="w-[70px] mr-[20px] flex-custom flex justify-center items-center">
                    <img src={`${product.image_url}`} alt=""
                         className={`align-middle max-h-[50px]`}/>
                </div>
                <div className="">
                    <div className="font-bold text-black text-[14px] leading-relaxed">{product.title}</div>
                    <div className="mb-[14px] text-black text-[14px] leading-relaxed"
                         dangerouslySetInnerHTML={{__html: product.description}}></div>
                    <div className="font-bold text-black text-[18px] leading-relaxed">{getPrice(product.price)}</div>
                </div>

            </label>
        ))
        }
    </>)
}

export default Equipment