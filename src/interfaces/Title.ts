import React from "react";

export interface ITitle {
	text: string
}

export interface ITitleFieldProps {
	children: React.ReactNode
	required?: boolean
}