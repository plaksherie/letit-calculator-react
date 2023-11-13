import React from "react";
import {IAlertProps} from "@/interfaces/Alert.ts";
import styles from './Alert.module.css'


const Alert: React.FC<IAlertProps> = ({content}: IAlertProps) => {
    return <div dangerouslySetInnerHTML={{__html: content}} className={`${styles.alert} bg-lightRed px-[40px] py-[20px] mb-[20px]`}></div>
}

export default Alert