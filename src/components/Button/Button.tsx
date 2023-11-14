import { ButtonType, IButtonProps } from "@/interfaces/Button"
import React from "react"

const Button: React.FC<IButtonProps> = ({ text, onClick, type, disabled, symbolId }: IButtonProps) => {
	// const defaultClasses = "border-none p-3.5 whitespace-nowrap rounded-full cursor-pointer font-default shadow-md font-bold text-[16px] md:w-full"
	const defaultClasses = "border-none whitespace-nowrap rounded-full cursor-pointer font-default shadow-md font-bold text-[16px] md:w-full flex items-center justify-center gap-[8px] px-[20px] py-[14px]"
	const typeClasses: Record<ButtonType, string> = {
		[ButtonType.Default]: "calculator-btn",
		[ButtonType.White]: "bg-white text-black",
		[ButtonType.Complete]: "",
		[ButtonType.Disabled]: "bg-gray text-white",
	}
	return (
		<button
			type="button"
			onClick={onClick}
			disabled={disabled}
			className={`${defaultClasses} ${typeClasses[type]} outline-none`}
		>
			{text}
			{symbolId &&
				<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none" className={`w-[20px] h-[20px]`}>
					<use xlinkHref={`#${symbolId}`}></use>
				</svg>
			}
		</button>
	)
}

export default Button
