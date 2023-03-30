import { FC, MouseEventHandler } from "react";
import styles from '../../styles/myButton.module.scss'

interface MyButtonProps {
    children: any,
    onClick?: MouseEventHandler,
    default?: boolean,
    disabled?: boolean,
    success?: boolean,
    danger?: boolean,
    large?: boolean,
    block?: boolean,
}

const MyButton:FC<MyButtonProps> = (props) => {
    let style = [styles.button]
    if (props.default) {style.push(styles.button_default)}
    else if (props.success) {style.push(styles.button_success)}
    else if (props.danger) {style.push(styles.button_danger)}

    if (props.disabled) {style.push(styles.button_disabled)}

    if (props.large) {style.push(styles.button_large)}

    if (props.block) {style.push(styles.button_block)}

    return (
        <button 
            className={style.join(' ')}
            disabled={props.disabled} 
            {...props} />
    )
}

export default MyButton;