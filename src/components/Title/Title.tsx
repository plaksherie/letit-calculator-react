import { ITitle } from "@/interfaces/Title"
import React from "react"

const Title: React.FC<ITitle> = ({ text }: ITitle) => {
	return <div className="text-lg font-bold">{text}</div>
}

export default Title
