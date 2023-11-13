import {useAppSelector} from "@/hooks.ts";
import {getSelectedResidentialComplex} from "@/features/residentialComplex/residentialComplexSlice.ts";
import React, {JSX} from "react";
import {getPrice} from "@/utils/price.ts";
import {IAcfService} from "@/interfaces/ResidentialComplex.ts";
import {
    getAllSelectedAdditionalServices,
    getAllSelectedProducts, getProductsPrice,
    getSelectedAdditionalServices,
    getSelectedParameter, getAllSelectedParameters,
    getSelectedProducts, getServices, getServicesPrice
} from "@/features/residentialComplex/utils.ts";
import {getTitleService} from "@/utils/title.ts";


interface IElementService {
    title?: string
    text?: string
}

interface IOrderInfoProps {
    clearOrder: () => void
}

const OrderInfo: React.FC<IOrderInfoProps> = ({clearOrder}: IOrderInfoProps) => {
    const selectedResidentialComplex = useAppSelector(state => getSelectedResidentialComplex(state.residentialComplex))
    const services = getServices(selectedResidentialComplex)

    const elementsService = (elements: IElementService[]) => {
        return (
            <>
                {elements.map((element, index) => (
                    <div className={`flex gap-[3px] leading-relaxed flex-wrap`} key={index}>
                        {element.title &&
                            <span className={`font-bold text-[14px]`}
                                  dangerouslySetInnerHTML={{__html: `${element.title}:`}}></span>
                        }
                        {
                            element.text &&
                            <span className={`font-normal text-[14px]`}
                                  dangerouslySetInnerHTML={{__html: element.text}}></span>
                        }
                    </div>
                ))}

            </>
        )
    }

    const elementOrder = (symbolId: string, title: string, elements: JSX.Element) => {
        return (
            <>
                <div
                    className={`flex gap-[20px] pb-[20px] mb-[20px] border-[0] border-middleBlue border-b-[1px] border-solid`}>
                    <div
                        className={`w-[45px] h-[45px] bg-blue rounded-full flex align-middle justify-center flex-custom`}>
                        <svg className={`fill-white w-[40px] h-auto`} viewBox="0 0 50 50">
                            <use xlinkHref={`#${symbolId}`}></use>
                        </svg>
                    </div>
                    <div className="">
                        {title &&
                            <div className={`text-blue font-bold text-[14px] leading-relaxed`}>{`${title}:`}</div>
                        }
                        {elements}
                    </div>
                </div>
            </>
        )
    }

    const elementCalculation = (title: string, price: string | number, titleClasses?: string, priceClasses?: string) => {
        return (
            <>
                <div className="flex justify-between leading-relaxed">
                    <div className={`text-blue font-bold text-[14px] ${titleClasses}`}>{`${title}:`}</div>
                    <div className={`font-bold text-[14px] ${priceClasses}`}>{getPrice(price)}</div>
                </div>
            </>
        )
    }

    const isShowElementOrder = (service: IAcfService): boolean => {
        const parameter = getSelectedParameter(service)
        return parameter && !parameter.skip || getSelectedProducts(service).length > 0 || getSelectedAdditionalServices(service).length > 0
    }

    // const clear = () => {
    //
    // }


    return (
        <>
            <div className="bg-lightBlue w-full p-[40px] box-border sticky top-[80px]">
                <div className="flex justify-between align-middle mb-[20px]">
                    <div className="font-bold text-[18px]">Ваш выбор:</div>
                    {(getAllSelectedAdditionalServices(services).length > 0 || getAllSelectedProducts(services).length > 0 || getAllSelectedParameters(services).length > 0) &&
                        <div
                            onClick={clearOrder}
                            className="cursor-pointer text-gray underline text-[12px] font-normal flex items-center justify-center gap-[5px]">
                            <svg className={`fill-gray w-[9px] h-auto`} width="100" height="100">
                                <use xlinkHref={`#iconClose`}></use>
                            </svg>

                            <span>Очистить</span>
                        </div>
                    }
                </div>
                {elementOrder('iconAddress', 'Адрес', elementsService(
                    [
                        {
                            text: typeof selectedResidentialComplex !== 'undefined' ? selectedResidentialComplex.title.rendered : 'Выберите адрес подключения'
                        },
                    ]
                ))}
                {services.map((service, index) => (
                    isShowElementOrder(service) &&
                    <div key={index}>
                        {elementOrder(service.icon, getTitleService(service), elementsService(
                            [
                                {
                                    title: getSelectedParameter(service)?.title,
                                    text: getPrice(getSelectedParameter(service)?.price),
                                },
                                ...getSelectedProducts(service).reduce((accumulator: IElementService[], product) => {
                                    return [...accumulator, {title: product.title, text: getPrice(product.price)}]
                                }, []),
                                ...getSelectedAdditionalServices(service).reduce((accumulator: IElementService[], additionalService) => {
                                    return [...accumulator, {
                                        title: additionalService.title,
                                        text: getPrice(additionalService.price)
                                    }]
                                }, []),
                            ]
                        ))}
                    </div>
                ))}
                {elementCalculation('Услуги', getServicesPrice(getAllSelectedParameters(services), getAllSelectedAdditionalServices(services)))}
                {elementCalculation('Товары', getProductsPrice(getAllSelectedProducts(services)))}
                <div className={`mt-[20px]`}></div>
                {elementCalculation('Итого', getServicesPrice(getAllSelectedParameters(services), getAllSelectedAdditionalServices(services)) + getProductsPrice(getAllSelectedProducts(services)), 'text-[18px]', 'text-[18px]')}
            </div>
        </>
    )
}

export default OrderInfo