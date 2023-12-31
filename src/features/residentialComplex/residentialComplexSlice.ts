import {residentialComplexApi} from "@/api/residentialComplexApi"
import {IProduct, ResidentialComplex} from "@/interfaces/ResidentialComplex"
import {PayloadAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit"

export const fetchResidentialComplex = createAsyncThunk(
    "residentialComplex/fetchResidentialComplex",
    async () => {
        return await residentialComplexApi.all()
    }
)

interface ResidentialComplexState {
    residentialComplexes: [] | ResidentialComplex[]
    selectedResidentialComplex: number
    status: "idle" | "pending" | "succeeded" | "failed"
    errors?: string
}

interface SelectedMainParameterPayload {
    serviceIndex: number
    mainParameterIndex: number
}

interface SelectedEquipmentPayload {
    serviceIndex: number
    equipmentIndex: number
    productId: number
}

interface SelectedAdditionalServicePayload {
    serviceIndex: number
    additionalServiceIndex: number
}

const initialState = {
    residentialComplexes: [],
    selectedResidentialComplex: -1,
    status: "idle",
    errors: undefined,
} as ResidentialComplexState

const residentialComplexSlice = createSlice({
    name: "residentialComplex",
    initialState,
    reducers: {
        setSelectedIndexResidentialComplex: (state, action: PayloadAction<number>) => {
            state.selectedResidentialComplex = action.payload
        },
        resetAllSelects: (state) => {
            state.residentialComplexes = state.residentialComplexes.map(complex => ({
                ...complex,
                acf: {
                    ...complex.acf,
                    services: complex.acf.services.map(service => ({
                        ...service,
                        main_parameters: service.main_parameters.map(parameter => ({
                            ...parameter,
                            selected: false
                        })),
                        equipment_blocks: service.equipment_blocks.map(block => ({
                            ...block,
                            products: block.products.map(product => ({
                                ...product,
                                selected: false
                            }))
                        })),
                        additional_services: service.additional_services.map(service => ({
                            ...service,
                            selected: false
                        }))
                    }))
                }
            }))
        },
        selectMainParameter: (state, {payload}: PayloadAction<SelectedMainParameterPayload>) => {
            const selectedIndex = getSelectedIndex(state)
            const mainParameters = state.residentialComplexes[selectedIndex].acf.services[payload.serviceIndex].main_parameters
            mainParameters.forEach((parameter, index) => {
                if (parameter.selected) state.residentialComplexes[selectedIndex].acf.services[payload.serviceIndex].main_parameters[index].selected = false
            })
            state.residentialComplexes[selectedIndex].acf.services[payload.serviceIndex].main_parameters[payload.mainParameterIndex].selected = true
        },
        selectEquipment: (state, {payload}: PayloadAction<SelectedEquipmentPayload>) => {
            const selectedIndex = getSelectedIndex(state)
            const equipmentBlocks = state.residentialComplexes[selectedIndex].acf.services[payload.serviceIndex].equipment_blocks
            const equipmentBlock = equipmentBlocks[payload.equipmentIndex]
            const products = equipmentBlock.products
            const {product, productIndex} = getProductById(products, payload.productId)

            // radio
            if (equipmentBlock.only_one) {
                let skip = false
                products.forEach((_product, index) => {
                    if (_product.selected && products.length > 1) {
                        if (_product.id === product?.id) skip = true
                        state.residentialComplexes[selectedIndex].acf.services[payload.serviceIndex].equipment_blocks[payload.equipmentIndex].products[index].selected = false
                    }
                })
                if (skip && products.length > 1) return
            }

            if (equipmentBlock.only_select) {
                equipmentBlocks.forEach((block, index) => {
                    block.products.forEach((product, productIndex) => {
                        if (index === payload.equipmentIndex && product.id === payload.productId) return
                        state.residentialComplexes[selectedIndex].acf.services[payload.serviceIndex].equipment_blocks[index].products[productIndex].selected = false
                    })
                })
            }
            state.residentialComplexes[selectedIndex].acf.services[payload.serviceIndex].equipment_blocks[payload.equipmentIndex].products[productIndex].selected = !product?.selected
        },
        selectAdditionalService: (state, {payload}: PayloadAction<SelectedAdditionalServicePayload>) => {
            const selectedIndex = getSelectedIndex(state)
            const additionalService = state.residentialComplexes[selectedIndex].acf.services[payload.serviceIndex].additional_services[payload.additionalServiceIndex]
            state.residentialComplexes[selectedIndex].acf.services[payload.serviceIndex].additional_services[payload.additionalServiceIndex].selected = !additionalService.selected
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchResidentialComplex.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.residentialComplexes = action.payload
            })
            .addCase(fetchResidentialComplex.rejected, (state, action) => {
                state.status = "failed"
                state.errors = action.error.message
            })
    },
})

export const selectAllResidentialComplexes = (state: ResidentialComplexState) =>
    state.residentialComplexes

export const getSelectedIndex = (state: ResidentialComplexState) =>
    state.selectedResidentialComplex

export const getSelectedResidentialComplex = (state: ResidentialComplexState) => {
    return state.residentialComplexes[state.selectedResidentialComplex]
}

export const getProductById = (products: IProduct[], id: number) => {
    let productIndex = 0
    return {
        product: products.find((item, i) => {
            if (item.id == id) {
                productIndex = i
                return true
            }
        }),
        productIndex
    }
}

export const getResidentialComplexStatus = (state: ResidentialComplexState) => state.status

export const {
    resetAllSelects,
    setSelectedIndexResidentialComplex,
    selectMainParameter,
    selectEquipment,
    selectAdditionalService
} = residentialComplexSlice.actions

export default residentialComplexSlice.reducer
