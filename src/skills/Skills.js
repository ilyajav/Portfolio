import React from "react";
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import classNames from 'classnames'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={classNames(styleContainer.container, style.skillsContainer)}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'Js'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolorum ducimus fugit iure placeat quidem quis, reprehenderit sed sit voluptatem. Ab, asperiores consequuntur debitis distinctio et facilis perferendis veritatis voluptatum. Aspernatur, cum facilis harum id illo, illum ipsum minima nesciunt numquam optio pariatur quasi quia quisquam quod sequi sint veritatis?'} />
                    <Skill title={'Css'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias architecto aspernatur blanditiis cum deleniti dolore dolorem eius ex facere, incidunt ipsa laborum maxime molestiae nesciunt numquam obcaecati odit, officia porro qui saepe tempora velit voluptatibus? Asperiores assumenda at cupiditate dolores ducimus expedita itaque laboriosam minus? Ab explicabo vero voluptatibus.'} />
                    <Skill title={'React'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias asperiores consectetur consequuntur corporis dolore dolores ducimus, eligendi eos error explicabo fugit impedit in inventore ipsa ipsam iure laborum maxime modi, officiis porro rerum suscipit temporibus! Delectus dicta dignissimos eius, esse illo iusto labore nemo rem vel vero vitae voluptates!'} />
                </div>
            </div>
        </div>
    )
}
