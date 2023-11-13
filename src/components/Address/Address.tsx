import Title from "@/components/Title/Title"
import {
	getSelectedIndex,
	selectAllResidentialComplexes,
	setSelectedIndexResidentialComplex,
} from "@/features/residentialComplex/residentialComplexSlice"
import { useAppDispatch, useAppSelector } from "@/hooks"
import React from "react"
import styles from "./Address.module.css"

export const Address = () => {
	const dispatch = useAppDispatch()
	const residentialComplexes = useAppSelector(state => selectAllResidentialComplexes(state.residentialComplex))
	const selectedIndexResidentialComplex = useAppSelector(state => getSelectedIndex(state.residentialComplex))
	const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		dispatch(setSelectedIndexResidentialComplex(Number(e.target.value)))
	}

	return (
		<>
			<Title text="Выберите ваш жилой комплекс:"></Title>
			<select
				className={`${styles.select} mt-5 p-2 font-default`}
				value={selectedIndexResidentialComplex}
				onChange={selectChange}>
				<option disabled={true} value={'-1'}>-- Выберите жилой комплекс --</option>
				{residentialComplexes.map((item, index) => (
					<option
						value={index}
						key={item.id}
						dangerouslySetInnerHTML={{ __html: item.title.rendered }}></option>
				))}
			</select>
		</>
	)
}
