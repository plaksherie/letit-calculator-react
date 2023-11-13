import React from "react";
import {ITitleFieldProps} from "@/interfaces/Title.ts";


const TitleForm: React.FC<ITitleFieldProps> = ({children, required}: ITitleFieldProps) => {
    return (
        <>
            <div className="flex gap-[5px]">
                <span className={`font-bold text-[14px]`}>{children}</span>
                {required &&
                    <span className={`text-red`}>*</span>
                }
            </div>
        </>
    )
}

export default TitleForm