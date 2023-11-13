import {IServiceProps} from "@/interfaces/Service.ts";
import React, {useEffect} from "react";
import MainParameter from "@/components/MainParameter/MainParameter.tsx";
import Equipment from "@/components/Equipment/Equipment.tsx";
import AdditionalService from "@/components/AdditionalService/AdditionalService.tsx";
import Title from "@/components/Title/Title.tsx";
import Alert from "@/components/Alert/Alert.tsx";
import {useAppDispatch, useAppSelector} from "@/hooks.ts";
import {
    getSelectedIndex, getSelectedResidentialComplex, selectAdditionalService,
    selectEquipment,
    selectMainParameter
} from "@/features/residentialComplex/residentialComplexSlice.ts";
import {getSelectedParameter, getServices, isBlockedEquipmentBlock} from "@/features/residentialComplex/utils.ts";
import styles from './Service.module.css'


const Service: React.FC<IServiceProps> = ({
                                              serviceIndex,
                                              titleMainParameters,
                                              mainParameters,
                                              equipmentBlocks,
                                              additionalServices,
                                              alertContent
                                          }: IServiceProps) => {
    const dispatch = useAppDispatch()
    const selectedResidentialComplex = useAppSelector(state => getSelectedResidentialComplex(state.residentialComplex))
    const selectedIndexResidentialComplex = useAppSelector(state => getSelectedIndex(state.residentialComplex))
    const services = getServices(selectedResidentialComplex)
    const selectedMainParameter = getSelectedParameter(services[serviceIndex])

    useEffect(() => {
        const mainParameters = selectedResidentialComplex.acf.services[serviceIndex].main_parameters
        const findSelected = mainParameters.find(parameter => {
            return parameter.selected
        })
        if (!findSelected) {
            dispatch(selectMainParameter({serviceIndex: serviceIndex, mainParameterIndex: 0}))
        }
    }, [selectedIndexResidentialComplex, dispatch, serviceIndex, selectedResidentialComplex])

    const isSkipProduct = () => selectedMainParameter?.skip_products

    return (
        <>
            <div className={`mb-5`}>
                <Title text={titleMainParameters}></Title>
            </div>
            <div className={`flex w-full items-start mb-[40px]`}>
                {mainParameters.map((parameter, index) => (
                    <MainParameter
                        parameter={parameter}
                        key={index}
                        active={parameter.selected}
                        onClick={() => dispatch(selectMainParameter({
                            serviceIndex: serviceIndex,
                            mainParameterIndex: index
                        }))}></MainParameter>
                ))}
            </div>
            {(selectedMainParameter) &&
                <>
                    <div
                        className={`${styles.tooltip} bg-lightBlue md:block py-[20px] px-[40px] rounded-[4px] mb-[20px]`}>
                        <div className="font-bold text-[18px] leading-relaxed">{selectedMainParameter.title}</div>
                        {selectedMainParameter.tooltip !== '' &&
                            <div className={`${styles.text} mt-[5px]`}
                                 dangerouslySetInnerHTML={{__html: selectedMainParameter.tooltip}}></div>
                        }
                    </div>
                </>
            }
            {alertContent &&
                <Alert content={alertContent}></Alert>
            }

            {(!isSkipProduct()) && equipmentBlocks.map((item, index) => (
                <div className={`mb-[40px] md:mb-[20px]`} key={index}>
                    <div className="mb-[20px]">
                        <Title text={item.title}></Title>
                    </div>
                    <Equipment
                        data={item}
                        onClick={(productId) => dispatch(selectEquipment({
                            serviceIndex: serviceIndex,
                            equipmentIndex: index,
                            productId: productId
                        }))}
                        disabled={isBlockedEquipmentBlock(equipmentBlocks, item)}
                    ></Equipment>
                </div>
            ))}

            {(!isSkipProduct()) &&
                <>
                    {additionalServices.length > 0 &&
                        <div className="mb-[20px]">
                            <Title text={`Дополнительные услуги:`}></Title>
                        </div>
                    }
                    {additionalServices.map((item, index) => (
                        <AdditionalService service={item}
                                           onClick={() => dispatch(selectAdditionalService({
                                               serviceIndex: serviceIndex,
                                               additionalServiceIndex: index
                                           }))}
                                           key={index}></AdditionalService>
                    ))}
                </>
            }
        </>
    )
}

export default Service