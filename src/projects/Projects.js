import React from "react";
import {Project} from "./project/Project";
import style from "./Projects.module.css";
import classNames from "classnames";
import styleContainer from '../common/styles/Container.module.css'



export const Projects = () =>{
    return(
        <div className={style.worksBlock}>
            <div className={classNames(styleContainer.container, style.worksContainer)}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.works}>
                    <Project title={'SocialNetwork'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur aut beatae, commodi consequatur dignissimos est expedita in inventore laborum magni nihil nobis odio quae, saepe unde ut. Ab animi at culpa cum eaque eligendi, excepturi exercitationem hic incidunt iusto laboriosam neque optio possimus, recusandae sunt, temporibus vero vitae voluptate!'} />
                    <Project title={'TodoList'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ea eius labore molestias mollitia nobis quae soluta totam? Accusantium cumque ex libero, maiores odio rem? Doloremque, eum libero maxime pariatur sapiente vitae? A, eius, eum, eveniet illum laborum libero minima nisi non perferendis quam quidem quod saepe sit totam vitae.'} />
                    <Project title={'Counter'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi excepturi fugit in ipsam odio sequi voluptas. Alias animi aperiam assumenda dolores doloribus eligendi illum ipsa necessitatibus reiciendis. Commodi dignissimos illo magnam, mollitia neque optio recusandae! Asperiores doloribus laborum necessitatibus nostrum placeat quae, quam veritatis! Ad animi illum obcaecati quaerat repellendus.'} />
                </div>
            </div>
        </div>
    )
}