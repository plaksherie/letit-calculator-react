import Step from "@/components/Step/Step"
import {
    getSelectedIndex,
    getSelectedResidentialComplex, resetAllSelects, setSelectedIndexResidentialComplex,
} from "@/features/residentialComplex/residentialComplexSlice"
import {useAppDispatch, useAppSelector} from "@/hooks"
import {useEffect, useRef, useState} from "react"
import {animateScroll} from 'react-scroll'
// import { styles } from "./Calculator.module.css"
import {Address} from "@/components/Address/Address"
import Button from "@/components/Button/Button"
import {ButtonType} from "@/interfaces/Button.ts"
import Service from "@/components/Service/Service.tsx"
import OrderInfo from "@/components/OrderInfo/OrderInfo.tsx"
import OrderForm from "@/components/OrderForm/OrderForm.tsx"
import {
    IFormCalculatorData,
    IFormServiceItem,
    Inputs,
    IFormService,
    IFormEquipmentBlocks
} from "@/interfaces/Form.ts"
import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup";
import {FormApi} from "@/api/form";
import {
    getAllSelectedAdditionalServices, getAllSelectedProducts, getProductsPrice,
    getSelectedAdditionalServices,
    getSelectedParameter, getAllSelectedParameters,
    getSelectedProductsInBlock,
    getServices, getServicesPrice, isBlockedEquipmentBlock
} from "@/features/residentialComplex/utils.ts";
import {getPrice} from "@/utils/price.ts";
import {getTitleService} from "@/utils/title.ts";


const schema = yup
    .object({
        addressConnect: yup.string().required(),
        personal: yup.object({
            surname: yup.string().required(),
            firstname: yup.string().required(),
            middle: yup.string().required(),
            email: yup.string().email().required(),
            phone: yup.string().required().length(16),
            comment: yup.string(),
        }),
        passport: yup.object({
            series: yup.string().required(),
            number: yup.string().required(),
            issued: yup.string().required(),
            date: yup.string().required(),
            address: yup.string().required(),
            birthday: yup.string().required(),
        }),
        agree: yup.bool().oneOf([true]).required(),
    })
    .required()


export const Calculator = () => {
    const [currentStep, setCurrentStep] = useState(0)
    const [sentForm, setSentForm] = useState(false)
    const [numberRequest, setNumberRequest] = useState(0)
    const {
        register,
        trigger,
        control,
        formState: {errors},
        getValues
    } = useForm<Inputs>({resolver: yupResolver(schema)})
    const selectedResidentialComplex = useAppSelector(state => getSelectedResidentialComplex(state.residentialComplex))
    const selectedIndex = useAppSelector(state => getSelectedIndex(state.residentialComplex))
    const services = getServices(selectedResidentialComplex)
    const dispatch = useAppDispatch()
    const calculatorRef = useRef<HTMLDivElement>(null)

    const steps = services.map((service, index) => {
        return <Step
            title={service.title}
            symbolId={service.icon}
            key={index}
            active={currentStep - 1 >= index}></Step>
    })
    const IsLastStep = currentStep === services.length + 1

    const serviceSteps = services.map((service, index) => {
        return (
            <Service serviceIndex={index}
                     titleMainParameters={service.title_main_parameters}
                     mainParameters={service.main_parameters}
                     additionalServices={service.additional_services}
                     equipmentBlocks={service.equipment_blocks}
                     alertContent={service.alert_content}
                     key={index}
            ></Service>
        )
    })
    const allSteps = [<Address></Address>, ...serviceSteps,
        <OrderForm register={register} errors={errors} trigger={trigger} control={control}></OrderForm>]
    // const allSteps = [<Address></Address>,  <OrderForm register={register} errors={errors} trigger={trigger} control={control}></OrderForm>]

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1)
        }
    }

    const nextStep = () => {
        if (selectedIndex < 0) {
            return alert('Выберите адрес из списка')
        }
        if (!IsLastStep) {
            setCurrentStep(currentStep + 1)
        }
    }

    useEffect(() => {
        const options = {
            duration: 500,
            smooth: true,
        }

        if (calculatorRef.current) {
            animateScroll.scrollTo(calculatorRef.current.offsetTop - 50, options)
        }
    }, [currentStep])

    const sendForm = async () => {
        await trigger()
        if (errors.agree) {
            alert('Для отправки заявки примите согласие на обработку персональных данных')
            return
        }
        if (errors.personal || errors.passport || errors.addressConnect) {
            return
        }
        const sendData: IFormCalculatorData = {
            residentialComplex: {
                title: selectedResidentialComplex.title.rendered
            },
            services: services.reduce((serviceAccumulator: IFormService[], service) => {
                const selectedParameter = getSelectedParameter(service)
                const selectedAdditionalServices = getSelectedAdditionalServices(service)
                const equipmentBlocks = service.equipment_blocks
                return [...serviceAccumulator, {
                    title: getTitleService(service),
                    mainParameter: {
                        title: selectedParameter ? selectedParameter.title : '',
                        price: getPrice(selectedParameter?.price),
                    },
                    equipmentBlocks: [
                        ...equipmentBlocks.reduce((blockAccumulator: IFormEquipmentBlocks[], block) => {
                            const isBlocked = isBlockedEquipmentBlock(equipmentBlocks, block)
                            if (isBlocked) {
                                return blockAccumulator
                            }
                            const products = getSelectedProductsInBlock(block)
                            return [...blockAccumulator, {
                                title: block.title,
                                products: [
                                    ...products.reduce((productAccumulator: IFormServiceItem[], product) => {
                                        return [...productAccumulator, {
                                            title: product.title,
                                            price: getPrice(product.price)
                                        }]
                                    }, [])
                                ]
                            }]
                        }, [])

                    ],
                    additionalServices: [
                        ...selectedAdditionalServices.reduce((additionalServiceAccumulator: IFormServiceItem[], additionalService) => {
                            return [...additionalServiceAccumulator, {
                                title: additionalService.title,
                                price: getPrice(additionalService.price)
                            }]
                        }, [])
                    ]
                }]
            }, []),
            servicesAmount: getPrice(getServicesPrice(getAllSelectedParameters(services), getAllSelectedAdditionalServices(services))),
            productsAmount: getPrice(getProductsPrice(getAllSelectedProducts(services))),
            fullAmount: getPrice(getServicesPrice(getAllSelectedParameters(services), getAllSelectedAdditionalServices(services)) + getProductsPrice(getAllSelectedProducts(services))),
            inputs: getValues()
        }
        try {
            const result = await FormApi.calculator(sendData)
            console.log(result)
            if (result.data.status && result.data.numberRequest) {
                setNumberRequest(result.data.numberRequest)
            }
        } catch (e) {
            console.error(e)
        } finally {
            setSentForm(true)
        }
    }

    useEffect(() => {
        // setCurrentStep(0)
    }, [selectedIndex])

    useEffect(() => {
        (async () => {
            await trigger('agree')
        })()
    }, [trigger])

    const clearOrder = () => {
        setCurrentStep(0)
        dispatch(resetAllSelects())
        dispatch(setSelectedIndexResidentialComplex(-1))
    }

    return (
        <>
            <div className="flex w-full mb-20 md:mb-[40px]" ref={calculatorRef}>
                <Step title="Адрес" symbolId="iconAddress" active={true}></Step>
                {steps}
                <Step
                    title="Подтверждение"
                    symbolId="iconComplete"
                    active={currentStep === services.length + 1}></Step>
            </div>
            {!sentForm &&
                <div className="mt-10">
                    <div className="flex gap-5 md:flex-col">
                        <div className="w-full">
                            {allSteps[currentStep]}
                            <div className="flex mt-10 gap-5 md:mt-[20px]">
                                {currentStep > 0 &&
                                    <Button text="Назад" onClick={prevStep} type={ButtonType.White}></Button>}
                                {currentStep < services.length + 1 && (
                                    <Button
                                        type={ButtonType.Default}
                                        text="Далее →"
                                        onClick={nextStep}></Button>
                                )}
                                {IsLastStep && <Button
                                    type={'agree' in errors ? ButtonType.Disabled : ButtonType.Default}
                                    text="Оформить заказ" onClick={sendForm}></Button>}
                            </div>
                        </div>
                        <div className="w-full max-w-[450px] md:max-w-full">
                            <OrderInfo clearOrder={clearOrder}></OrderInfo>
                        </div>
                    </div>
                </div>
            }
            {sentForm &&
                <div className={`mt-[60px] mb-[60px] text-[14px]`}>{`Ваша заявка отправлена. ${numberRequest > 0 && `Номер заявки №${numberRequest}`}`}</div>
            }
        </>
    )
}
