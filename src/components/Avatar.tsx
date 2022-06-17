import {ImgHTMLAttributes} from 'react';
import styles from "./Avatar.module.css"

interface AvatarParms extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean;
}


export function Avatar({hasBorder = true, ...props}: AvatarParms) {
    return(
        <img
            className={ hasBorder ? styles.avatarWithBorder : styles.avatar}
            {
                ...props
            }
        />
    );
}