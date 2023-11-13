import React, {LegacyRef} from "react"
import TitleForm from "@/components/Title/TitleForm.tsx"
import styles from './OrderForm.module.css'
import Title from "@/components/Title/Title.tsx"
import {IOrderFormProps} from "@/interfaces/Form.ts"
import {useIMask} from "react-imask"
import {Controller} from "react-hook-form";
import {getLinks} from "@/features/Links/LinksSlice.ts";
import {useAppSelector} from "@/hooks.ts";


const OrderForm: React.FC<IOrderFormProps> = ({register, errors, trigger, control}: IOrderFormProps) => {
    const links = useAppSelector(state => getLinks(state.links))

    const errorClasses = 'border-red'
    const mask = useIMask({
        mask: '+7(000) 000-0000',
    })

    return (
        <>
            <form>
                <div className="mb-[60px] leading-relaxed text-[14px] font-normal">
                    Ваш предварительный заказ сформирован. Остался всего один заключительный шаг — оформление заявки на
                    подключение услуг. Внесите ваши персональные данные для формирования заявки.
                </div>
                <div className={`${styles.field}`}>
                    <TitleForm required={true}>Адрес подключения:</TitleForm>
                    <input
                        className={`${styles.input} ${errors.addressConnect && errorClasses}`}
                        {...register("addressConnect", {required: true})}
                        onBlur={async () => await trigger('addressConnect')}
                    />
                    <span className={`font-normal leading-relaxed text-[12px] mt-[2px]`}>Укажите адрес подключения - улица, дом, корпус, квартира</span>
                </div>
                <div className={`mt-[60px] mb-[20px]`}>
                    <Title text={'Контактная информация:'}></Title>
                </div>
                <div className={`flex gap-[20px] sm:flex-col sm:gap-0`}>
                    <div className={`${styles.field}`}>
                        <TitleForm required={true}>Фамилия:</TitleForm>
                        <input
                            className={`${styles.input} ${errors.personal?.surname && errorClasses}`}
                            placeholder={`Иванов`}
                            {...register("personal.surname")}
                            onBlur={async () => await trigger('personal.surname')}
                        />
                    </div>
                    <div className={`${styles.field}`}>
                        <TitleForm required={true}>Имя:</TitleForm>
                        <input
                            className={`${styles.input} ${errors.personal?.firstname && errorClasses}`}
                            placeholder={`Иван`}
                            {...register("personal.firstname")}
                            onBlur={async () => await trigger('personal.firstname')}
                        />
                    </div>
                    <div className={`${styles.field}`}>
                        <TitleForm required={true}>Отечество:</TitleForm>
                        <input
                            className={`${styles.input} ${errors.personal?.middle && errorClasses}`}
                            placeholder={`Иванович`}
                            {...register("personal.middle")}
                            onBlur={async () => await trigger('personal.middle')}
                        />
                    </div>
                </div>
                <div className="flex gap-[20px] sm:flex-col sm:gap-0">
                    <div className={`${styles.field}`}>
                        <TitleForm required={true}>Серия паспорта:</TitleForm>
                        <input
                            className={`${styles.input} ${errors.passport?.series && errorClasses}`}
                            {...register("passport.series")}
                            onBlur={async () => await trigger('passport.series')}
                        />
                    </div>
                    <div className={`${styles.field}`}>
                        <TitleForm required={true}>Номер паспорта:</TitleForm>
                        <input
                            className={`${styles.input} ${errors.passport?.number && errorClasses}`}
                            {...register("passport.number")}
                            onBlur={async () => await trigger('passport.number')}
                        />
                    </div>
                </div>
                <div className="">
                    <div className={`${styles.field}`}>
                        <TitleForm required={true}>Кем выдан:</TitleForm>
                        <input
                            className={`${styles.input} ${errors.passport?.issued && errorClasses}`}
                            {...register("passport.issued")}
                            onBlur={async () => await trigger('passport.issued')}
                        />
                    </div>
                </div>
                <div className="">
                    <div className={`${styles.field}`}>
                        <TitleForm required={true}>Дата выдачи паспорта:</TitleForm>
                        <input
                            className={`${styles.input} ${errors.passport?.date && errorClasses}`}
                            {...register("passport.date")}
                            onBlur={async () => await trigger('passport.date')}
                        />
                    </div>
                </div>
                <div className="">
                    <div className={`${styles.field}`}>
                        <TitleForm required={true}>Адрес регистрации:</TitleForm>
                        <input
                            className={`${styles.input} ${errors.passport?.address && errorClasses}`}
                            {...register("passport.address")}
                            onBlur={async () => await trigger('passport.address')}
                        />
                    </div>
                </div>
                <div className="">
                    <div className={`${styles.field}`}>
                        <TitleForm required={true}>Дата рождения:</TitleForm>
                        <input
                            className={`${styles.input} ${errors.passport?.birthday && errorClasses}`}
                            {...register("passport.birthday")}
                            onBlur={async () => await trigger('passport.birthday')}
                        />
                    </div>
                </div>
                <div className="flex gap-[20px] sm:flex-col sm:gap-0">
                    <div className={`${styles.field}`}>
                        <TitleForm required={true}>E-Mail:</TitleForm>
                        <input
                            className={`${styles.input} ${errors.personal?.email && errorClasses}`}
                            {...register("personal.email")}
                            onBlur={async () => await trigger('personal.email')}
                        />
                    </div>
                    <div
                        className={`${styles.field}`}>
                        <TitleForm required={true}>Телефон:</TitleForm>
                        <Controller
                            render={({field: {onChange}}) => (
                                <input
                                    name={`personal.phone`}
                                    className={`${styles.input} ${errors.personal?.phone && errorClasses}`}
                                    onChange={() => {
                                        onChange({
                                            target: {value: mask.value}
                                        })
                                    }}
                                    onBlur={async () => await trigger('personal.phone')}
                                    ref={mask.ref as LegacyRef<HTMLInputElement>}
                                />
                            )}
                            name={'personal.phone'}
                            control={control}
                        ></Controller>
                    </div>
                </div>
                <div className="">
                    <div className={`${styles.field}`}>
                        <TitleForm required={false}>Комментарии:</TitleForm>
                        <textarea
                            className={`${styles.input}`}
                            {...register("personal.comment")}
                            onBlur={async () => await trigger('personal.comment')}
                        />
                    </div>
                </div>
                <label className={`cursor-pointer`} onChange={() => trigger('agree')}>
                    <input className={`w-[16px] h-[16px] mr-[6px]`}
                           type="checkbox" {...register("agree", {required: true})} />
                    <span className={`text-[14px]`}>Даю согласие на обработку <a
                        href={links?.agreement} target="_blank">персональных данных</a> и принимаю условия <a
                        href={links?.politic} target="_blank">Политики
                                        конфиденциальности</a></span>
                </label>
            </form>
        </>
    )
}

export default OrderForm