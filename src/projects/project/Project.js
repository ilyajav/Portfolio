import React from "react";
import style from './Project.module.css'


export const Project = (props) => {
    return (
        <div>
            <div className={style.itemWork}>
                <img />
                <a className={style.link}>Look at work</a>
            </div>
            <div className={style.aboutProject}>
                <h3 className={style.title}>{props.title}</h3>
                <div className={style.description}>{props.description}</div>
            </div>
        </div>
    )
}