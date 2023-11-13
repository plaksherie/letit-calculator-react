import React from "react"
import { IStep } from "@/interfaces/Step"
import styles from "./Step.module.css"

const Step: React.FC<IStep> = ({ title, symbolId, active }: IStep) => {
	return (
		<div className={`${styles.step} ${active ? styles.active : ""}`}>
			<div className={styles.icon}>
				<svg>
					<use xlinkHref={`#${symbolId}`}></use>
				</svg>
			</div>
			<span className={styles.text}>{title}</span>
		</div>
	)
}

export default Step
