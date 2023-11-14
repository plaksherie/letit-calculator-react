export enum ButtonType {
	Default = "default",
	White = "white",
	Complete = "complete",
	Disabled = "disabled",
}

export interface IButtonProps {
	text: string
	onClick?: () => void
	type: ButtonType
	disabled?: boolean
	symbolId?: string
}
