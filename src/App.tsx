import { Calculator } from "@/components/Calculator/Calculator"
import Svg from "@/components/Svg/Svg"
import {
	fetchResidentialComplex,
	getResidentialComplexStatus, selectAllResidentialComplexes,
} from "@/features/residentialComplex/residentialComplexSlice"
import { useAppDispatch, useAppSelector } from "@/hooks"
import { useEffect } from "react"
import {fetchLinks} from "@/features/Links/LinksSlice.ts";

const App = () => {
	const dispatch = useAppDispatch()
	const residentialComplexStatus = useAppSelector(state => getResidentialComplexStatus(state.residentialComplex))
	const allResidentialComplex = useAppSelector(state => selectAllResidentialComplexes(state.residentialComplex))

	useEffect(() => {
		if (residentialComplexStatus === "idle") {
			dispatch(fetchResidentialComplex())
			dispatch(fetchLinks())
		}
	}, [residentialComplexStatus, dispatch])

	return (
		<>
			<Svg></Svg>
			{allResidentialComplex.length > 0 &&
				<Calculator></Calculator>
			}
		</>
	)
}

export default App
