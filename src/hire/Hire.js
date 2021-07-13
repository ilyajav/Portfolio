import React from "react";
import style from './Hire.module.css'
import classNames from "classnames";
import styleContainer from '../common/styles/Container.module.css'


export const Hire = () =>{
    return(
        <div className={style.hireBlock}>
            <div className={classNames(styleContainer.container, style.hireContainer)}>
                <h2 className={style.title}>I am considering the option of working in the office and remotely</h2>
                <button className={style.hireButton}>Hire me</button>
            </div>

        </div>
    )
}
