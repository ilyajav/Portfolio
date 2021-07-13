import React from "react";
import style from "./Contacts.module.css"
import classNames from "classnames";
import styleContainer from '../common/styles/Container.module.css'

export const Contacts = () =>{
    return(
        <div className={style.contactsBlock}>
            <div className={classNames(styleContainer.container, style.contactsContainer)}>
                <h2 className={style.title}>Contacts</h2>
                <div className={style.contactsForm}>
                    <form className={style.commonForm}>
                        <input />
                    </form>
                    <form className={style.commonForm}>
                        <input />
                    </form>
                    <form className={style.bigForm}>
                        <input />
                    </form>
                </div>
                <button className={style.sendButton}>Send</button>

            </div>
        </div>
    )
}
