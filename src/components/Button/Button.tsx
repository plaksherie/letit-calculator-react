import { ButtonType, IButtonProps } from "@/interfaces/Button"
import React from "react"

const Button: React.FC<IButtonProps> = ({ text, onClick, type, disabled }: IButtonProps) => {
	const defaultClasses = "border-none p-3.5 whitespace-nowrap rounded-full cursor-pointer font-default shadow-md font-bold text-[16px] md:w-full"
	const typeClasses: Record<ButtonType, string> = {
		[ButtonType.Default]: "bg-red text-white",
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
		</button>
	)
}

export default Button
