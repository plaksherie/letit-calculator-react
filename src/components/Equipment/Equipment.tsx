import React from "react";
import {IEquipmentProps} from "@/interfaces/Equipment.ts";
import {getPrice} from "@/utils/price.ts"
import styles from './Equipment.module.css'


const Equipment: React.FC<IEquipmentProps> = ({data, onClick, disabled}: IEquipmentProps) => {
    const activeItemClasses = 'border-blue'
    const disabledClasses = 'opacity-40'

    const handleClick = (productId: number) => {
        if (!disabled) {
            onClick(productId)
        }
    }

    return (<>
        {data.products.map(product => (
            <div
                className={`cursor-pointer flex items-center mb-[10px] p-[10px] border-[#e8e8e8] border-solid border-[1px] ${product.selected && activeItemClasses} ${disabled && disabledClasses}`}
                onClick={() => {
                    handleClick(product.id)
                }}
                key={product.id}
            >
                <div className="w-[50px] flex-custom flex items-center md:w-[20px]">
                    {data.only_one &&
                        <div className={`${styles.radio} ${product.selected && styles.checked}`}></div>
                    }
                    {!data.only_one &&
                        <div className={`calculator-checkbox ${product.selected && 'checked'}`}></div>
                    }
                </div>
                <div className="w-[70px] h-[50px] mr-[20px] flex-custom flex justify-center items-center">
                    <img src={`${product.image_url}`} alt=""
                         className={`w-full h-full object-contain`}/>
                </div>
                <div className="">
                    <div className="font-bold text-black text-[14px] leading-relaxed">{product.title}</div>
                    <div className="mb-[14px] text-black text-[14px] leading-relaxed"
                         dangerouslySetInnerHTML={{__html: product.description}}></div>
                    <div className="font-bold text-black text-[18px] leading-relaxed">{getPrice(product.price)}</div>
                </div>

            </div>
        ))
        }
    </>)
}

export default Equipment