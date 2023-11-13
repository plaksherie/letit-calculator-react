import {
    IAcfService,
    IAdditionalService, IEquipmentBlock,
    IMainParameter,
    IProduct,
    ResidentialComplex
} from "@/interfaces/ResidentialComplex.ts";

export const getAllSelectedParameters = (services: IAcfService[]): IMainParameter[] => {
    return services.flatMap(({ main_parameters }) =>
        main_parameters.filter(parameter => parameter.selected)
    )
}

export const getSelectedParameter = (service: IAcfService): IMainParameter | undefined => {
    return service.main_parameters.find((parameter) => parameter.selected)
}

export const getServicesPrice = (parameters: IMainParameter[], additionalServices: IAdditionalService[]) => {
    let price = parameters.reduce(
        (accumulator, parameter) => {
            return !Number.isNaN(Number(parameter.price)) ? accumulator + Number(parameter.price) : accumulator
        },
        0,
    )
    price += additionalServices.reduce(
        (accumulator, service) => {
            return !Number.isNaN(Number(service.price)) ? accumulator + Number(service.price) : accumulator
        },
        0,
    )
    return price
}

export const getProductsPrice = (products: IProduct[]) => {
    return products.reduce(
        (accumulator, product) => {
            return !Number.isNaN(Number(product.price)) ? accumulator + Number(product.price) : accumulator
        },
        0,
    )
}

export const getSelectedProductsInBlock = (equipmentBlock: IEquipmentBlock): IProduct[] => {
    return equipmentBlock.products.filter(product => product.selected)
}

export const getSelectedProducts = (service: IAcfService): IProduct[] => {
    const parameter = getSelectedParameter(service)
    if (parameter?.skip_products) return []
    return service.equipment_blocks.flatMap(block => {
        const isBlocked = isBlockedEquipmentBlock(service.equipment_blocks, block)
        if (!isBlocked) {
            return getSelectedProductsInBlock(block)
        }
        return []
    })
}

export const getAllSelectedProducts = (services: IAcfService[]): IProduct[] => {
    return services.reduce(
        (accumulator: IProduct[], service) => {
            return accumulator.concat(getSelectedProducts(service))
        },
        []
    )
}

export const getAllSelectedAdditionalServices = (services: IAcfService[]): IAdditionalService[] => {
    return services.reduce(
        (accumulator: IAdditionalService[], service) => {
            return accumulator.concat(getSelectedAdditionalServices(service))
        },
        []
    )
}

export const getSelectedAdditionalServices = (service: IAcfService): IAdditionalService[] => {
    const parameter = getSelectedParameter(service)
    if (parameter?.skip_products) return []
    return service.additional_services.filter(addService => addService.selected)
}

export const getServices = (selectedResidentialComplex?: ResidentialComplex) => {
    return selectedResidentialComplex ? selectedResidentialComplex.acf.services : []
}

export const isBlockedEquipmentBlock = (blocks: IEquipmentBlock[], currentBlock: IEquipmentBlock): boolean => {
    const blockOnlySelectWithSelectedProduct = blocks.find(block => {
        if (!block.only_select) return false
        const product = block.products.find(product => {
            return product.selected
        })
        if (product) {
            return true
        }
    })
    return !!(blockOnlySelectWithSelectedProduct && !currentBlock.only_select)

}