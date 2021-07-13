import React from "react";
import style from "./Footer.module.css"
import classNames from "classnames";
import styleContainer from '../common/styles/Container.module.css'
import {Item} from "./item/Item";

export const Footer = () =>{
    const logoC = '\u00A9'
    return(
        <div className={style.footerBlock}>
            <div className={classNames(styleContainer.container, style.footerContainer)}>
                <div className={style.title}>Ilya Yavorovskiy</div>
                <div className={style.items}>
                    <Item />
                    <Item />
                    <Item />
                </div>
                <div className={style.year}>
                    {logoC} 2021 all rights reserved
                </div>
            </div>
        </div>
    )
}
